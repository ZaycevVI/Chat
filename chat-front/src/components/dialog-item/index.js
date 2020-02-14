import React from "react";
import IconRead from "components/icon-read";
import "./style.scss";
import { getDateForPreview } from "helpers/date";
import Avatar from 'components/avatar';
import classNames from 'classnames';

function DialogItem({ message, isMyLast, isSelected, onClick }) {
  return (
    <div className={classNames("dialog__item", {"dialog__item--selected": isSelected})} onClick={() => {onClick(message.user._id)}}>
      <div className="dialog__item-avatar">
        <Avatar user={message.user}></Avatar>
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
              {message.unreadAmount > 9 ? `+9` : message.unreadAmount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DialogItem;
