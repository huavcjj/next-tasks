"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "All Tasks", href: "/tasks", icon: ListBulletIcon },
  { name: "Completed", href: "/tasks/completed", icon: CheckCircleIcon },
  { name: "Expired", href: "/tasks/expired", icon: ExclamationTriangleIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="space-y-3">
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
                "hover:bg-gray-400 hover:shadow-md hover:scale-105 hover:text-black":
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
  );
}
