declare namespace API {
  type AiResponse = {
    resultId?: number;
  };

  type BaseResponseAiResponse = {
    code?: number;
    data?: AiResponse;
    message?: string;
  };

  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageTextTask = {
    code?: number;
    data?: PageTextTask;
    message?: string;
  };

  type BaseResponseTextTask = {
    code?: number;
    data?: TextTask;
    message?: string;
  };

  type BaseResponseTextTaskVO = {
    code?: number;
    data?: TextTaskVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type genTextTaskAiParams = {
    genTextTaskByAiRequest: GenTextTaskByAiRequest;
  };

  type genTextTaskAsyncAiMqParams = {
    genTextTaskByAiRequest: GenTextTaskByAiRequest;
  };

  type genTextTaskAsyncAiRebuildParams = {
    textRebuildRequest: TextRebuildRequest;
  };

  type GenTextTaskByAiRequest = {
    name?: string;
    textType?: string;
  };

  type getTextTaskByIdParams = {
    id: number;
  };

  type getTextTaskVOByIdParams = {
    id: number;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageTextTask = {
    records?: TextTask[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: number;
    pages?: number;
  };

  type TextAddRequest = {
    name?: string;
    textType?: string;
  };

  type TextEditRequest = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    userId?: number;
    status?: string;
  };

  type TextRebuildRequest = {
    id?: number;
  };

  type TextTask = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    userId?: number;
    status?: string;
    execMessage?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type TextTaskQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    userId?: number;
    status?: string;
  };

  type TextTaskVO = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    status?: string;
    createTime?: string;
  };

  type TextUpdateRequest = {
    id?: number;
    name?: string;
    textType?: string;
    genTextContent?: string;
    status?: string;
    execMessage?: string;
  };
}
