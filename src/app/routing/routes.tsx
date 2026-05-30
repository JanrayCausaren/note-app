import type { RouteObject } from "react-router";
import { paths } from "../config/paths";
import NewNote from "@/features/notes/ui/pages/NewNotePage";
import NotesPage from "@/features/notes/ui/pages/NotesPage";

export const notesRoutes: RouteObject[] = [
  {
    path: paths.app.notes, // or notes
    children: [
      {
        index: true,
        element: <NotesPage />, 
      },
      {
        path: paths.app.noteNew, // or new
        element: <NewNote />,
      },
    ],
  },
];
