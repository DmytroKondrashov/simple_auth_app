import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/guards';
import { AuthService } from './auth.service';
import axios from 'axios';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Authentication!' };
  }

  @Get('/google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK!' };
  }

  @Get('status')
  user(@Req() request) {
    if (request.user) {
      return { msg: 'Authenticated!' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }

  @Get('logout')
  async logout(@Req() req) {
    if (!req?.user) {
      return { msg: 'You must first be logged in!' };
    }
    const { accessToken, email } = req.user;
    await axios.post(
      `https://oauth2.googleapis.com/revoke?token=${accessToken}`,
    );
    await this.authService.updateUser(email, { accessToken: null });
    req.logout((err) => {
      if (err) {
        console.error('Error during logout:', err);
      }
    });
    return { msg: 'Logged out!' };
  }
}
