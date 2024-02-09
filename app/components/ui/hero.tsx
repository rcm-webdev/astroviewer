"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { ThemeToggle } from "../theme-toggle";
import Logo from "./logo";

export function Hero() {
  const placeholders = [
    "What's the first rule of Stargazer's Club?",
    "July 8, 1947",
    "July 20, 1969",
    "April 1, 2023",
    "July 15, 2024",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <AuroraBackground className="relative">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex place-items-end ">
          <span>
            <Logo />
          </span>
          <h1 className="text-3xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-900/80 via-neutral-900 to-neutral-900/80  dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60">
            AstroViewer
          </h1>
        </div>
        <div className="font-semibold text-base md:text-2xl dark:text-neutral-200 py-4 ">
          Explore the universe with{" "}
          <span className="text-neutral-100 bg-gradient-to-r from-[#000000] to-[#434343] dark:from-indigo-500 dark:to-purple-500 p-2 rounded-xl">
            NW Stargazers Club
          </span>
        </div>

        <div className="w-full">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </motion.div>
      <div className="absolute top-0 right-0 m-4">
        <ThemeToggle />
      </div>
    </AuroraBackground>
  );
}
