import { FETCH_USER_INFO_SUCCESS } from '../actions/userprofile';

const userProfile = (state={}, action) => {
    switch(action.type){
        case 'FETCH_USER_INFO_SUCCESS':
            return{
                ...state,
                user: [action.payload.user]
            }
        default:
            return {
                ...state
            }
    }

}

export default userProfile;