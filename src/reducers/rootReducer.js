import { combineReducers } from 'redux';
import auth from "../reducers/auth";
import userprofile from "../reducers/userprofile"; 

export default combineReducers({
   auth, userprofile
});