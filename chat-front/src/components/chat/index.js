import React, { useRef, useEffect } from "react";
import "./style.scss";
import SideBar from "components/sidebar";
import Header from "components/chat-content-header";
import Content from "components/chat-content-message";
import Footer from "components/chat-content-footer";
import { connect } from "react-redux";
import {
  changeMsgInput,
  addEmoji,
  toggleEmojiPicker,
  addMessage
} from "actions/message";

function Chat({
  messages,
  isMsgLoading,
  isEmojiPickerVisible,
  selectedThread,
  msgInput,
  changeMsgInput,
  addEmoji,
  toggleEmojiPicker,
  addMessage
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.scrollTo({
      left: 0,
      top: 9999,
      behavior: "smooth"
    });
  }, [messages]);

  return (
    <div className="chat__block">
      <div className="chat">
        <SideBar />
        <div className="chat__content">
          <Header selectedUser={selectedThread && selectedThread.user} />
          <Content
            messages={messages}
            contentRef={contentRef}
            isMsgLoading={isMsgLoading}
          />
          <Footer
            inputMsg={msgInput}
            onInput={changeMsgInput}
            addEmoji={addEmoji}
            isEmojiPickerVisible={isEmojiPickerVisible}
            toggleEmojiPicker={toggleEmojiPicker}
            addMessage={addMessage}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ sidebarReducer, messageReducer }) => {
  return {
    selectedThread: sidebarReducer.selectedThread,
    ...messageReducer
  };
};

const mapDispatchToProps = {
  changeMsgInput,
  addEmoji,
  toggleEmojiPicker,
  addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
