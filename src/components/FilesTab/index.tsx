import styled from "styled-components";
import FileTabItem from "../FileTabItem/FileTabItem";
import { IDETab, useIDETabs } from "@/contexts/AppContext";

const TabWrapper = styled.div`
  max-width: calc(100vw - 240px);
  overflow: hidden;
  overflow-x: auto;
`;

const FilesTab = () => {
  const { tabs, onRemoveTab, onSelectTab } = useIDETabs();
  return (
    <section className=" bg-bg2">
      <TabWrapper className="px-2 flex flex-row gap-1 items-end h-[50px]">
        {tabs.map((tab: IDETab) => (
          <FileTabItem key={tab._id} tab={tab} onSelectTab={() => onSelectTab(tab)}  onClose={() => onRemoveTab(tab)} />
        ))}
      </TabWrapper>
    </section>
  );
};

export default FilesTab;
