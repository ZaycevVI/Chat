import React from "react";
import TypingBlock from "components/typing-block";
import Messages from "components/messages";
import { Spin } from "antd";
import "./style.scss";

function ChatContentMessage({ messages, contentRef, isMsgLoading }) {
  return (
    <div ref={contentRef} className="chat__content-messages">
      {isMsgLoading ? (
        <Spin tip="Loading..." />
      ) : (
        <>
          <Messages messages={messages} />
          <TypingBlock name={"Vova"} className="clear-fix"></TypingBlock>
        </>
      )}
    </div>
  );
}
/* <AudioMsg
        message={{
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam culpa magni eaque deleniti quam, non nam, dolorem consectetur fugit consequatur rem voluptatibus architecto atque necessitatibus repellendus incidunt odio quod.",
          date: "Sat Feb 08 2020 16:29:41 GMT+0300 (Moscow Standard Time)",
          isRead: true,

          user: {
            _id: "935f1f77bcf86cd799439011",
            img: null,
            name: "Pasha"
          }
        }}
        isMe={false}
      ></AudioMsg>  */

export default ChatContentMessage;
