import React from "react";
import "./style.scss";
import Icon from "components/icon-read";
import classNames from "classnames";
import getAvatar from "helpers/avatar-generator";
import { getDateForMsg } from "helpers/date";

function Message({ message, isMe, children }) {
  const classes = { "message--is-me": isMe };

  return (
    <div className={classNames("message", classes, "clear-fix")}>
      <div className="message__info">
        <div className="message__icon">
          {message.user.img ? (
            <img src={message.user.img} alt="avatar"></img>
          ) : (
            <div
              className="random-avatar"
              style={{
                background: `linear-gradient(${getAvatar(message.user._id).join(",")})`
              }}
            >
              {message.user.name && message.user.name[0].toUpperCase()}
            </div>
          )}
        </div>
        <div className="message__content">{children}</div>
        <Icon isRead={message.isRead}></Icon>
      </div>
      <div className="message__time">{getDateForMsg(message.date)}</div>
    </div>
  );
}

export default Message;
