// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /chartApi/chart/add */
export async function addChart(body: API.ChartAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/chartApi/chart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chartApi/chart/delete */
export async function deleteChart(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chartApi/chart/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chartApi/chart/edit */
export async function editChart(body: API.ChartEditRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chartApi/chart/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chartApi/chart/gen */
export async function genChartAi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartAiParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/chartApi/chart/gen', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
      genChartByAiRequest: undefined,
      ...params['genChartByAiRequest'],
    },
    data: body,
    ...(options || {}),
  });
}

/** genChartAsyncAiMq POST /api/chart/gen/async/mq */
export async function genChartAsyncAiMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartAsyncAiMqParams,
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

  return request<API.BaseResponseAiResponse>('/chartApi/chart/gen/async/mq', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chartApi/chart/gen/async/rebuild */
export async function genChartAsyncAiRebuild(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartAsyncAiRebuildParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiResponse>('/chartApi/chart/gen/async/rebuild', {
    method: 'POST',
    params: {
      ...params,
      chartRebuildRequest: undefined,
      ...params['chartRebuildRequest'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /chartApi/chart/get */
export async function getChartById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseChart>('/chartApi/chart/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /chartApi/chart/get/vo */
export async function getChartVOById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseChartVO>('/chartApi/chart/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chartApi/chart/list/page */
export async function listChartByPage(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart>('/chartApi/chart/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chartApi/chart/my/list/page */
export async function listMyChartByPage(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart>('/chartApi/chart/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** 此处后端没有提供注释 POST /chartApi/chart/update */
export async function updateChart(body: API.ChartUpdateRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chartApi/chart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
