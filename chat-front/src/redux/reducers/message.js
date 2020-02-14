const initState = {
  isMsgLoading: false,
  messages: [],
  msgInput: "",
  isEmojiPickerVisible: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CONSTANT.START_MESSAGE_REQUEST:
      return {
        ...state,
        isMsgLoading: true
      };
    case CONSTANT.END_MESSAGE_REQUEST:
      return {
        ...state,
        isMsgLoading: false,
        messages: payload
      };
    case CONSTANT.MESSAGE_INPUT_CHANGE:
      return {
        ...state,
        msgInput: payload
      };
    case CONSTANT.ADD_EMOJI_CREATOR:
      return {
        ...state,
        msgInput: state.msgInput + payload
      };
    case CONSTANT.TOGGLE_EMOJI_PICKER:
      return {
        ...state,
        isEmojiPickerVisible: !state.isEmojiPickerVisible 
      };
    case CONSTANT.MESSAGE_SUBMIT:
      return {
        ...state,
        messages: [...state.messages, payload] 
      };

    default:
      return state;
  }
};

export const CONSTANT = {
  START_MESSAGE_REQUEST: "START_MESSAGE_REQUEST",
  END_MESSAGE_REQUEST: "END_MESSAGE_REQUEST",
  MESSAGE_INPUT_CHANGE: "MESSAGE_INPUT_CHANGE",
  SCROLL_TO_BOTTOM: "SCROLL_TO_BOTTOM",
  ADD_EMOJI_CREATOR: "ADD_EMOJI_CREATOR",
  TOGGLE_EMOJI_PICKER: "TOGGLE_EMOJI_PICKER",
  MESSAGE_SUBMIT: "MESSAGE_SUBMIT",
};
