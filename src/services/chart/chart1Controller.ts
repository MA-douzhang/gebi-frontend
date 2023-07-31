// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /chart1/get */
export async function getString(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStringParams,
  options?: { [key: string]: any },
) {
  return request<string>('/chart1/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
