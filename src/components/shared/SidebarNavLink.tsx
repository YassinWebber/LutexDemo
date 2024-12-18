"use client";

import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideProps } from "lucide-react";
import { FC } from "react";

interface SidebarNavLinkProps {
  item: {
    name: string;
    href: string;
    id: number;
    icon: string;
  };
}

export default function SidebarNavLink({ item }: SidebarNavLinkProps) {
  const Icon = LucideIcons[
    item.icon as keyof typeof LucideIcons
  ] as FC<LucideProps>;

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <Link
      href={item.href}
      key={item.id}
      className={`flex w-full items-center gap-4 rounded-lg px-4 py-3 text-text-muted ${
        isActive(item.href)
          ? "bg-secondary-light"
          : "transition hover:bg-secondary-light"
      }`}
    >
      {Icon && (
        <Icon
          className={`h-5 w-5 ${
            isActive(item.href) ? "text-accent-purple" : "text-text-muted"
          }`}
        />
      )}
      <span
        className={`${
          isActive(item.href) ? "font-semibold text-purple-50/90" : ""
        }`}
      >
        {item.name}
      </span>
    </Link>
  );
}
