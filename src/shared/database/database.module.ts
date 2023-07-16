import { Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';

// Com o @Global não vai ser necessário importar o DatabaseModule em outros módulos para utilizar o UsersRepository
@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  // exportando o UsersRepository para que possa ser injetado em outros módulos
  exports: [UsersRepository],
})
export class DatabaseModule {}
