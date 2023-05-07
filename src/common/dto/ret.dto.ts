export class RetDto<T> {
    // 状态码
    code: number;
    // 消息
    msg: string;
    // 数据
    data: T;

    static success<T>(data?: T): RetDto<T> {
        const ret = new RetDto<T>();
        ret.code = 0;
        ret.msg = 'success';
        ret.data = data;
        return ret;
    }
}
