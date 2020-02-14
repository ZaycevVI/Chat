import React from "react";
import "./style.scss";
import Icon from "components/icon-read";
import classNames from "classnames";
import { getDateForMsg } from "helpers/date";
import Avatar from "components/avatar";

function Message({ message, isMe, children }) {
  const classes = { "message--is-me": isMe };

  return (
    <div className={classNames("message", classes, "clear-fix")}>
      <div className="message__info">
        <div className="message__avatar">
          <Avatar user={message.user}></Avatar>
        </div>
        <div className="message__content">{children}</div>
        <Icon isRead={message.isRead}></Icon>
      </div>
      <div className="message__time">{getDateForMsg(message.date)}</div>
    </div>
  );
}

export default Message;
