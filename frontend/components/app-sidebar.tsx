/** @format */

"use client";

import * as React from "react";
import Link from "next/link"; // Import Next.js Link for navigation
import {
 AudioWaveform,
 BookOpen,
 Command,
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
   url: "/chat", // Specify the path
   icon: MessageSquareMore,
  },
  {
   title: "Config",
   url: "/config", // Specify the path
   icon: Settings,
  },
  {
   title: "Database",
   url: "/database", // Specify the path
   icon: Database,
   items: [
    {
     title: "Connectors",
     url: "/database/connectors", // Specify subpath
    },
    {
     title: "Loaders",
     url: "/database/loaders", // Specify subpath
    },
    {
     title: "Viewer",
     url: "/database/viewer", // Specify subpath
    },
   ],
  },
  {
   title: "Documentation",
   url: "/documentation", // Specify the path
   icon: BookOpen,
   items: [
    {
     title: "Introduction",
     url: "/documentation/introduction", // Specify subpath
    },
    {
     title: "Get Started",
     url: "/documentation/get-started", // Specify subpath
    },
    {
     title: "Tutorials",
     url: "/documentation/tutorials", // Specify subpath
    },
    {
     title: "Changelog",
     url: "/documentation/changelog", // Specify subpath
    },
   ],
  },
 ],
 projects: [
  {
   name: "Design Engineering",
   url: "/projects/design-engineering", // Specify the path
   icon: Frame,
  },
 ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
 return (
  <Sidebar collapsible="icon" {...props}>
   <SidebarHeader>
    <TeamSwitcher teams={data.teams} />
   </SidebarHeader>
   <SidebarContent>
    {/* Pass routing paths to NavMain */}
    <NavMain items={data.navMain} />
    <NavProjects projects={data.projects} />
   </SidebarContent>
   <SidebarFooter>
    <NavUser user={data.user} />
   </SidebarFooter>
   <SidebarRail />
  </Sidebar>
 );
}
