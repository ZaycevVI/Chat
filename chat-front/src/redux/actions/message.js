import * as messageCreator from "creators/message";
import chatService from "services/chat-service";

export const changeMsgInput = value => dispatch =>
  dispatch(messageCreator.changeMsgInputCreator(value));

export const changeMessages = () => dispatch => {
  dispatch(messageCreator.startChangeMessageCreator());

  return chatService.getMessages().then(messages => {
    dispatch(messageCreator.endChangeMessageCreator(messages));
  });
};

export const addEmoji = emoji => dispatch =>
  dispatch(messageCreator.addEmojiCreator(emoji));

export const toggleEmojiPicker = () => dispatch =>
  dispatch(messageCreator.toggleEmojiPickerCreator());

export const addMessage = message => dispatch =>
  dispatch(messageCreator.addMessageCreator(message));
