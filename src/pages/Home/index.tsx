import * as React from "react";
import { Helmet } from "react-helmet-async";
import TopRightToolbar from "@/components/TopRightToolbar";
import MFolderTree from "@/components/MFolderTree";
import FilesTab from "@/components/FilesTab";
import EditorContainer from "@/components/EditorContainer";
import EmailForm from "@/components/EmailForm";

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Online IDE by React TS</title>
        <meta name="description" content="Online IDE by React TS - MingWeb3" />
      </Helmet>
      {/* <section className="flex flex-row h-[100vh] w-[100vw] items-center justify-center">
        <EmailForm />
      </section> */}
      <section className="flex flex-row w-[100vw] items-start justify-start">
        <div className="left-side w-[240px] min-h-[100vh] border-r-[1px] border-border border-solid">
          <TopRightToolbar />
          <MFolderTree />
        </div>
        <div className="right-side flex-grow">
          <FilesTab />
          <EditorContainer />
        </div>
      </section>
    </>
  );
};
