import { Button, DialogBody, DialogHeader } from "@material-tailwind/react";
import DropZone from "../DropZone/DropZone";

interface ModalUploadZipProps {
  onClose: () => void;
}

const ModalUploadZip = ({ onClose }: ModalUploadZipProps) => {
  return (
    <>
      <form>
        <DialogHeader>Upload your project</DialogHeader>
        <DialogBody>
          <div className="text-text2 mb-6">
            Using your .ZIP file contains: .html, .js, .css, .jpg, .png
          </div>
          <div className="pt-4">
            <DropZone />
          </div>
        </DialogBody>
        <div className="flex flex-row items-center justify-end gap-3 p-4">
          <Button variant="text" onClick={onClose} className="mr-1">
            <span>Cancel</span>
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModalUploadZip;
