"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/moving-border";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <button
      className="relative inline-flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Button>
        <Sun
          size="28"
          className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
          color="white"
        />
        <Moon
          size="28"
          className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
          color="white"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </button>
  );
}
