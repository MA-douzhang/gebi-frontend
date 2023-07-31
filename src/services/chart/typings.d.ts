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

  type BaseResponseChart = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type BaseResponseChartVO = {
    code?: number;
    data?: ChartVO;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageChart = {
    code?: number;
    data?: PageChart;
    message?: string;
  };

  type Chart = {
    id?: number;
    name?: string;
    goal?: string;
    chartData?: string;
    chatType?: string;
    genChat?: string;
    genResult?: string;
    userId?: number;
    status?: string;
    execMessage?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type ChartAddRequest = {
    goal?: string;
    name?: string;
    chartData?: string;
    chatType?: string;
  };

  type ChartEditRequest = {
    id?: number;
    name?: string;
    goal?: string;
    chartData?: string;
    chatType?: string;
  };

  type ChartQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    name?: string;
    goal?: string;
    chatType?: string;
    userId?: number;


  };

  type ChartRebuildRequest = {
    id?: number;
  };

  type ChartUpdateRequest = {
    id?: number;
    name?: string;
    goal?: string;
    chartData?: string;
    chatType?: string;
    genChat?: string;
    genResult?: string;
  };

  type ChartVO = {
    id?: number;
    name?: string;
    goal?: string;
    chartData?: string;
    chatType?: string;
    genChat?: string;
    genResult?: string;
    status?: string;
    execMessage?: string;
    createTime?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type genChartAiParams = {
    genChartByAiRequest: GenChartByAiRequest;
  };

  type genChartAsyncAiMqParams = {
    genChartByAiRequest: GenChartByAiRequest;
  };

  type genChartAsyncAiRebuildParams = {
    chartRebuildRequest: ChartRebuildRequest;
  };

  type GenChartByAiRequest = {
    name?: string;
    goal?: string;
    chartType?: string;
  };

  type getChartByIdParams = {
    id: number;
  };

  type getChartVOByIdParams = {
    id: number;
  };

  type getStringParams = {
    str: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageChart = {
    records?: Chart[];
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
}
