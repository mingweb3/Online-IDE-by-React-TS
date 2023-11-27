import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import ModalUploadZip from "../ModalUploadZip/ModalUploadZip";

const BotLeftToolbar = () => {
  const [isShowUpLoad] = useState(true);

  // UPLOAD PROJECT
  const [opUpModal, setOpUpModal] = useState(false);
  const toggleUpModal = () => setOpUpModal(!opUpModal);

  return (
    <>
      {isShowUpLoad && (
        <div onClick={toggleUpModal} className="text-center py-3 px-2 cursor-pointer hover:text-text2">
          Upload Project (.zip)
        </div>
      )}

      {!isShowUpLoad && (
        <div className="text-center py-3 px-2 cursor-pointer text-red">
          Clear Project
        </div>
      )}

      <Dialog open={opUpModal} handler={toggleUpModal} size={"xs"}>
        <ModalUploadZip onClose={toggleUpModal}/>
      </Dialog>
    </>
  );
};

export default BotLeftToolbar;
