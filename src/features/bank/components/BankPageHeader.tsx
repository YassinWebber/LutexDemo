"use client";

import FilterBy from "@/src/components/shared/FilterBy";
import Searchbar from "@/src/components/shared/Searchbar";
import { useSidebarContext } from "@/src/contexts/SidebarContext";
import { Menu, SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function BankPageHeader() {
  const [isSearchbarOpened, setIsSearchbarOpened] = useState(false);
  const { toggle } = useSidebarContext();

  return (
    <div className="flex w-full items-center justify-between gap-2 border-b border-primary-border bg-border bg-primary-card p-2">
      {isSearchbarOpened ? (
        <>
          <XIcon
            className="mx-3 cursor-pointer transition hover:text-text"
            onClick={() => setIsSearchbarOpened(false)}
          />
          <Searchbar />
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 px-2 md:gap-4 md:px-4">
            <Menu
              className="flex cursor-pointer transition hover:text-text md:hidden"
              onClick={() => toggle()}
            />
            <h3 className="text-lg font-semibold text-text">Banks</h3>
          </div>
          <Searchbar className="hidden md:flex" />
          <div className="flex items-center gap-2">
            <SearchIcon
              className="flex cursor-pointer transition hover:text-text md:hidden"
              onClick={() => setIsSearchbarOpened((prev) => !prev)}
            />
            <FilterBy />
          </div>
        </>
      )}
    </div>
  );
}
