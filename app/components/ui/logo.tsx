import React from "react";

const Logo = () => (
  <svg
    className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 209"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ad5389" />
        <stop offset="100%" stop-color="#3c1053" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradient)"
      d="M96 120a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m125.66-61.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0M160 136a8 8 0 0 1-5.66-13.66l24-24a8 8 0 0 1 11.32 11.32l-24 24A8 8 0 0 1 160 136m69.66-66.34l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32M122.34 90.34l72-72a8 8 0 1 1 11.32 11.32l-72 72a8 8 0 0 1-11.32-11.32m24.57 109.26a8 8 0 0 1 0 11.31A72 72 0 1 1 45.09 109.09l82.74-82.75a8 8 0 1 1 11.32 11.32L56.4 120.4a56 56 0 0 0 79.2 79.2a8 8 0 0 1 11.31 0"
    />
  </svg>
);

export default Logo;
