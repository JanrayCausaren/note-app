import { Outlet } from "react-router";
import "./App.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/providers/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./components/providers/query-client-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/sonner";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Outlet></Outlet>
            <Toaster />
          </ThemeProvider>
        </TooltipProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
