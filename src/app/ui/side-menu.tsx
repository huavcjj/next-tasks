"use client";

import NavLinks from "@/app/ui/nav-links";

export default function SideMenu() {
  return (
    <aside className="w-64 h-full bg-gradient-to-b from-indigo-500 to-purple-600 text-white p-6 fixed shadow-xl">
      <h1 className="text-2xl font-extrabold tracking-wide">Next Tasks</h1>
      <nav className="mt-6">
        <NavLinks />
      </nav>
    </aside>
  );
}
