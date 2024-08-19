import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import HomeLayout from "./HomeLayout";
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
      <HomeLayout>
        {children}
      </HomeLayout>
    </html>
  );
}
