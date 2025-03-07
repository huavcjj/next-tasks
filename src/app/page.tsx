"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-5xl font-bold mb-6 tracking-tight">
        Welcome to Tasks App
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Stay organized. Keep track of your tasks effortlessly.
      </p>

      <Link
        href="/tasks"
        className="px-6 py-3 text-lg font-medium bg-white text-black rounded-lg hover:bg-gray-300 transition"
      >
        Get Started →
      </Link>
    </div>
  );
}
