import { FETCH_COURSE_SUCCESS} from '../actions/teacher';

const teacher = (state={}, action) => {
    switch(action.type){
        case FETCH_COURSE_SUCCESS:
            return{
                ...state,
                course: action.payload.course
            }
        // case UPDATE_USER_INFO_SUCCESS:
        //     return{
        //         ...state,
        //         user : {[action.payload.id]: action.payload.user, ...state.payload.user }
        //     }
        default:
            return {
                ...state
            }
    }

}

export default teacher;