import type { RouteObject } from "react-router";
import { paths } from "../config/paths";
import NewNote from "@/features/notes/ui/pages/NewNotePage";
import NotesPage from "@/features/notes/ui/pages/NotesPage";
import NoteDetailsPage from "@/features/notes/ui/pages/NoteDetailsPage";
import AllNotesPage from "@/features/notes/ui/layout/AllNotesPage";

export const notesRoutes: RouteObject[] = [
  {
    path: paths.app.notes, // or notes
    children: [
      {
        index: true,
        element: <AllNotesPage />, 
      },
      {
        path: paths.app.noteNew, // or new
        element: <NewNote />,
      },
      {
        path: paths.app.note, // or new
        element: <NoteDetailsPage />,
      },
    ],
  },
];
