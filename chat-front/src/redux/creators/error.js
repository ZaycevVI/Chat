import { CONSTANT as ERROR_CONSTANT } from "reducers/error";

export const addErrorCreator = (error) => {
  return {
    type: ERROR_CONSTANT.ERROR_ADD,
    payload: error
  };
};

export const clearErrorsCreator = () => {
    return {
      type: ERROR_CONSTANT.ERROR_CLEAR,
    };
  };