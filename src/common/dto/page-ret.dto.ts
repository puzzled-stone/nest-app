import { IPaginationMeta, Pagination } from 'nestjs-typeorm-paginate';
import { ResponseCode } from '../constant/response-code.enum';

export class PageRetDto<T> {
  // 状态码
  code: number;
  // 消息
  msg: string;
  // 数据
  data: T[];
  // 分页信息
  pagination: {
    // 页码
    page: number;
    // 每页数量
    size: number;
    // 总页数
    totalPage: number;
    // 总数量
    total: number;
  };

  constructor(pagination: Pagination<T, IPaginationMeta>) {
    this.code = ResponseCode.SUCCESS;
    this.msg = 'success';
    this.data = pagination.items;
    this.pagination = {
      page: pagination.meta.currentPage,
      size: pagination.meta.itemCount,
      totalPage: pagination.meta.totalPages,
      total: pagination.meta.totalItems,
    };
    return this;
  }
}
