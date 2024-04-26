import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/account';
import { AccountDetails } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async createAccount(data: AccountDetails) {
    const fullData = { ...data, createdAt: Date.now() };
    return this.accountRepository.create(fullData);
  }
}
