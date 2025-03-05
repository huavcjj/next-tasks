import React from "react";
import SideMenu from "@/app/ui/side-menu";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg">
        <SideMenu />
      </aside>

      <main className="flex-1 px-8 py-6 bg-white shadow-md border border-gray-200  overflow-auto">
        {children}
      </main>
    </div>
  );
}
