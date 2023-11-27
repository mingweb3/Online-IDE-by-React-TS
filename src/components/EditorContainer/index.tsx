import { useRef } from "react";
import { Editor } from "@monaco-editor/react";
import files from "./sampleFiles";
import useWindowDimensions from "@/hooks/useWindonwDimensions";

const EditorContainer = () => {
  const editorRef = useRef(null);
  const fileData = files["script.js"];

  const { height } = useWindowDimensions();



  return (
    <div>
      <Editor
        height={height - 50}
        theme="vs-dark"
        path={fileData.name}
        defaultLanguage={fileData.language}
        defaultValue={fileData.value}
        onMount={(editor) => (editorRef.current = editor)}
      />
    </div>
  );
};

export default EditorContainer;
