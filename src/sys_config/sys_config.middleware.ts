import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SysConfigMiddleware implements NestMiddleware {
    use(req, res, next) {
        console.log('Request...', req.body);
        console.log('this is second middleware');
        next();
    }
}
