import { combineReducers } from 'redux';
import auth from "../reducers/auth";
import notice from "../reducers/notice";

export default combineReducers({
   auth,
   notice
});