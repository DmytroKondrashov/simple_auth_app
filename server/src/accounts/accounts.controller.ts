import { Controller, Post, Req } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountDetails, UpdateAccount } from 'src/utils/types';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @Post()
  async createAccount(@Req() request: AccountDetails) {
    return this.accountService.createAccount(request);
  }

  @Post()
  async editAccount(@Req() request: UpdateAccount) {
    return this.accountService.updateAccount(request);
  }
}
