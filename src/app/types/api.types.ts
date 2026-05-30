
export type ApiError = {
  success: false;
  statusCode: number;
  message: string;
  errors?: ValidationErrors
};

export type ValidationErrors = {
  formErrors?: string[];
  fieldErrors?: Record<string, string[]>;
};


export type ApiSuccess<T> = {
  success: true;
  message: string;
  data: T;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number
};

export type PaginatedResponse<T> = {
  success: true;
  message: string;
  data: T;
  pagination: Pagination;
};