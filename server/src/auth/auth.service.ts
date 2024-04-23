import { Injectable } from '@nestjs/common';
import { UserDetails } from 'src/utils/types';

@Injectable()
export class AuthService {
  validateUser(details: UserDetails) {
    console.log('=========================');
    console.log(details);
    console.log('=========================');
  }
}
