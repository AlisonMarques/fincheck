import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  override transform(
    value: string,
    metadata: ArgumentMetadata,
  ): Promise<string> {
    // Se não existir o bankAccountId, não tente validar!
    if (typeof value === 'undefined') return;

    return super.transform(value, metadata);
  }
}
