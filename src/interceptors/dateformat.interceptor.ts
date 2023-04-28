import { map, Observable } from 'rxjs';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

@Injectable()
export class DateformatInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                if (Array.isArray(data)) {
                    return data.map((item) => this.transformDate(item));
                } else {
                    return this.transformDate(data);
                }
            }),
        );
    }

    private transformDate(data: any): any {
        for (const key in data) {
            if (data[key] instanceof Date) {
                let month = data[key].getMonth() + 1;
                month = month < 10 ? '0' + month : month;
                let day = data[key].getDate();
                day = day < 10 ? '0' + day : day;
                data[key] =
                    data[key].getFullYear() +
                    '-' +
                    month +
                    '-' +
                    day +
                    ' ' +
                    data[key].getHours() +
                    ':' +
                    data[key].getMinutes() +
                    ':' +
                    data[key].getSeconds();
            } else if (typeof data[key] === 'object') {
                this.transformDate(data[key]);
            }
        }
        return data;
    }
}
