import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(details: UserDetails) {
    console.log('=========================');
    console.log(details);
    console.log('=========================');
    const user = await this.userRepository.findOneBy({ email: details.email });
    if (user) return user;
  }
}
