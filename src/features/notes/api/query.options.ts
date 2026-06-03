import { queryOptions } from "@tanstack/react-query";
import { NotesService } from "./note.services";
import type { PaginationParams } from "../types/note";

export default function getAllNotesQueryOptions(params?: PaginationParams) {
    return queryOptions({
        queryKey: ["notes", params],
        queryFn: () => NotesService.getAll(params), 
        // staleTime: 6000, 
    });
}

export  function getNoteQueryOptions(id: string) {
    return queryOptions({
        queryKey: ["note", id],
        queryFn: () => NotesService.getById(id), 
        staleTime: 6000, 
        gcTime: 3000
    });
}


// export function updateNoteQueryOptions()