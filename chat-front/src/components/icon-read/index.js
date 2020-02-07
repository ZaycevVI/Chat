import React from "react";
import ReadSvg from "assets/readed.svg";
import NoReadSvg from "assets/noreaded.svg";

function IconRead({ isRead }) {
  return (
    <div className="message__icon--is-read">
      {isRead ? (
        <img src={ReadSvg} alt="Msg was read" />
      ) : (
        <img src={NoReadSvg} alt="Msg was read" />
      )}
    </div>
  );
}

export default IconRead;