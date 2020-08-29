import { combineReducers } from 'redux';
import auth from "../reducers/auth";
import userProfile from "../reducers/userprofile"; 

export default combineReducers({
   auth, userProfile
});