import { Test, TestingModule } from '@nestjs/testing';
import { ApiLogService } from './api-log.service';

describe('ApiLogService', () => {
    let service: ApiLogService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ApiLogService],
        }).compile();

        service = module.get<ApiLogService>(ApiLogService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
