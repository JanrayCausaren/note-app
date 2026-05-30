import type { PaginatedResponse } from "@/app/types/api.types";
import type { Note, PaginationParams } from "../types/note";
import { getAllNotesApi } from "./notes.api";

export const getAllNotes = async (
  params?: PaginationParams,
): Promise<PaginatedResponse<Note[]>> => {
  const { data } = await getAllNotesApi(params);
  console.log(data);

  if (!data.success) {
    throw new Error(data.message);
  }

  return data;
};
