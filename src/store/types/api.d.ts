export type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
  meta: {
    total: number;
    page: number;
    limit: number;
    // ...
  };
}; // TODO: change to correct type
