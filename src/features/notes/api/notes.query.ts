import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "./note.services";
import type { PaginationParams } from "../types/note";

export const useGetAllNotes = (params?: PaginationParams) => {
  return useQuery({ queryKey: ["notes", params], queryFn: () => getAllNotes(params) });
};
