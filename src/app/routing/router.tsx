import { createBrowserRouter } from "react-router";

import { App } from "@/App";
import Landing from "@/pages/Landing";
import { paths } from "../config/paths";
import { notesRoutes } from "./routes";
import HomeLayout from "@/layout/HomeLayout";
// import Home from "@/pages/home";

export const router = createBrowserRouter([
  {
    path: paths.home,
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: paths.app.root,
        element: <HomeLayout />,
        children: [
          ...notesRoutes
        ]
      }
    ],
  },
]);
