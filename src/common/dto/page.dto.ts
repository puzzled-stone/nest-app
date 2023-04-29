import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';

export class PageDto {
    // 页码
    @Min(1, { message: '页码必须大于等于1' })
    @IsNumber({}, { message: '页码必须为数字' })
    page: number;
    // 每页数量
    @Min(1, { message: '每页数量必须大于等于1' })
    @IsNumber({}, { message: '每页数量必须为数字' })
    size: number;
    // 排序字段
    sort?: string;
    // 排序方式
    @IsOptional()
    @IsEnum(['ASC', 'DESC'], { message: '排序方式必须为ASC或DESC' })
    order?: 'ASC' | 'DESC';
    // 搜索关键字
    keyword?: string;
}
