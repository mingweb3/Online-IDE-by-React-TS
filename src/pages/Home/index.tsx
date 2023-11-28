import * as React from "react";
import { Helmet } from "react-helmet-async";
import TopRightToolbar from "@/components/TopRightToolbar";
import MFolderTree from "@/components/MFolderTree";
import FilesTab from "@/components/FilesTab";
import EditorContainer from "@/components/EditorContainer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is homepage" />
      </Helmet>
      <section className="flex flex-row w-[100vw] items-start justify-start">
        <div className="left-side w-[240px] min-h-[100vh] border-r-[1px] border-border border-solid">
          <TopRightToolbar />
          <MFolderTree />
        </div>
        <div className="flex-grow right-side">
          <FilesTab />
          <EditorContainer />
        </div>
      </section>
    </>
  );
};
