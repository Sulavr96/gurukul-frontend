import {CREATE_TEACHER_RESOURCES_SUCCESS, FETCH_TEACHER_RESOURCES_SUCCESS, UPDATE_TEACHER_RESOURCES_SUCCESS, DELETE_TEACHER_RESOURCES_SUCCESS} from '../actions/resources';

const resourceInfo = (state={}, action) => {
    switch(action.type){
        case CREATE_TEACHER_RESOURCES_SUCCESS:
            return{
                ...state,
                resources: [...state.payload.resources, action.payload.resources]
            }
        case FETCH_TEACHER_RESOURCES_SUCCESS:
            return{
                ...state,
                resources: action.payload.resources
            }
        case UPDATE_TEACHER_RESOURCES_SUCCESS:
            return{
                ...state,
                resources : { [action.payload.id]: action.product, ...state.payload.resources},
            }
        case DELETE_TEACHER_RESOURCES_SUCCESS:
            const { [action.payload.id]: objectToRemove, ...remaining } = state.payload.resources;
            return{
                ...state,
                resources : remaining
            }
        default:
            return {
            ...state
            }
        }
    }

export default resourceInfo;