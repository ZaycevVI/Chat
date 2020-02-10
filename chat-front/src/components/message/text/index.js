import Bubble from "components/message/bubble";
import React from "react";
import './style.scss'

export default function({ message, isMe }) {
  return (
    <Bubble message={message} isMe={isMe}>
      <div className="message-content-text">{message.text}</div>
    </Bubble>
  );
}
