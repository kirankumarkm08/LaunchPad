import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import AppLayout from "./AppLayout";
import Web3ModalProvider from "@/context/Web3ModalProvider";
import { cookieToInitialState } from "wagmi";
import { config } from "@/web3ModalConfig";
import { headers } from "next/headers";

const Manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Manrope-Light.woff",
      weight: "300",
      style: "thin",
    },
    {
      path: "../public/fonts/Manrope-ExtraLight.woff",
      weight: "200",
      style: "thin",
    },
  ],
});

export const metadata: Metadata = {
  title: "ZenPad IDO",
  description: "ZenPad by zeroswap",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className={Manrope.className}>
        <ThemeProvider>
          <Web3ModalProvider initialState={initialState}>
            <AppLayout>{children}</AppLayout>
          </Web3ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
