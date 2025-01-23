/** @format */
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
 const { theme, setTheme, resolvedTheme } = useTheme();

 // Handle uninitialized theme during SSR/initial render
 if (!resolvedTheme) {
  return null;
 }

 return (
  <Button
   variant="ghost"
   size="icon"
   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
   aria-label="Toggle theme"
  >
   {resolvedTheme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
  </Button>
 );
}
