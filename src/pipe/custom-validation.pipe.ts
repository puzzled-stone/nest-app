import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParamValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const varName = metadata.data ? metadata.data : '';
        if (metadata.type === 'param') {
            console.log(typeof value);
            switch (metadata.metatype.name) {
                case 'Number':
                    if (isNaN(value)) {
                        throw new BadRequestException('参数' + varName + '必须是数字');
                    }
                    break;
                case 'String':
                    if (value === '') {
                        throw new BadRequestException('参数' + varName + '不能为空');
                    }
                    break;
                default:
                    break;
            }
        }
        return value;
    }
}
