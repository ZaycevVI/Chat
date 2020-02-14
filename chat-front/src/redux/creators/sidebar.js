import { CONSTANT as SB_CONSTANT } from "reducers/sidebar";

export const startDialogListInitializeCreator = () => {
  return {
    type: SB_CONSTANT.START_DIALOG_LIST_INITIALIZE,
  };
};

export const endDialogListInitializeCreator = dialogs => {
  return {
    type: SB_CONSTANT.END_DIALOG_LIST_INITIALIZE,
    payload: dialogs
  };
};

export const changeSearchInputCreator = value => {
  return {
    type: SB_CONSTANT.SEARCH_VALUE_CHANGED,
    payload: value
  };
};

export const searchDialogsCreator = value => {
  return {
    type: SB_CONSTANT.SEARCH_INPUT_CLICKED,
    payload: value
  };
};

export const changeDialogThreadCreator = id => {
  return {
    type: SB_CONSTANT.DIALOG_ITEM_CHANGED,
    payload: id
  };
};