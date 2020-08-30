import { FETCH_USER_INFO_SUCCESS, UPDATE_USER_INFO_SUCCESS } from '../actions/userprofile';

const userProfile = (state={}, action) => {
    switch(action.type){
        case FETCH_USER_INFO_SUCCESS:
            return{
                ...state,
                user: [action.payload.user]
            }
        case UPDATE_USER_INFO_SUCCESS:
            return{
                ...state,
                user : { [action.payload.id]: action.user, ...state.user }
            }
        default:
            return {
                ...state
            }
    }

}

export default userProfile;