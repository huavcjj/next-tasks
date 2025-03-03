"use client";

import {
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menuItems = [
  { name: "All Tasks", href: "/", icon: ClipboardDocumentListIcon },
  { name: "Complete", href: "/completed", icon: ExclamationCircleIcon },
  { name: "Expired", href: "/expired", icon: CheckBadgeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="space-y-4">
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <li key={index}>
            <Link
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300",
                {
                  "bg-white/20 text-white font-bold": pathname === item.href,
                  "bg-white/10 hover:bg-white/20": pathname !== item.href,
                },
              )}
            >
              <Icon className="w-6 h-6" />
              <span>{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
