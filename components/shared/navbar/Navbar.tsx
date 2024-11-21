"use client";

import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import WalletStatus from "@/components/WalletStatus";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed z-50  background-light900_dark900 py-6  w-full">
      <nav className="px-4 xl:px-20 flex w-full flex-between gap-5  dark:shadow-none">
        <Link href={"/"} className="">
          <div className="flex flex-col gap-1">
            <p className=" font-bold text-2xl leading-[22px]  text-light-text-950 dark:text-dark-text-950 transition-all duration-300">
              ZenPad
            </p>
          </div>
        </Link>
        <div className="flex-between gap-5">
          <div className="flex-row gap-6 flex-1 p-2 lg:gap-12 transition-all duration-300 hidden md:flex">
            {navLinks.map((item) => {
              const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
              return (
                <Link
                  className={`${
                    isActive ? "text-light950_dark-950 text-bold " : "text-light500_dark-700 text-semibold "
                  } flex items-center justify-start  bg-transparent  tracking-[0.03px] `}
                  href={item.route}
                  key={item.route}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:block">
            <Theme />
          </div>
          <WalletStatus />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
