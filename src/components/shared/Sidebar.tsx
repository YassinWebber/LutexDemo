"use client";

import ServerDetailsCard from "@/src/components/shared/ServerDetailsCard";
import AccountPanel from "@/src/components/shared/AccountPanel";
import SidebarNavLinks from "./SidebarNavLinks";
import { useSidebarContext } from "@/src/contexts/SidebarContext";
import { XIcon } from "lucide-react";
import { useEffect } from "react";

export default function Sidebar({ className }: { className?: string }) {
  const { isSidebarOpened, isDrawerSidebarOpened, close } = useSidebarContext();
  console.log(isSidebarOpened);

  const serverDetails = {
    name: "New Lutex",
    membersCount: 4,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDrawerSidebarOpened) {
        document.body.classList.add("overflow-y-hidden");
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    }
  }, [isDrawerSidebarOpened]);

  return (
    isSidebarOpened && (
      <div
        className={`relative ${isDrawerSidebarOpened ? "flex" : "hidden"} h-screen min-w-[300px] max-w-[300px] flex-col justify-between border border-primary-border bg-primary-card md:flex ${className}`}
      >
        {isDrawerSidebarOpened && (
          <div className="flex w-full justify-between px-6 py-4">
            <h2 className="text-lg font-bold text-text">Lutex</h2>
            <XIcon
              onClick={() => close()}
              className="transition hover:bg-text"
            />
          </div>
        )}
        <div className="p-2">
          <ServerDetailsCard serverDetails={serverDetails} />
        </div>
        <div className="flex-1">
          <SidebarNavLinks />
        </div>
        <div className="w-full place-self-end">
          <AccountPanel />
        </div>
      </div>
    )
  );
}
