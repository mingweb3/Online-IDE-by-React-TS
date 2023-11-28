import { NodeData } from "react-folder-tree";

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface AppContextType {
  tabs: IDETab[];
  onAddTab: (tab: IDETab) => void;
  onRemoveTab: (tab: IDETab) => void;
  onSelectTab: (tab: IDETab) => void;
}

export interface IDETab extends NodeData {
  _id?: number;
  selected?: boolean;
}
