import chatService from "services/chat-service";
import * as sidebarCreator from 'creators/sidebar';
import {changeMessages} from 'actions/message';

export const initializeDialogs = () => dispatch => {
  dispatch(sidebarCreator.startDialogListInitializeCreator());

  chatService.getDialogs().then(dialogs => {
    dispatch(sidebarCreator.endDialogListInitializeCreator(dialogs));
  });
};

export const changeDialogThread = id => dispatch => {
  dispatch(sidebarCreator.changeDialogThreadCreator(id));
  changeMessages()(dispatch);
};

export const changeSearchInput = value => dispatch => dispatch(sidebarCreator.changeSearchInputCreator(value))

export const searchDialogs = value => dispatch => dispatch(sidebarCreator.searchDialogsCreator(value))
