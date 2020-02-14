import React from "react";
import { Icon } from "antd";
import classNames from "classnames";
import "./style.scss";

function ChatContentHeader({ selectedUser }) {
  return (
    <div className="chat__content-header">
      {selectedUser && (
        <>
          <div className="chat__content-user">
            <div className="chat__content-user-name">{selectedUser.name}</div>
            <div
              className={classNames("chat__content-user-status", {
                "chat__content-user-status--online": selectedUser.isOnline
              })}
            >
              {selectedUser.isOnline ? "Online" : "Offline"}
            </div>
          </div>
          <Icon type="ellipsis" style={{ fontSize: "20px" }} />
        </>
      )}
    </div>
  );
}

export default ChatContentHeader;
