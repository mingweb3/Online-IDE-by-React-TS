import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const FileTabItem = () => {
  return (
    <div className="tab bg-black1e h-[44px] flex flex-row gap-2 items-center content-center mb-[-1px] px-3">
      <div className="text-sm">index.html</div>
      <div className="icon-btn cursor-pointer">
        <CloseOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default FileTabItem;
