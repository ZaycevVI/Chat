import React from "react";
import TextMsg from "components/message/text";
import { Empty } from "antd";

function ChatContentMessage({ messages }) {
  return (
    <div className="chat__content-messages">
      {messages && messages.length > 0 ? (
        messages.map((m, i) => (
          <TextMsg key={i} message={m} isMe={i % 2 === 0} />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Thread is empty"
        />
      )}
    </div>
  );
}

export default ChatContentMessage;
