import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import HomeLayout from "./HomeLayout";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Taskia",
  description: "Your ultimate task management tool for daily business",
};
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body>
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  );
}
