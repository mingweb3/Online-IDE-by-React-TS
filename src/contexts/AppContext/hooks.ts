import { useContext } from "react";
import type { AppContextType, IDETab } from "./types";
import { AppContext } from "./Provider";

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }

  return context;
};

export const useIDETabs = (): {
  tabs: IDETab[];
  onAddTab: (tab: IDETab) => void;
  onRemoveTab: (tab: IDETab) => void;
} => {
  const { tabs, onAddTab, onRemoveTab } = useApp();
  return { tabs, onAddTab, onRemoveTab };
};
