import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override async transform(value: T, metadata: ArgumentMetadata) {
    // Se não existir o bankAccountId, não tente validar!
    if (typeof value === 'undefined') return;

    return super.transform(value, metadata);
  }
}
