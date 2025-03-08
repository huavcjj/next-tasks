"use client";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "All Tasks", href: "/tasks", icon: ListBulletIcon },
  { name: "Completed", href: "/tasks/completed", icon: CheckCircleIcon },
  { name: "Expired", href: "/tasks/expired", icon: ExclamationTriangleIcon },
];

export default function NavLinks() {
  return (
    <nav className="w-full h-full flex flex-col p-6">
      <h1 className="text-xl font-bold text-center mb-6">Next Tasks</h1>
      <ul className="space-y-2">
        {links.map((link) => (
          <NavLinkItem
            key={link.name}
            href={link.href}
            icon={link.icon}
            name={link.name}
          />
        ))}
      </ul>
    </nav>
  );
}

export function NavLinkItem({
  name,
  href,
  icon: Icon,
}: {
  name: string;
  href: string;
  icon: React.ElementType;
}) {
  const pathname = usePathname();
  const LinkIcon = Icon;
  const isActive = pathname === href;

  return (
    <Link
      key={name}
      href={href}
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
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
}
