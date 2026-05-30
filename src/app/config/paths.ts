export const paths = {
  home: "/",

  auth: {
    login: "/login",
    register: "/register",
  },

  app: {
    root: "/app",
    dashboard: "/app/dashboard",
    notes: "/app/notes",
    note: "/app/notes/:noteId",
    noteNew: "/app/notes/new",
    settings: "/app/settings",
  },

  admin: {
    users: "/admin/users",
  },
} as const;