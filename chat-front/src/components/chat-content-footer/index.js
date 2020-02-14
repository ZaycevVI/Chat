import React from "react";
import { Icon, Input } from "antd";
import "./style.scss";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const iconStyle = { fontSize: "16px" };


function ChatContentFooter({
  inputMsg,
  onInput,
  isEmojiPickerVisible,
  addEmoji,
  toggleEmojiPicker,
  addMessage
}) {
  const addMsgHandler = (e) => {
    addMessage({
      text: inputMsg,
      date: new Date(),
      user: {
        "_id": "5e4275de688f315c7ed81504",
      "avatar": null,
      "name": "aliqua laboris"
      }
    })
  }

  const onChange = ({ currentTarget: { value } }) => onInput(value);
  return (
    <div className="chat__content-input">
      <div className="chat__content-input-container">
        <Icon type="smile" style={iconStyle} onClick={toggleEmojiPicker} />
        {isEmojiPickerVisible && (
          <Picker onSelect={({ native }) => addEmoji(native)} />
        )}
        <Input
          value={inputMsg}
          placeholder="Enter a message"
          onChange={onChange}
        />
        <Icon type="camera" style={iconStyle} />
        {inputMsg && inputMsg.length > 0 ? (
          <Icon type="check" style={iconStyle} onClick={() => addMessage({
            text: inputMsg,
            date: new Date(),
            user: {
              "_id": "5e4275de688f315c7ed81504",
            "avatar": null,
            "name": "aliqua laboris"
            }
          })}/>
        ) : (
          <Icon type="audio" style={iconStyle} />
        )}
      </div>
    </div>
  );
}

export default ChatContentFooter;
