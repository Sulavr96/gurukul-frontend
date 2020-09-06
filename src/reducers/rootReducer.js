import { combineReducers } from 'redux';
import auth from "../reducers/auth";
import userProfile from "../reducers/userprofile"; 
import notice from "../reducers/notice";
import teacher from "../reducers/teacher";
import assignmentInfo from "../reducers/assignment";
import resourceInfo from "../reducers/resource";

export default combineReducers({
   auth, userProfile, notice, teacher, assignmentInfo, resourceInfo
});