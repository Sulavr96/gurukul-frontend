import { combineReducers } from 'redux';
import auth from "../reducers/auth";
import userProfile from "../reducers/userprofile"; 
import notice from "../reducers/notice";

export default combineReducers({
   auth, userProfile, notice 
});