import React, { createContext, useCallback, useState } from "react";
import type { IDETab, AppContextType, AppProviderProps } from "./types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const { children } = props;

  const [tabs, setTabs] = useState<IDETab[]>([]);

  const onAddTab = useCallback(
    (tab: IDETab): void => {
      if (tabs.findIndex((t) => t._id === tab._id) < 0) setTabs((prev) => [...prev, tab]);
    },
    [tabs]
  );

  const onRemoveTab = useCallback((tab: IDETab): void => {
    setTabs((prev) => prev.filter((t) => t._id !== tab._id));
  }, []);

  return <AppContext.Provider value={{ tabs, onAddTab, onRemoveTab }}>{children}</AppContext.Provider>;
};
