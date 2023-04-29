import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { log } from 'console';
import { ResponseCode } from 'src/common/constant/response-code.enum';

@Catch(BadRequestException)
export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        log('exception:', exception);
        // exception.message = exception.getResponse()['message'];
        response.status(HttpStatus.OK).json({
            code: ResponseCode.SUCCESS,
            msg: exception.getResponse()['message'][0],
            timestamp: new Date(),
            path: request.url,
        });
    }
}
