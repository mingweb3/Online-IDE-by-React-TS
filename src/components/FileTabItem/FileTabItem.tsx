import type { IDETab } from "@/contexts/AppContext";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface IFileTabItemProps {
  tab: IDETab;
  onClose: () => void;
}

const FileTabItem: React.FC<IFileTabItemProps> = (props) => {
  const { tab, onClose } = props;
  const { name } = tab;
  return (
    <div className="tab bg-bg h-[44px] flex flex-row gap-2 items-center content-center mb-[-1px] px-3">
      <div className="text-sm">{name}</div>
      <div className="cursor-pointer icon-btn" onClick={onClose}>
        <CloseOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default FileTabItem;
