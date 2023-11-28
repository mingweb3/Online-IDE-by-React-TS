import { NodeData } from "react-folder-tree";

export interface IDETabsProviderProps {
  children: React.ReactNode;
}

export interface IDETabsContextType {
  tabs: IDETab[];
  onAddTab: (tab: IDETab) => void;
  onRemoveTab: (tab: IDETab) => void;
}

export interface IDETab extends NodeData {
  _id?: number;
}
