import React, { useState } from "react";
import "./style.scss";
import { Icon, Input, Empty } from "antd";
import TextMsg from "components/message/text";
import messagesJson from "../../fake/messages.json";
import dialogsJson from "../../fake/dialogs.json";
import SideBar from "components/sidebar";
import Header from "components/chat-content-header";
import Content from "components/chat-content-message";
import Footer from "components/chat-content-footer";

function Chat() {
  const [inputMsg, setInputMsg] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [messages, setMessages] = useState([]);
  const [dialogs, setDialogs] = useState(dialogsJson);

  const [selectedUser, setSelectedUser] = useState({
    _id: "5e4280031141bb2f4db9eb10",
    name: "Napoleon Bonapart",
    isOnline: false
  });

  const onSearchClick = value => {
    const filtered = dialogsJson.filter(d =>
      d.user.name.toLowerCase().includes(value.toLowerCase())
    );
    setDialogs(filtered);
  };

  const onSearchChange = ({ currentTarget: { value } }) =>
    setSearchValue(value);

  const onDialogItemClick = user => {
    setMessages(messagesJson);
    setSelectedUser(user);
  };

  const onMsgInputChange = ({ currentTarget: { value } }) => setInputMsg(value);

  return (
    <div className="chat__block">
      <div className="chat">
        <SideBar
          searchValue={searchValue}
          dialogs={dialogs}
          selectedUser={selectedUser}
          onSearchClick={onSearchClick}
          onSearchChange={onSearchChange}
          onDialogItemClick={onDialogItemClick}
        />
        <div className="chat__content">
          <Header selectedUser={selectedUser} />
          <Content messages={messages} />
          <Footer inputMsg={inputMsg} onInput={onMsgInputChange} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
