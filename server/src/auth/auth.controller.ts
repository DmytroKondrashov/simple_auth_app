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
  async logout(@Req() request) {
    if (request?.user) {
      const { accessToken, email } = request.user;
      request.logout();
      await this.authService.updateUser(email, { accessToken: undefined });
      await axios.post(
        `https://oauth2.googleapis.com/revoke?token=${accessToken}`,
      );
      return { msg: 'Logged out!' };
    } else {
      return { msg: 'You must first be logged in!' };
    }
  }
}
