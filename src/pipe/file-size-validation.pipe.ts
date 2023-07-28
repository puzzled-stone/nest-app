import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
    private limitKb: number;
    private readonly KB = 1000;

    public constructor(limitKb?: number) {
        this.limitKb = limitKb;
    }

    transform(value: any, metadata: ArgumentMetadata) {
        this.limitKb = this.limitKb || 1;
        const oneKb = this.limitKb * this.KB;
        return value.size < oneKb;
    }
}
