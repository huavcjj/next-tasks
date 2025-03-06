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
    <ul className="space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-300 text-white",
              {
                "bg-black shadow-md": isActive,
                "hover:bg-gray-800": !isActive,
              },
            )}
          >
            <LinkIcon className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
}
