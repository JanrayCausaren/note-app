import { Outlet } from "react-router";
import "./App.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/providers/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./components/providers/query-client-provider";

export function App() {
  return (
    <>
    <QueryClientProvider client={queryClient} >
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Outlet></Outlet>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
      
    </>
  );
}

export default App;
