import { EventApi } from '../api/Event';

export const REQUEST_SIGN_UP_TO_EVENT = 'REQUEST_SIGN_UP_TO_EVENT';
export const SIGN_UP_SUCCESSFULL = 'SIGN_UP_SUCCESSFULL';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';


const eventApi = new EventApi();

export const requestSignUpToEvent = () => {
  return {
    type: REQUEST_SIGN_UP_TO_EVENT
  };
};

export const signUpSuccessful = (signedUser) => {
  return {
    type: SIGN_UP_SUCCESSFULL,
    payload: signedUser,
  };
}

export const signUpFailed = (message) => {
  return {
    type: SIGN_UP_FAILED,
    payload: message,
  };
};

export const signUpUser = (user) => async (dispatch) => {
  dispatch(requestSignUpToEvent());
  try {
    const response = await eventApi.signUp(user);
    return response;
  } catch (error) {
    return error;
  }
}

