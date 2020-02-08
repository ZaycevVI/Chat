import React from "react";
import moment from "moment";
import IconRead from "components/icon-read";
import "./style.scss";

const getDate = date => {
  var end = moment(new Date());
  var start = moment(date);
  return end.diff(start, "days") >= 1
    ? start.format("DD.MM.YYYY")
    : start.format("HH:mm");
};

function DialogItem({
  isMyLast,
  isRead,
  isOnline,
  unreadAmount = 0,
  userName,
  avatar,
  message,
  date
}) {
  return (
    <div className="dialog__item">
      <div className="dialog__item-avatar">
        <img src={avatar} alt="avatar" />
        {isOnline && <div className="dialog__item-online"></div>}
      </div>
      <div className="dialog__item-message">
        <div className="dialog__item-user-name">{userName}</div>
        <div className="dialog__item-user-text">{message}</div>
      </div>
      <div className="dialog__item-info">
        <div className="dialog__item-date">{getDate(date)}</div>
        <div className="dialog__item-status">
          {isMyLast && <IconRead isRead={isRead}></IconRead>}
          {!isMyLast && !isRead && (
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
