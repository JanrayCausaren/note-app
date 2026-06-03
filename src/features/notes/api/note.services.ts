import type { ApiResponse, PaginatedResponse } from "@/app/types/api.types";
import type { Note, PaginationParams } from "../types/note";
import { NotesApi } from "./notes.api";
import type { CreateNoteReq, UpdateNoteReq } from "../schema/note.schema";
// import { getAllNotesApi, getNoteByIdApi } from "./notes.api";

// export const getAllNotes = async (
//   params?: PaginationParams,
// ): Promise<PaginatedResponse<Note[]>> => {
//   const { data, status } = await getAllNotesApi(params);
//   console.log(data);
//   console.log(`status : ${status}`);

//   if (!data.success) {
//     throw new Error(data.message);
//   }

//   return data;
// };

// export const getNoteById = async (noteId: string): Promise<Note> => {
//   const { data, status } = await getNoteByIdApi(noteId);
//   console.log(data);
//   console.log(`status : ${status}`);
//   if (!data.success) {
//     throw new Error(data.message);
//   }

//   return data.data;
// };

export const NotesService = {
  async getAll(params?: PaginationParams): Promise<PaginatedResponse<Note[]>> {
    const res = await NotesApi.getAll(params);
    return res.data; // PaginatedResponse
  },

  async getById(id: string): Promise<Note> {
    const res = await NotesApi.getById(id);

    // if (!res.data.success) {
    //   throw new Error(res.data.message);
    // }

    return res.data.data;
  },

  async createNote(payload: CreateNoteReq): Promise<Note> {
    const res = await NotesApi.create(payload);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return res.data.data;
  },

  async update(id: string, req: UpdateNoteReq): Promise<Note> {
    const res = await NotesApi.update(id, req);
    return res.data.data;
  },

  async delete(id: string): Promise<ApiResponse<Note>> {
    const response = await NotesApi.delete(id);
    return response.data
  },
};
