import {
  Button,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";

interface ModalNewFolderProps {
  onClose: () => void;
}

const ModalNewFolder = ({ onClose }: ModalNewFolderProps) => {
  return (
    <>
      <form>
        <DialogHeader>New folder</DialogHeader>
        <DialogBody>
          <div className="text-text2 mb-4">
            No Space, lowercase only
            <div>
              In Folder: <i className="text-black1e">ROOT/bitcoin/</i>
            </div>
          </div>
          <div className="border-text border-dashed border-t-[1px] pt-4">
            <Input
              variant="standard"
              label="Folder name (no space, lowercase)"
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

export default ModalNewFolder;
