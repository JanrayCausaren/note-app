import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotesService } from "../note.services";
import type { UpdateNoteReq } from "../../schema/note.schema";
import getAllNotesQueryOptions, { getNoteQueryOptions } from "../query.options";
import { useNavigate } from "react-router";
import { href } from "@/app/config/href";

export const useUpdateNote = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateNoteReq) => NotesService.update(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getAllNotesQueryOptions().queryKey,
      });

      queryClient.invalidateQueries({
        queryKey: getNoteQueryOptions(id).queryKey,
      });
    },
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => NotesService.delete(id),

    onSuccess: (_, id) => {
      navigate(href.notes());
      console.log("this is internal");

      //   queryClient.invalidateQueries({
      //     queryKey: getAllNotesQueryOptions().queryKey,
      //   });

    //   queryClient.removeQueries({
    //     queryKey: getNoteQueryOptions(id).queryKey,
    //   });
      console.log(queryClient.getQueryState(["note", id]));
    },
  });
};
