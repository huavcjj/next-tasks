"use client";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "All Tasks", href: "/tasks", icon: ListBulletIcon },
  { name: "Completed", href: "/tasks/completed", icon: CheckCircleIcon },
  { name: "Expired", href: "/tasks/expired", icon: ExclamationTriangleIcon },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full flex flex-col p-6">
      <h1 className="text-xl font-bold text-center mb-6">Next Tasks</h1>
      <ul className="space-y-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300",
                {
                  "bg-black text-white font-semibold": isActive,
                  "hover:bg-gray-100": !isActive,
                },
              )}
            >
              <LinkIcon
                className={clsx("w-6 h-6", {
                  "text-white": isActive,
                  "text-black": !isActive,
                })}
              />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
