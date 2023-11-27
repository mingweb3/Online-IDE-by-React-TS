import { Tooltip } from "@material-tailwind/react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const TopRightToolbar = () => {
  return (
    <section className="border-b-[1px] border-solid border-border h-[50px]">
      <div className="p-3 flex flex-row items-center justify-between gap-3">
        <div className="left-s flex flex-row items-center gap-3">
          <div className="icon-btn cursor-pointer">
            <Tooltip content="New file" placement="bottom">
              <InsertDriveFileOutlinedIcon />
            </Tooltip>
          </div>
          <div className="icon-btn cursor-pointer">
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
    </section>
  );
};

export default TopRightToolbar;
