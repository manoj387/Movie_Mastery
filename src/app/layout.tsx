"use client"

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";


// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Movie Mastery",
//   description: "Generated movie app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])
  return (
    <html lang="en">
      <head>
        <title>Movie Mastery</title>
      </head>
      <body cz-shortcut-listen="true">
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </body>
    </html>
  );
}
