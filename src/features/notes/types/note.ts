export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateNoteReq = {
  title: string;
  content: string;
};

export type UpdateNoteReq = {
  title?: string | undefined;
  content?: string | undefined;
};

export type BasePaginationParams = {
  page?: number;
  limit?: number;
};

export type SortParams = {
  sort?: "asc" | "desc";
  sortBy?: "createdAt" | "updatedAt";
};

export type SearchParams = {
  search?: string;
};

export type PaginationParams =
  BasePaginationParams &
  SortParams &
  SearchParams;