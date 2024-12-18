"use client";

import Sidebar from "@/src/components/shared/Sidebar";
import { useSidebarContext } from "@/src/contexts/SidebarContext";
import BankPageHeader from "@/src/features/bank/components/BankPageHeader";
import BanksContainer from "@/src/features/bank/components/BanksContainer";
import { Suspense, useEffect } from "react";

export default function Page() {
  const { isDrawerSidebarOpened, close } = useSidebarContext();

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
    <div className="h-full w-full">
      {isDrawerSidebarOpened && (
        <div className={`absolute inset-0 z-50 flex md:hidden`}>
          <div
            className="absolute h-full w-full bg-black/40"
            onClick={() => close()}
          />
          <Sidebar />
        </div>
      )}
      <div className="sticky top-0 z-40">
        <BankPageHeader />
      </div>
      <Suspense fallback="Loading...">
        <BanksContainer />
      </Suspense>
    </div>
  );
}
