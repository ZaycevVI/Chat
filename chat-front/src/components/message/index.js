import React from "react";
import moment from "moment";
import "./style.scss";
import Icon from 'components/icon-read';
import classNames from 'classnames';

function Message({text, date, img, isRead, isMe}) {
  const classes = { 'message--is-me': isMe };

  return (
      <div className={classNames('message', classes, 'clear-fix')} >
        <div className="message__content">
          <div className="message__icon">
            <img src={img}></img>
          </div>
          <div className="message__text">{text}</div>
          <Icon isRead={isRead}></Icon>
        </div>
        <div className="message__time">
          {moment(date).fromNow()}
        </div>
      </div>
  );
}

export default Message;
