"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleWrapper } from "./ui/moving-border";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <button
      aria-label="toggle theme"
      aria-details="ligt mode versus dark mode"
      className="relative inline-flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <ToggleWrapper>
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
      </ToggleWrapper>
    </button>
  );
}
