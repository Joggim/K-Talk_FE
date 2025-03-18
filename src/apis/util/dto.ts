export type BaseSuccessResponse<T = any> = {
  isSuccess: boolean;
  code: string;
  data: T;
};

// 응답 body가 없을 경우
export type EmptySuccessResponse = BaseSuccessResponse<void>;

export interface PagingResponseType {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface PaginationMeta {
  total: number;
  page: number;
  take: number;
  last_page: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
