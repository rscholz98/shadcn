/** @format */
"use client"; // Ensures this layout uses client-side interactivity

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en" className="h-full" suppressHydrationWarning={true}>
   <body className="flex min-h-screen h-full">
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
       {/* Header Section */}
       <div className="p-4 flex items-center justify-between">
        {/* Sidebar Trigger */}
        <SidebarTrigger />

        {/* Theme Toggle */}
        <ThemeToggle />
       </div>

       {/* Page Content */}
       <div className="flex-1">{children}</div>
      </main>
     </SidebarProvider>
    </ThemeProvider>
   </body>
  </html>
 );
}
