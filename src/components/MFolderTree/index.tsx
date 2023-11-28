import { styled } from "styled-components";
import FolderTree, { NodeData } from "react-folder-tree";
import { folderTreeSample } from "@/constants/folderTreeSample";
import { IEventTree } from "@/types/IEventTree";
import { useTabs } from "@/contexts/IDETabsContext";

// STYLE
const StyledFolderTree = styled.section`
  height: calc(100vh - 50px);
`;

// COMP
const MFolderTree = () => {
  const { onAddTab } = useTabs();

  const sampleData = folderTreeSample;

  const onTreeStateChange = (state: NodeData, event: unknown) => {
    const { type, path, params } = event as unknown as IEventTree;
    console.log("last event: ", { type, path, params });
    console.log("NodeData", state);
  };

  const onChooseItem = ({ defaultOnClick, nodeData }: { defaultOnClick: () => void; nodeData: NodeData }) => {
    defaultOnClick();
    onAddTab(nodeData);
    console.log(nodeData);
  };

  return (
    <StyledFolderTree className="flex flex-col justify-between">
      <div className="p-3">
        <FolderTree data={sampleData} onChange={onTreeStateChange} onNameClick={onChooseItem} showCheckbox={false} />
      </div>
      <div className="toolbar-bottom  border-t-[1px] border-border border-solid">
        {/* <div className="px-2 py-3 text-center cursor-pointer hover:text-text2">
                    Upload Project (.ZIP)
                </div> */}
        <div className="px-2 py-3 text-center cursor-pointer text-red">Clear Project</div>
      </div>
    </StyledFolderTree>
  );
};

export default MFolderTree;
