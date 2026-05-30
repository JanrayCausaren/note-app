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
import Heading from "./common/Heading";
import TextBody from "./common/TextBody";
import { Link, NavLink } from "react-router";
import { href } from "@/app/config/href";

const navItems = [
  {
    label: "All Notes",
    href: href.notes(),
    icon: HiOutlineDocumentText,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: IoMdStarOutline,
  },
  {
    label: "Folders",
    href: "/folders",
    icon: LuFolder,
  },
  {
    label: "Trash",
    href: "/trash",
    icon: IoTrashOutline,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Heading as="h6" size="xl" className="font-bold  text-2xl">
          ZenNotes
        </Heading>
        <TextBody as="span">Personal Workspace</TextBody>

        <SidebarMenuButton
          asChild
          className="h-auto py-4 px-8 flex justify-between cursor-pointer"
        >
          <Link to={href.noteNew()}>
            <span>New Note</span>
            <Plus></Plus>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                >
                  <NavLink to={item.href}>
                    <Icon />
                    <span>{item.label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
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
