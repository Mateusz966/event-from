import { 
  REQUEST_SIGN_UP_TO_EVENT,
  SIGN_UP_SUCCESSFULL,  
  SIGN_UP_FAILED 
} from '../actions/event.actions';

export default (
  state = {
    signedUpUsers: [],
    inProgress: false,
  }, 
  action
) => {
  switch (action.type) {
    case REQUEST_SIGN_UP_TO_EVENT:
      return {
        ...state,
        inProgress: true,
      }
    case SIGN_UP_SUCCESSFULL:
      return {
        ...state,
        inProgress: false,
        signedUpUsers: [action.payload, ...state.signedUpUsers]
      }
    case SIGN_UP_FAILED:
      return {
        ...state,
        inProgress: true,
      }
    default:
      return {
        ...state
      }
  }
}