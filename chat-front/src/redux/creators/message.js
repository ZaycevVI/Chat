import { CONSTANT as MSG_CONSTANT } from "reducers/message";

export const startChangeMessageCreator = () => {
  return {
    type: MSG_CONSTANT.START_MESSAGE_REQUEST
  };
};

export const endChangeMessageCreator = messages => {
  return {
    type: MSG_CONSTANT.END_MESSAGE_REQUEST,
    payload: messages
  };
};

export const changeMsgInputCreator = value => {
  return {
    type: MSG_CONSTANT.MESSAGE_INPUT_CHANGE,
    payload: value
  };
};

export const addEmojiCreator = emoji => {
  return {
    type: MSG_CONSTANT.ADD_EMOJI_CREATOR,
    payload: emoji
  };
};

export const toggleEmojiPickerCreator = () => {
  return {
    type: MSG_CONSTANT.TOGGLE_EMOJI_PICKER,
  };
};

export const addMessageCreator = message => {
  return {
    type: MSG_CONSTANT.MESSAGE_SUBMIT,
    payload: message
  };
};