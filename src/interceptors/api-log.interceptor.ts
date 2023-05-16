import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { ApiLogService } from 'src/api-log/api-log.service';
import { CreateApiLogDto } from 'src/api-log/dto/create-api-log.dto';
import { ApiLog } from 'src/api-log/entities/api-log.entity';

@Injectable()
export class ApiLogInterceptor implements NestInterceptor {
    constructor(private apiLogService: ApiLogService) {}

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const cxt = context.switchToHttp();
        const req = cxt.getRequest();
        const res = cxt.getResponse();
        const apiLog: CreateApiLogDto = {
            api: req.url.indexOf('?') > 0 ? req.url.substring(0, req.url.indexOf('?')) : req.url,
            method: req.method,
            request_body: JSON.stringify(req.body),
            request_query: JSON.stringify(req.query),
            response_body: JSON.stringify(res.body),
            user_id: 0,
        };

        return next.handle().pipe(
            tap((data) => {
                apiLog.response_body = JSON.stringify(data);
                this.apiLogService.create(apiLog);
            }),
        );
    }
}
