export enum ResponseCode {
  // 成功
  SUCCESS = 200,
  // 失败
  FAIL = 500,
  // 未登录
  UNAUTHORIZED = 401,
  // 无权限
  FORBIDDEN = 403,
  // 未找到
  NOT_FOUND = 404,
  // 参数错误
  PARAM_ERROR = 10001,
  // 未知错误
  UNKNOWN_ERROR = 10002,
}
