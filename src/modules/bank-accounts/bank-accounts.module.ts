import { Module } from '@nestjs/common';
import { BankAccountsService } from './services/bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { ValidateBankAccountOwnerShipService } from './services/validate-bank-account.ownership.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService, ValidateBankAccountOwnerShipService],
  exports: [ValidateBankAccountOwnerShipService],
})
export class BankAccountsModule {}
