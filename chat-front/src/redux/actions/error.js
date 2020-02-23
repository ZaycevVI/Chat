import * as errorCreator from "creators/error";

export const addError = error => dispatch =>
  dispatch(errorCreator.addErrorCreator(error));

export const clearErrors = () => dispatch =>
  dispatch(errorCreator.clearErrorsCreator());
