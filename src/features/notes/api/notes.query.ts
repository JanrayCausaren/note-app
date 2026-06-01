import { useMutation, useQuery } from "@tanstack/react-query";
// import { getAllNotes, getNoteById } from "./note.services";
import type { PaginationParams } from "../types/note";
import { NotesService } from "./note.services";

export const useGetAllNotes = (params?: PaginationParams) => {
  return useQuery({ queryKey: ["notes", params], queryFn: () => NotesService.getAll(params),  });
};

export const useGetNote = (noteId: string) => {
  return useQuery({
    queryKey: ["note", noteId], 
    queryFn: () => NotesService.getById(noteId),
    enabled: !!noteId 
  })
}


export const useCreateNote = () => {
  return useMutation(
    {
      mutationFn: NotesService.createNote, 
      onSuccess:  () => {
        
        
      }
      
    }
  );
};
// export const useGetAllNotes = (params?: PaginationParams) => {
//   return useQuery({ queryKey: ["notes", params], queryFn: () => getAllNotes(params),  });
// };

// export const useGetNote = (noteId: string) => {
//   return useQuery({
//     queryKey: ["note", noteId], 
//     queryFn: () => getNoteById(noteId),
//     enabled: !!noteId 
//   })
// }
