/** @format */

"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
 BookOpen,
 Frame,
 GalleryVerticalEnd,
 MessageSquareMore,
 Settings,
 Database,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
 user: {
  name: "Richard",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
 },
 teams: [
  {
   name: "Grillfürst GmbH",
   logo: GalleryVerticalEnd,
   plan: "Company",
  },
 ],
 navMain: [
  {
   title: "Chat",
   url: "/chat",
   icon: MessageSquareMore,
  },
  {
   title: "Config",
   url: "/config",
   icon: Settings,
  },
  {
   title: "Database",
   url: "/database",
   icon: Database,
   items: [
    {
     title: "Connectors",
     url: "/database/connectors",
    },
    {
     title: "Loaders",
     url: "/database/loaders",
    },
    {
     title: "Viewer",
     url: "/database/viewer",
    },
   ],
  },
  {
   title: "Documentation",
   url: "/documentation",
   icon: BookOpen,
   items: [
    {
     title: "Introduction",
     url: "/documentation/introduction",
    },
    {
     title: "Get Started",
     url: "/documentation/get-started",
    },
    {
     title: "Tutorials",
     url: "/documentation/tutorials",
    },
    {
     title: "Changelog",
     url: "/documentation/changelog",
    },
   ],
  },
 ],
 projects: [
  {
   name: "Design Engineering",
   url: "/projects/design-engineering",
   icon: Frame,
  },
 ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
 const pathname = usePathname(); // Get the current path

 // Add isActive logic to navigation items
 const navMainWithActive = data.navMain.map((item) => ({
  ...item,
  isActive:
   pathname === item.url || (item.items?.some((subItem) => pathname === subItem.url) ?? false),
 }));

 return (
  <Sidebar collapsible="icon" {...props}>
   <SidebarHeader>
    <TeamSwitcher teams={data.teams} />
   </SidebarHeader>
   <SidebarContent>
    {/* Pass routing paths and active status to NavMain */}
    <NavMain items={navMainWithActive} />
    <NavProjects projects={data.projects} />
   </SidebarContent>
   <SidebarFooter>
    <NavUser user={data.user} />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 );
}
