import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { getAllNotes, getNoteById } from "./note.services";
import type { PaginationParams } from "../types/note";
import { NotesService } from "./note.services";
import getAllNotesQueryOptions, { getNoteQueryOptions } from "./query.options";

export const useGetAllNotes = (params?: PaginationParams) => {
  return useQuery(getAllNotesQueryOptions(params));
};
// export const useGetAllNotes = (params?: PaginationParams) => {
//   return useQuery({
//     queryKey: ["notes", params],
//     queryFn: () => NotesService.getAll(params),
//     staleTime: 6000
//   });
// };

export const useGetNote = (noteId: string) => {
  return useQuery(getNoteQueryOptions(noteId));
};
// export const useGetNote = (noteId: string) => {
//   return useQuery({
//     queryKey: ["note", noteId],
//     queryFn: () => NotesService.getById(noteId),
//     enabled: !!noteId,
//   });
// };

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: NotesService.createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getAllNotesQueryOptions().queryKey,
      });
    },
  });
};
// export const useCreateNote = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: NotesService.createNote,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["notes"],
//       });
//     },
//   });
// };

// useQuery({
//   queryKey: ["uniqueKey"],  // to identify the query
//   queryFn: () => {} // function that runs to this query
// })



// const {data} =  useQuery({
//   queryKey: ["uniqueKey"], // to identify the query - it give each query a unique identifier that tanstack query uses to cache all all of our request 
//   queryFn: () => {}, // function that runs to this query
// });

//by default the data will be always be stale
