import { log } from 'console';
import { NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
    log('Request...', req.body);
    log('this is first middleware');
    next();
}
