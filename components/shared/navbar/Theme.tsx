"use client";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";

import Image from "next/image";
const Theme = () => {
  const { mode, setMode } = useTheme();
  let otherTheme = mode === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="flex w-auto items-center justify-center rounded-md transition"
      onClick={() => {
        setMode(otherTheme);
        if (otherTheme !== "system") {
          localStorage.theme = otherTheme;
        } else {
          localStorage.removeItem("theme");
        }
      }}
    >
      <div
        className={
          " w-full text-light500_dark-700 text-semibold flex items-center justify-between  bg-transparent  tracking-[0.03px] md:hidden"
        }
      >
        Switch Theme
      </div>

      <div className="w-5 h-5">
        <Image
          src={"/assets/icons/sun.svg"}
          width={24}
          height={24}
          alt="sun"
          className="dark:hidden"
        />
        <Image
          src={"/assets/icons/moon.svg"}
          width={24}
          height={24}
          alt="moon"
          className="hidden dark:block"
        />
      </div>
    </button>
  );
};

export default Theme;
