import React from "react";
import IconRead from "components/icon-read";
import "./style.scss";
import { getDateForPreview } from "helpers/date";

function DialogItem({ message, isMyLast, unreadAmount = 0 }) {
  return (
    <div className="dialog__item">
      <div className="dialog__item-avatar">
        <img src={message.user.avatar} alt="avatar" />
        {message.user.isOnline && <div className="dialog__item-online"></div>}
      </div>
      <div className="dialog__item-message">
        <div className="dialog__item-user-name">{message.user.name}</div>
        <div className="dialog__item-user-text">{message.text}</div>
      </div>
      <div className="dialog__item-info">
        <div className="dialog__item-date">{getDateForPreview(message.date)}</div>
        <div className="dialog__item-status">
          {isMyLast && <IconRead isRead={message.isRead}></IconRead>}
          {!isMyLast && !message.isRead && (
            <div className="dialog__item-unread">
              {unreadAmount > 9 ? `+9` : unreadAmount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DialogItem;
