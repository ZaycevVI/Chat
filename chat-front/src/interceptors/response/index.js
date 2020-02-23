import {addError} from 'actions/error';

export const errorHandler = store => error => {
    const response = error.response;
    let errorNotification = {};
    if(response && response.data) {
        errorNotification.description = JSON.stringify(response.data)
    }

    errorNotification.message = error.message;
    errorNotification.description = errorNotification.description || 'Unexpected error occur.';
    
    addError(errorNotification)(store.dispatch);

  return Promise.reject({ ...error });
};

export const successHandler = store => response => response;
