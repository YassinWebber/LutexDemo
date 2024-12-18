"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextValuesType {
  isSidebarOpened: boolean;
  isDrawerSidebarOpened: boolean;
  toggle: () => void;
  close: () => void;
}

const sidebarContext = createContext<SidebarContextValuesType | null>(null);

export function useSidebarContext() {
  const values = useContext(sidebarContext);

  if (values === null) throw Error("Cannot use outside of SidebarProvider.");

  return values;
}

export function SidebarContextProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const [isDrawerSidebarOpened, setIsDrawerSidebarOpened] = useState(false);

  function isSmallScreen() {
    return window.innerWidth < 800;
  }

  function toggle() {
    if (isSmallScreen()) {
      setIsDrawerSidebarOpened((prev) => !prev);
    } else {
      setIsSidebarOpened((prev) => !prev);
    }
  }

  function close() {
    if (isSmallScreen()) {
      setIsDrawerSidebarOpened(false);
    } else {
      setIsSidebarOpened(false);
    }
  }

  return (
    <sidebarContext.Provider
      value={{
        isSidebarOpened,
        isDrawerSidebarOpened,
        toggle,
        close,
      }}
    >
      {children}
    </sidebarContext.Provider>
  );
}
