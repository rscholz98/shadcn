/** @format */

"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname for dynamic active path detection

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
 SidebarGroup,
 SidebarGroupLabel,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarMenuSub,
 SidebarMenuSubButton,
 SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
 items,
}: {
 items: {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
   title: string;
   url: string;
  }[];
 }[];
}) {
 const pathname = usePathname(); // Get the current path

 return (
  <SidebarGroup>
   <SidebarGroupLabel>Platform</SidebarGroupLabel>
   <SidebarMenu>
    {items.map((item) => {
     const isActive =
      pathname === item.url || item.items?.some((subItem) => pathname === subItem.url);

     return (
      <SidebarMenuItem key={item.title}>
       {item.items?.length ? (
        <Collapsible asChild defaultOpen={isActive} className="group/collapsible">
         <div>
          <CollapsibleTrigger asChild>
           <SidebarMenuButton
            tooltip={item.title}
            className={isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
           >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
           </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
           <SidebarMenuSub>
            {item.items.map((subItem) => {
             const subItemActive = pathname === subItem.url;

             return (
              <SidebarMenuSubItem key={subItem.title}>
               <SidebarMenuSubButton
                asChild
                className={subItemActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
               >
                <a href={subItem.url}>
                 <span>{subItem.title}</span>
                </a>
               </SidebarMenuSubButton>
              </SidebarMenuSubItem>
             );
            })}
           </SidebarMenuSub>
          </CollapsibleContent>
         </div>
        </Collapsible>
       ) : (
        <SidebarMenuButton
         tooltip={item.title}
         asChild
         className={isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
        >
         <a href={item.url} className="flex items-center w-full">
          {item.icon && <item.icon />}
          <span>{item.title}</span>
         </a>
        </SidebarMenuButton>
       )}
      </SidebarMenuItem>
     );
    })}
   </SidebarMenu>
  </SidebarGroup>
 );
}
