"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import SidebarNavLink from "@/src/components/shared/SidebarNavLink";
import { item } from "@/src/types";
import { useState } from "react";

export default function SidebarNavCategory({
  section,
}: {
  section: {
    sectionName?: string;
    items: item[];
    id: string;
  };
}) {
  const [isCategoryOpened, setIsCategoryOpened] = useState(true);

  return (
    <div key={section.id} className="flex flex-col gap-2">
      {section.sectionName && (
        <div
          className="flex w-full cursor-pointer items-center justify-between"
          onClick={() => setIsCategoryOpened((prev) => !prev)}
        >
          <h3 className="text-sm font-semibold text-text-muted">
            {section.sectionName.toUpperCase()}
          </h3>
          {isCategoryOpened ? (
            <ChevronDown className="text-sm text-text-muted" />
          ) : (
            <ChevronUp className="text-sm text-text-muted" />
          )}
        </div>
      )}
      {isCategoryOpened && (
        <ul className="flex flex-col gap-3">
          {section.items.map((item) => (
            <SidebarNavLink item={item} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
