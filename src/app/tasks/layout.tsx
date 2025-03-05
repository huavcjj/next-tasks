import React from "react";
import SideMenu from "@/app/ui/side-menu";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 h-screen fixed overflow-y-auto bg-white shadow-lg border-r border-gray-300">
        <SideMenu />
      </aside>

      <main className="flex-1 ml-64 p-0 bg-white shadow-md border-l border-gray-200 overflow-auto">
        {children}
      </main>
    </div>
  );
}
