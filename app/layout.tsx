import type { Metadata } from "next";
import "./globals.css";
// import { fairyDustCursor } from "cursor-effects";

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
      {children}
    </html>
  );
}
