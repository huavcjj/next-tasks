"use client";

import {
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "All Tasks", href: "/tasks", icon: ClipboardDocumentListIcon },
  { name: "Completed", href: "/tasks/completed", icon: ExclamationCircleIcon },
  { name: "Expired", href: "/tasks/expired", icon: CheckBadgeIcon },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <nav className="w-64 h-full bg-gradient-to-b from-gray-200 to-gray-300 text-gray-900 p-6">
      <h1 className="text-xl font-bold">Next Tasks</h1>
      <ul className="mt-6 space-y-3">
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 shadow-sm",
                {
                  "bg-gray-500 text-white shadow-md scale-105": isActive,
                  "hover:bg-gray-300 hover:shadow-md hover:scale-105 hover:text-black":
                    !isActive,
                },
              )}
            >
              <LinkIcon className="w-6 h-6 transition-all duration-200 text-gray-700 group-hover:text-black" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
