// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** payNotify POST /api/alipay/notify */
export async function payNotifyUsingPOST(options?: { [key: string]: any }) {
  return request<string>('/api/alipay/notify', {
    method: 'POST',
    ...(options || {}),
  });
}

/** pay GET /api/alipay/pay */
export async function payUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/alipay/pay', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
