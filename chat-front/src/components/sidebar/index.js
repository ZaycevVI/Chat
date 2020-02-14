import React, { useEffect } from "react";
import DialogItems from "components/dialog-items";
import { Icon, Input, Spin } from "antd";
import "./style.scss";
import { connect } from "react-redux";
import {
  initializeDialogs,
  changeSearchInput,
  searchDialogs,
  changeDialogThread
} from "actions/sidebar";

const { Search } = Input;

function SideBar({
  searchValue,
  dialogs,
  filteredDialogs,
  initializeDialogs,
  selectedThread,
  isDialogListLoading,
  searchDialogs,
  changeSearchInput,
  changeDialogThread
}) {
  useEffect(() => {
    dialogs && dialogs.length === 0 && initializeDialogs();
  }, [dialogs]);

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
          onChange={changeSearchInput}
          placeholder="Search dialog threads"
          onSearch={searchDialogs}
        />
      </div>
      <div className="chat__sidebar-dialogs">
        {isDialogListLoading ? (
          <Spin tip="Loading..." />
        ) : (
          <DialogItems
            dialogs={filteredDialogs}
            selectedThread={selectedThread}
            onClick={changeDialogThread}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ sidebarReducer }) => {
  return {
    ...sidebarReducer
  };
};

const mapDispatchToProps = {
  initializeDialogs,
  changeSearchInput: ({ currentTarget: { value } }) => changeSearchInput(value),
  searchDialogs: searchDialogs,
  changeDialogThread
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
