import { Test, TestingModule } from '@nestjs/testing';
import { ApiLogController } from './api-log.controller';
import { ApiLogService } from './api-log.service';

describe('ApiLogController', () => {
    let controller: ApiLogController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ApiLogController],
            providers: [ApiLogService],
        }).compile();

        controller = module.get<ApiLogController>(ApiLogController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
