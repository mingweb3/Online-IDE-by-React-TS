import React, { createContext, useCallback, useState } from "react";
import type { IDETab, IDETabsContextType, IDETabsProviderProps } from "./types";

export const IDETabsContext = createContext<IDETabsContextType | undefined>(undefined);

export const IDETabsProvider: React.FC<IDETabsProviderProps> = (props) => {
  const { children } = props;

  const [tabs, setTabs] = useState<IDETab[]>([]);

  const onAddTab = useCallback((tab: IDETab): void => {
    setTabs((prev) => [...prev, tab]);
  }, []);

  const onRemoveTab = useCallback((tab: IDETab): void => {
    setTabs((prev) => prev.filter((t) => t._id !== tab._id));
  }, []);

  return <IDETabsContext.Provider value={{ tabs, onAddTab, onRemoveTab }}>{children}</IDETabsContext.Provider>;
};
