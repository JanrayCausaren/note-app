import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoMdHelpCircleOutline, IoMdStarOutline } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { LuFolder } from "react-icons/lu";
import { TbSettings } from "react-icons/tb";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>ZenNotes</h1>
        <h1>Personal Workspace</h1>

        <SidebarMenuButton isActive className="">
          <a href="#" className="flex justify-center w-full gap-2 items-center">
            <Plus></Plus>
            <span>New Note</span>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <HiOutlineDocumentText />
                <span>All Notes</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <IoMdStarOutline />
                <span>Favorites</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <LuFolder />
                <span>Folders</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <IoTrashOutline />
                <span>Trash</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <TbSettings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <IoMdHelpCircleOutline />
                <span>Help</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
