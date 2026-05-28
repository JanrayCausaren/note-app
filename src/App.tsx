import { Outlet } from "react-router";
import "./App.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./components/providers/theme-provider";

export function App() {
  return (
    <>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Outlet></Outlet>
        </ThemeProvider>
      </TooltipProvider>
    </>
  );
}

export default App;
