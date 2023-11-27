import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { styled } from "styled-components";

const StyledDropZoneLayout = styled.div`
  .drop-box {
    border: 1px dashed var(--text2);
    border-radius: 8px;
    padding: 10px;
    background-color: #f4faff;
    &.focus {
      background-color: #d7edff;
    }
    &.drag-accept {
      border-color: var(--green);
      background-color: #dffff8;
    }
    &.drag-reject {
      border-color: var(--red);
      background-color: #ffdfdf;
    }
  }
`;

const DropZone = () => {

  // onDROP EVENT
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const body = new FormData()
        body.append('property', 'document')
        acceptedFiles.forEach(itmFile => {
          if (itmFile) {
            body.append(`files[]`, itmFile)
          }
        }) 
      }
    },
    []
  )

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "application/pdf": [".pdf"],
        "application/msword": [".doc"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [".docx"],
      },
    });

    

  return <StyledDropZoneLayout>
    <div
        {...getRootProps()}
        className={`drop-box  ${isFocused ? 'focus' : ''} ${
          isDragAccept ? 'drag-accept' : ''
        } ${isDragReject ? 'drag-reject' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          <div className="f14Regular">[ U P L O A D ]</div>
          <div className="f14Regular">Drop or Select a file to upload</div>
        </div>
      </div>
  </StyledDropZoneLayout>;
};

export default DropZone;
