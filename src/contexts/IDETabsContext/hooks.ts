import { useContext } from "react";
import type { IDETabsContextType } from "./types";
import { IDETabsContext } from "./Provider";

export const useTabs = (): IDETabsContextType => {
  const context = useContext(IDETabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }

  return context;
};
