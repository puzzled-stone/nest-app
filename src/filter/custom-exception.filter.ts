import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { log } from 'console';
import { ResponseCode } from 'src/common/constant/response-code.enum';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        log('exception:', exception);
        // exception.message = exception.getResponse()['message'];
        response.status(HttpStatus.OK).json({
            code: ResponseCode.FAIL,
            msg: exception.getResponse()['message'],
            timestamp: new Date(),
            path: request.url,
        });
    }
}
