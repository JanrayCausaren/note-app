import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type Props = {};

const Home = (props: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {newFunction()}
      </main>
    </SidebarProvider>
  );

  function newFunction() {
    return (
      <div className="px-8 py-8">
        <div className="container mx-auto">
          <h1>Good Morning, Alex</h1>
          <p>Your creative sanctuary is ready for new ideas.</p>
        </div>
      </div>
    );
  }
};

export default Home;
