import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidateTransactionOwnerShipService {
  constructor(private readonly transactionRepo: TransactionsRepository) {}

  async validate(userId: string, transactionId: string) {
    // Verificando se o usuário que solicitou update é realmente o dono da conta
    // O id da conta pertence ao usuário logado?
    const isOwner = await this.transactionRepo.findFirst({
      where: { id: transactionId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction not found.');
    }
  }
}
