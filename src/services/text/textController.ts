// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /textApi/text/add */
export async function addTextTask(body: API.TextAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/textApi/text/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/delete */
export async function deleteTextTask(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/textApi/text/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/edit */
export async function editTextTask(body: API.TextEditRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/textApi/text/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/gen */
export async function genTextTaskAi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genTextTaskAiParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/textApi/text/gen', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
      genTextTaskByAiRequest: undefined,
      ...params['genTextTaskByAiRequest'],
    },
    data: body,
    ...(options || {}),
  });
}

/** genTextTaskAsyncAiMq POST /textApi/text/gen/async/mq */
export async function genTextTaskAsyncAiMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genTextTaskAsyncAiMqParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseAiResponse>('/textApi/text/gen/async/mq', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/gen/async/rebuild */
export async function genTextTaskAsyncAiRebuild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genTextTaskAsyncAiRebuildParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/textApi/text/gen/async/rebuild', {
    method: 'POST',
    params: {
      ...params,
      textRebuildRequest: undefined,
      ...params['textRebuildRequest'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /textApi/text/get */
export async function getTextTaskById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTextTaskByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTextTask>('/textApi/text/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /textApi/text/get/vo */
export async function getTextTaskVOById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTextTaskVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTextTaskVO>('/textApi/text/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/list/page */
export async function listTextTaskByPage(
  body: API.TextTaskQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTextTask>('/textApi/text/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/my/list/page */
export async function listMyTextTaskByPage(
  body: API.TextTaskQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTextTask>('/textApi/text/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/my/update */
export async function updateMyTextTask(
  body: API.TextUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/textApi/text/my/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /textApi/text/update */
export async function updateTextTask(
  body: API.TextUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean>('/textApi/text/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
