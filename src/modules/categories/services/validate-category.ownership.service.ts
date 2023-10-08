import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class ValidateCategoryOwnerShipService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async validate(userId: string, categoryId: string) {
    // Verificando se o usuário que solicitou update é realmente o dono da conta
    // O id da conta pertence ao usuário logado?
    const isOwner = await this.categoriesRepo.findFirst({
      where: { id: categoryId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Category not found.');
    }
  }
}
