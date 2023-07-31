// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /alipay/notify */
export async function payNotify(options?: { [key: string]: any }) {
  return request<string>('/userApi/alipay/notify', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /alipay/pay */
export async function pay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payParams,
  options?: { [key: string]: any },
) {
  return request<any>('/userApi/alipay/pay', {
    method: 'GET',
    params: {
      ...params,
      aliPay: undefined,
      ...params['aliPay'],
    },
    ...(options || {}),
  });
}
