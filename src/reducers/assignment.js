import {CREATE_TEACHER_ASSIGNMENT_SUCCESS, FETCH_TEACHER_ASSIGNMENT_SUCCESS, UPDATE_TEACHER_ASSIGNMENT_SUCCESS, DELETE_TEACHER_ASSIGNMENT_SUCCESS} from '../actions/assignment';

const assignmentInfo = (state={}, action) => {
    switch(action.type){
        case CREATE_TEACHER_ASSIGNMENT_SUCCESS:
            return{
                ...state,
                assignment: [...state.payload.assignment, action.payload.assignment]
            }
        case FETCH_TEACHER_ASSIGNMENT_SUCCESS:
            return{
                ...state,
                assignment: action.payload.assignment
            }
        case UPDATE_TEACHER_ASSIGNMENT_SUCCESS:
            return{
                ...state,
                assignment : { [action.payload.id]: action.assignment, ...state.payload.assignment},
            }
        case DELETE_TEACHER_ASSIGNMENT_SUCCESS:
            const { [action.payload.id]: objectToRemove, ...remaining } = state.payload.assignment;
            return{
                ...state,
                assignment : remaining
            }
        default:
            return {
            ...state
            }
        }
    }

export default assignmentInfo;