import React from "react";
import DialogItems from "components/dialog-items";
import { Icon, Input } from "antd";
import './style.scss'

const { Search } = Input;

function SideBar({
  searchValue,
  dialogs,
  selectedUser,
  onSearchClick,
  onSearchChange,
  onDialogItemClick
}) {
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div className="chat__sidebar-teams">
          <Icon type="team" />
          <span>Dialog List</span>
        </div>
        <Icon type="form" />
      </div>
      <div className="chat__sidebar-search">
        <Search
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Search dialog threads"
          onSearch={onSearchClick}
        />
      </div>
      <div className="chat__sidebar-dialogs">
        <DialogItems
          dialogs={dialogs}
          selectedUser={selectedUser}
          onClick={onDialogItemClick}
        />
      </div>
    </div>
  );
}

export default SideBar;
