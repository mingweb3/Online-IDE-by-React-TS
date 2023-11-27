import {
  Button,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";

interface ModalNewFileProps {
  onClose: () => void;
}

const ModalNewFile = ({ onClose }: ModalNewFileProps) => {
  return (
    <>
      <form>
        <DialogHeader>New file</DialogHeader>
        <DialogBody>
          <div className="text-text2 mb-4">
            Only support: .html, .js, .css, .jpg, .png
            <div>
              In Folder: <i className="text-black1e">ROOT/bitcoin/</i>
            </div>
          </div>
          <div className="border-text border-dashed border-t-[1px] pt-4">
            <Input
              variant="standard"
              label="File name (no space, file type .html, .js, .css only)"
              color="indigo"
              crossOrigin={undefined}
            />
          </div>
        </DialogBody>
        <div className="flex flex-row items-center justify-between gap-3 p-4">
          <Button variant="text" onClick={onClose} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" onClick={onClose}>
            <span>Confirm</span>
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModalNewFile;
