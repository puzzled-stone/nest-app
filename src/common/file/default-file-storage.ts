import { DiskStorageOptions } from 'multer';
import { v4 as uuidv4 } from 'uuid';

export class DefaultFileStorage implements DiskStorageOptions {
    constructor(destination: string) {
        this.destination = destination || './uploads';
        this.filename = (req, file, cb) => {
            const filename = uuidv4() + file.originalname.slice(file.originalname.lastIndexOf('.'));
            cb(null, filename);
        };
    }

    destination: string;
    filename: (req: any, file: any, callback: (error: Error | null, filename: string) => void) => void;
}
