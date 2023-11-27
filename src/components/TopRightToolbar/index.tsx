import { useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  Dialog,
} from "@material-tailwind/react";
import ModalNewFile from "../ModalNewFile/ModalNewFile";
import ModalNewFolder from "../ModalNewFolder/ModalNewFolder";

const TopRightToolbar = () => {

  // NEW FILE MODAL
  const [openNFModal, setOpenNFModal] = useState(false);
  const toggleNFModal = () => setOpenNFModal(!openNFModal);

  // NEW FOLDER MODAL
  const [openFDModal, setOpenFDModal] = useState(false);
  const toggleFDModal = () => setOpenFDModal(!openFDModal);


  return (
    <section className="border-b-[1px] border-solid border-border h-[50px]">
      <div className="p-3 flex flex-row items-center justify-between gap-3">
        <div className="left-s flex flex-row items-center gap-3">
          <div onClick={toggleNFModal} className="icon-btn cursor-pointer">
            <Tooltip content="New file" placement="bottom">
              <InsertDriveFileOutlinedIcon />
            </Tooltip>
          </div>
          <div onClick={toggleFDModal} className="icon-btn cursor-pointer">
            <Tooltip content="New folder" placement="bottom">
              <CreateNewFolderOutlinedIcon />
            </Tooltip>
          </div>
        </div>
        <div className="right-s">
          <div className="icon-btn cursor-pointer">
            <Tooltip content="Download source code" placement="bottom">
              <FileDownloadOutlinedIcon />
            </Tooltip>
          </div>
        </div>
      </div>

      <Dialog open={openNFModal} handler={toggleNFModal}  size={"xs"}>
        <ModalNewFile onClose={toggleNFModal}/>
      </Dialog>

      <Dialog open={openFDModal} handler={toggleFDModal}  size={"xs"}>
        <ModalNewFolder onClose={toggleFDModal}/>
      </Dialog>
    </section>
  );
};

export default TopRightToolbar;
