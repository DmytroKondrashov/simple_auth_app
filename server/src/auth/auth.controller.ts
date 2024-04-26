import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/guards';

@Controller('auth')
export class AuthController {
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
  logout(@Req() request) {
    if (request?.user?.accessToken) {
      console.log(request.user.accessToken);
      return { msg: 'Logged out!' };
    } else {
      return { msg: 'You must first be logged in!' };
    }
  }
}
