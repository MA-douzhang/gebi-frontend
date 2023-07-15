declare namespace API {
  type addUsingGETParams = {
    /** name */
    name?: string;
  };

  type AiChartResponse = {
    chartId?: number;
    genChart?: string;
    genResult?: string;
  };

  type AiTextResponse = {
    id?: number;
  };

  type BaseResponseAiChartResponse_ = {
    code?: number;
    data?: AiChartResponse;
    message?: string;
  };

  type BaseResponseAiTextResponse_ = {
    code?: number;
    data?: AiTextResponse;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChart_ = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type BaseResponseChartVO_ = {
    code?: number;
    data?: ChartVO;
    message?: string;
  };

  type BaseResponseCredit_ = {
    code?: number;
    data?: Credit;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: PageChart_;
    message?: string;
  };

  type BaseResponsePageCredit_ = {
    code?: number;
    data?: PageCredit_;
    message?: string;
  };

  type BaseResponsePageTextTask_ = {
    code?: number;
    data?: PageTextTask_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTextTask_ = {
    code?: number;
    data?: TextTask;
    message?: string;
  };

  type BaseResponseTextTaskVO_ = {
    code?: number;
    data?: TextTaskVO;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type Chart = {
    chartData?: string;
    chatType?: string;
    createTime?: string;
    execMessage?: string;
    genChat?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    status?: string;
    updateTime?: string;
    userId?: number;
  };

  type ChartAddRequest = {
    chartData?: string;
    chatType?: string;
    goal?: string;
    name?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chatType?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartQueryRequest = {
    chatType?: string;
    current?: number;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chatType?: string;
    genChat?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartVO = {
    chartData?: string;
    chatType?: string;
    createTime?: string;
    execMessage?: string;
    genChat?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    name?: string;
    status?: string;
  };

  type Credit = {
    createTime?: string;
    creditTotal?: number;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
  };

  type CreditAddRequest = {
    creditTotal?: number;
    userId?: number;
  };

  type CreditEditRequest = {
    creditTotal?: number;
    id?: number;
  };

  type CreditQueryRequest = {
    createTime?: string;
    creditTotal?: number;
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userId?: number;
  };

  type CreditUpdateRequest = {
    creditTotal?: number;
    id?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type genChartAiUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartAsyncAiMqUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartAsyncAiRebuildUsingPOSTParams = {
    id?: number;
  };

  type genChartAsyncAiUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genTextTaskAiUsingPOSTParams = {
    name?: string;
    textType?: string;
  };

  type genTextTaskAsyncAiMqUsingPOSTParams = {
    name?: string;
    textType?: string;
  };

  type genTextTaskAsyncAiRebuildUsingPOSTParams = {
    id?: number;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getChartVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCreditByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTextTaskByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTextTaskVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Chart[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCredit_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Credit[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTextTask_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TextTask[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type payUsingGETParams = {
    subject?: string;
    totalAmount?: number;
  };

  type TextAddRequest = {
    name?: string;
    textType?: string;
  };

  type TextEditRequest = {
    genTextContent?: string;
    id?: number;
    name?: string;
    status?: string;
    textType?: string;
    userId?: number;
  };

  type TextTask = {
    createTime?: string;
    execMessage?: string;
    genTextContent?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    status?: string;
    textType?: string;
    updateTime?: string;
    userId?: number;
  };

  type TextTaskQueryRequest = {
    current?: number;
    genTextContent?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    textType?: string;
    userId?: number;
  };

  type TextTaskVO = {
    createTime?: string;
    genTextContent?: string;
    id?: number;
    name?: string;
    status?: string;
    textType?: string;
  };

  type TextUpdateRequest = {
    execMessage?: string;
    genTextContent?: string;
    id?: number;
    name?: string;
    status?: string;
    textType?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
