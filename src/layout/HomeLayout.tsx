import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

type Props = {};

const HomeLayout = (_props: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <Outlet></Outlet>
      </main>
    </SidebarProvider>
  );

  
};

export default HomeLayout;
