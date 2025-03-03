import React from "react";
import SideMenu from "@/app/ui/side-menu";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <SideMenu />
      <main className="flex-1 ml-64 px-8 py-6 bg-white shadow-md border border-gray-200 overflow-auto">
        {children}
      </main>
    </div>
  );
}
