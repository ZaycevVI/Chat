import React from "react";
import { Icon, Input } from "antd";
import './style.scss'

const iconStyle = { fontSize: "16px" };

function ChatContentFooter({ inputMsg, onInput }) {
  return (
    <div className="chat__content-input">
      <div className="chat__content-input-container">
        <Icon type="smile" style={iconStyle} />
        <Input
          value={inputMsg}
          placeholder="Enter a message"
          onInput={onInput}
        />
        <Icon type="camera" style={iconStyle} />
        {inputMsg && inputMsg.length > 0 ? (
          <Icon type="check" style={iconStyle} />
        ) : (
          <Icon type="audio" style={iconStyle} />
        )}
      </div>
    </div>
  );
}

export default ChatContentFooter;
