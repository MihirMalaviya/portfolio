import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "./components/MainNavbar";
import { useState, useEffect } from "react";
import MouseEffect from "./components/MouseEffect";

export const metadata: Metadata = {
  title: "Mihir Malaviya",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   const cursorEffect = fairyDustCursor({
  //     colors: ["#ff0000", "#00ff00", "#0000ff"],
  //   });

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        />
      </head>
      {/* <body className={inter.className}></body> */}
      <body className="!bg-stone-950 overflow-x-hidden scroll-smooth selection:bg-secondary-300 selection:text-secondary-900">
        <MouseEffect />
        <MainNavbar />

        {children}
      </body>
    </html>
  );
}
