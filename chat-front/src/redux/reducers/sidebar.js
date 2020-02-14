const initState = {
  dialogs: [],
  filteredDialogs: [],
  selectedThread: null,
  searchValue: "",
  isDialogListLoading: false
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case CONSTANT.START_DIALOG_LIST_INITIALIZE:
      return {
        ...state,
        isDialogListLoading: true
      };
    case CONSTANT.END_DIALOG_LIST_INITIALIZE:
      return {
        ...state,
        dialogs: payload,
        filteredDialogs: payload,
        isDialogListLoading: false
      };
    case CONSTANT.SEARCH_VALUE_CHANGED:
      return {
        ...state,
        searchValue: payload
      };
    case CONSTANT.SEARCH_INPUT_CLICKED: {
      const filteredDialogs = state.dialogs.filter(d =>
        d.user.name.toLowerCase().includes(payload.toLowerCase())
      );

      return {
        ...state,
        filteredDialogs: filteredDialogs
      };
    }
    case CONSTANT.DIALOG_ITEM_CHANGED:
      return {
        ...state,
        selectedThread: state.dialogs.find(d => d.user._id === payload)
      };
    default:
      return state;
  }
};

export const CONSTANT = {
  START_DIALOG_LIST_INITIALIZE: "START_DIALOG_LIST_INITIALIZE",
  END_DIALOG_LIST_INITIALIZE: "END_DIALOG_LIST_INITIALIZE",
  SEARCH_VALUE_CHANGED: "SEARCH_VALUE_CHANGED",
  SEARCH_INPUT_CLICKED: "SEARCH_INPUT_CLICKED",
  DIALOG_ITEM_CHANGED: "DIALOG_ITEM_CHANGED"
};
