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
      <div className="absolute h-10 w-10 rounded-full flex items-center justify-center p-6 bg-gradient-to-b from-neutral-950 via-neutral-400 to-netural-50  top-1 right-5 m-4">
        <ThemeToggle />
      </div>
      <div className="absolute bottom-2 animate-bounce-slow">
        <svg
          className="text-9xl fill-black dark:fill-neutral-100"
          width="33"
          height="128"
          viewBox="0 0 33 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.8237 120.455C22.7237 119.955 22.8237 119.755 22.7237 119.555C18.0237 110.755 14.9237 101.355 11.5237 92.0545C8.02365 82.4545 4.52365 72.8545 2.12365 62.8545C0.923654 57.2545 -0.176346 51.6545 0.0236545 45.9545C0.123654 44.2545 0.323654 42.4545 0.923654 40.7545C2.02365 37.3545 5.02365 35.9545 8.42365 37.2545C9.82365 37.7545 11.1237 38.5545 12.3237 39.5545C14.2237 41.0545 15.9237 42.7545 17.7237 44.3545C18.6237 45.1545 19.5237 45.9545 20.5237 46.6545C22.5237 47.9545 24.1237 47.5545 25.4237 45.6545C26.7237 43.7545 27.2237 41.5545 27.4237 39.3545C27.6237 36.1545 27.0237 33.1545 26.1237 30.1545C24.1237 23.5545 21.3237 17.2545 17.6237 11.4545C16.1237 9.05451 14.7237 6.65451 13.3237 4.25451C12.8237 3.45451 12.5237 2.45451 12.4237 1.55451C12.3237 1.05451 12.8237 0.154508 13.2237 0.0545085C13.7237 -0.145492 14.5237 0.254509 15.1237 0.454509C15.3237 0.554509 15.4237 0.854509 15.5237 1.05451C18.0237 4.75451 20.6237 8.55451 23.0237 12.5545C27.1237 19.2545 30.2237 26.4545 31.8237 34.2545C32.5237 37.9545 32.5237 41.6545 31.1237 45.1545C30.5237 46.7545 29.6237 48.3545 28.5237 49.6545C25.9237 52.6545 22.1237 53.2545 18.7237 51.2545C17.0237 50.2545 15.5237 48.8545 14.0237 47.5545C12.1237 46.0545 10.3237 44.4545 8.52365 42.9545C8.02365 42.5545 7.22365 42.3545 6.62365 42.0545C5.62365 43.0545 5.82365 44.2545 5.72365 45.3545C5.62365 51.4545 6.62365 57.4545 8.42365 63.3545C12.1237 75.5545 16.0237 87.6545 19.8237 99.7545C21.3237 104.455 22.7237 109.155 24.3237 114.255C24.6237 113.555 24.8237 113.155 25.0237 112.655C25.6237 110.755 26.1237 108.855 26.8237 106.955C27.1237 106.155 27.5237 105.355 28.1237 104.655C28.7237 103.855 29.7237 103.555 30.5237 104.155C31.1237 104.555 31.5237 105.355 31.7237 106.055C31.9237 106.755 31.7237 107.455 31.5237 108.155C30.1237 113.655 28.8237 119.155 27.3237 124.655C26.5237 127.455 24.3237 128.455 21.7237 127.055C20.3237 126.355 18.9237 125.355 17.9237 124.155C14.0237 119.955 10.2237 115.555 6.52365 111.155C5.82365 110.355 5.22365 109.255 4.82365 108.255C4.42365 107.055 5.22365 106.255 6.32365 106.855C7.82365 107.655 9.42365 108.555 10.7237 109.755C13.7237 112.455 16.5237 115.255 19.4237 117.955C20.2237 118.655 20.9237 119.355 21.7237 120.055C22.0237 120.055 22.3237 120.155 22.8237 120.455Z" />
        </svg>
      </div>
    </AuroraBackground>
  );
}
