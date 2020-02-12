import React from "react";
import ReadSvg from "assets/img/readed.svg";
import NoReadSvg from "assets/img/noreaded.svg";

function IconRead({ isRead }) {
  return (
    <div className="message__icon">
      {isRead ? (
        <img src={ReadSvg} alt="Msg was read" />
      ) : (
        <img src={NoReadSvg} alt="Msg was read" />
      )}
    </div>
  );
}

export default IconRead;