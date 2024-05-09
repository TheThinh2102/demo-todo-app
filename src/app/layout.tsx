"use client";
import "./globals.css";

import { Provider } from "react-redux";
import React from "react";
import store from "@/redux/store";

import { Kanit } from 'next/font/google'

const kanit  = Kanit({
  weight: ["400","500","600"],
  subsets: ["latin"]
})

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={kanit.className}>
      <body>
        <Provider store={store}>{children}</Provider>

      </body>
    </html>
  );
}

export default RootLayout;
