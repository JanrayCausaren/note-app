import { api } from "@/api/axios.api";
import type { CreateNoteReq, Note, PaginationParams, UpdateNoteReq } from "../types/note";
import type { ApiResponse, PaginatedResponse } from "@/app/types/api.types";

// export const getAllNotes = async (): Promise<Note[]> => {
//   const response = await api.get("/notes");
//   console.log(response.data.data);
//   return response.data.data;
// };

export const getAllNotesApi = (params?: PaginationParams) => {
  return api.get<PaginatedResponse<Note[]>>("/notes", {params});
};
export const getNoteByIdApi = (id: string) => {
  return api.get<ApiResponse<Note>>(`/notes/${id}`);
};
export const createNoteApi = (req: CreateNoteReq) => {
  return api.post<ApiResponse<Note>>(`/notes/new`, req);
};
export const updateNoteApi = (id: string, req: UpdateNoteReq) => {
  return api.patch<ApiResponse<Note>>(`/notes/${id}`, req);
};
export const deleteNoteApi = (id: string) => {
  return api.delete<ApiResponse<Note>>(`/notes/${id}`);
};

