import { styled } from "styled-components";
import FolderTree, { NodeData } from "react-folder-tree";
import { folderTreeSample } from "@/constants/folderTreeSample";
import { IEventTree } from "@/types/IEventTree";
import { useEffect, useState } from "react";
import BotLeftToolbar from "../BotLeftToolbar/BotLeftToolbar";
import { useIDETabs } from "@/contexts/AppContext";

// STYLE
const StyledFolderTree = styled.section`
  height: calc(100vh - 50px);

  .tree-view {
    height: calc(100vh - 100px);
    overflow: auto;
  }
`;

// COMP
const MFolderTree = () => {

  const [treeS, setTreeS] = useState(folderTreeSample);
  const { onAddTab } = useIDETabs();


  const onTreeStateChange = (state: NodeData, event: unknown) => {
    const { type, path, params } = event as unknown as IEventTree;
    console.log("last event: ", { type, path, params });
    console.log("NodeData", state);


    console.log("last event: ", { type, path, params });
    console.log("NodeData", state);
  };

  const onChooseItem = ({
    defaultOnClick,
    nodeData,
  }: {
    defaultOnClick: () => void;
    nodeData: NodeData;
  }) => {
    defaultOnClick();
    if (typeof nodeData.isOpen === "undefined") {
      onAddTab(nodeData);
    }
    console.log(nodeData);
  };

  useEffect(() => {
    console.log(treeS);

    setTimeout(() => {
      if (
        treeS.children[3].children &&
        Array.isArray(treeS.children[3].children)
      )
        treeS.children[3].children.push({
          name: "my-file.js",
          id: "mnfie523453s",
          type: "file",
          fileType: "js",
          language: "javascript",
          folderId: "2",
        });
      setTreeS({ ...treeS });
    }, 2000);
  }, []);

  return (
    <StyledFolderTree>
      <div className="inner flex flex-col justify-between">
        <div className="tree-view">
          <div className="p-3">
            {/* <div className="text-text2">
              Please upload your project as ZIP first!
              <br />
              <br />
              <b>Click "Upload Project" below.</b>
              <br />
              <br />- Support .html, .js, .css, .jpg, .png
            </div> */}
            <FolderTree
              data={treeS}
              onChange={onTreeStateChange}
              onNameClick={onChooseItem}
              showCheckbox
            />
          </div>
        </div>
        <div className="toolbar-bottom  border-t-[1px] border-border border-solid">
          <BotLeftToolbar />
        </div>
      </div>
    </StyledFolderTree>
  );
};

export default MFolderTree;
