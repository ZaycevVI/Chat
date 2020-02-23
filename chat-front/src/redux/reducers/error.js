const initialState = {
  errors: [] // [{description, message}]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONSTANT.ERROR_ADD:
      return { ...state, errors: [...state.errors, payload] };
    case CONSTANT.ERROR_CLEAR:
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export const CONSTANT = {
  ERROR_ADD: "ERROR_ADD",
  ERROR_CLEAR: "ERROR_CLEAR"
};
