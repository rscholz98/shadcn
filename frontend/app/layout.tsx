/** @format */

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className="flex">
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     <SidebarProvider>
      <AppSidebar />
      <main>
       <SidebarTrigger />
       {children}
      </main>
     </SidebarProvider>
    </ThemeProvider>
   </body>
  </html>
 );
}
