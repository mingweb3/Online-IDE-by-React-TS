import React, { createContext, useCallback, useState } from "react";
import type { IDETab, AppContextType, AppProviderProps } from "./types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const { children } = props;

  const [tabs, setTabs] = useState<IDETab[]>([]);

  const onAddTab = useCallback(
    (tab: IDETab): void => {
      if (tabs.findIndex((t) => t._id === tab._id) < 0)
        setTabs((prev) => [...prev, tab]);
    },
    [tabs]
  );

  const onRemoveTab = useCallback((tab: IDETab): void => {
    const fIndx = tabs.findIndex((t) => t._id === tab._id);
    if (tab.selected === true) {
      if (tabs.length > 1) {
        if (fIndx === 0) {
          tabs[1].selected = true
        } else if (fIndx === tabs.length - 1){
          tabs[fIndx-2].selected = true
        } else {
          tabs[fIndx-1].selected = true
        }
        setTabs([...tabs.filter((t) => t._id !== tab._id)]);
      } else {
        setTabs((prev) => prev.filter((t) => t._id !== tab._id));
      }
    }
    
  }, []);

  const onSelectTab = useCallback(
    (tab: IDETab): void => {
      const fIndx = tabs.findIndex((t) => t._id === tab._id);
      console.log(tabs);
      if (fIndx >= 0 && tabs.length > 0) {
        const newArr = tabs.map((item) => ({ ...item, selected: false }));

        newArr[fIndx].selected = true;
        setTabs([...newArr]);
      }
    },
    [tabs]
  );

  return (
    <AppContext.Provider value={{ tabs, onAddTab, onRemoveTab, onSelectTab }}>
      {children}
    </AppContext.Provider>
  );
};
