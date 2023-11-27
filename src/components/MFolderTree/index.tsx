import { styled } from "styled-components";
import FolderTree, { NodeData, testData } from "react-folder-tree";

// STYLE
const StyledFolderTree = styled.section`
  height: calc(100vh - 50px);
`;

// COMP
const MFolderTree = () => {
  const sampleData = testData;
  const onTreeStateChange = (state: NodeData, event: unknown) =>
    console.log("NodeData", state);
    console.log('event', event);
    
  const onChooseItem = ({defaultOnClick, nodeData }: { defaultOnClick: ()=> void, nodeData: NodeData }) => {
    defaultOnClick();
    console.log(nodeData);
  };

  console.log(sampleData);

  return (
    <StyledFolderTree className="flex flex-col justify-between">
      <div className="p-3">
        <FolderTree
          data={sampleData}
          onChange={onTreeStateChange}
          onNameClick={onChooseItem}
          showCheckbox={false}
        />
      </div>
      <div className="toolbar-bottom  border-t-[1px] border-border border-solid">
        {/* <div className="text-center py-3 px-2 cursor-pointer hover:text-text2">
                    Upload Project (.ZIP)
                </div> */}
        <div className="text-center py-3 px-2 cursor-pointer text-red">
          Clear Project
        </div>
      </div>
    </StyledFolderTree>
  );
};

export default MFolderTree;
