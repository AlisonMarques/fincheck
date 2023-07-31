import { plainToInstance } from 'class-transformer';
import { IsString, NotEquals, IsNotEmpty, validateSync } from 'class-validator';

// Validando variáveis de ambiente
class Env {
  @IsString()
  @IsNotEmpty()
  @NotEquals('unsecure_jwt_secret')
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  dbURL: string;
}

// Criando uma instância da classe Env e populando com os valores das variáveis de ambiente
export const env: Env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  dbURL: process.env.DATABASE_URL,
});

const errors = validateSync(env);

if (errors.length > 0) {
  throw new Error(JSON.stringify(errors, null, 2));
}
