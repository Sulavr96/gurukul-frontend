const instructorRequest = (state={}, action) => {
    switch(action.type) {
        case 'INSTRUCTOR_REQUEST_CREATE_SUCCESS':
            return{
                ...state,
                instructor_request: [...state.payload.instructor_request, action.payload.instructor_request]
            }
        default:
            return{
                ...state
            }
        }
    }

export default instructorRequest;