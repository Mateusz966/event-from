import { combineReducers } from "redux";
import EventReducer from '../reducers/EventForm.reducers';


export const rootReducer = combineReducers({
  events: EventReducer,
});
