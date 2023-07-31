// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /userApi/credit/add */
export async function addCredit(body: API.CreditAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/userApi/credit/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userApi/credit/delete */
export async function deleteCredit(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/userApi/credit/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userApi/credit/edit */
export async function editCredit(body: API.CreditEditRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/userApi/credit/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /userApi/credit/get */
export async function getCreditById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCreditByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseCredit>('/userApi/credit/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userApi/credit/list/page */
export async function listCreditByPage(
  body: API.CreditQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCredit>('/userApi/credit/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userApi/credit/my/list/page */
export async function listMyCreditByPage(
  body: API.CreditQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCredit>('/userApi/credit/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /userApi/credit/sign */
export async function signCredit(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/userApi/credit/sign', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userApi/credit/update */
export async function updateCredit(
  body: API.CreditUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/userApi/credit/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
