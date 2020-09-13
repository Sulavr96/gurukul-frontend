
const notice = (state={}, action) => {
    switch(action.type) {
        case 'NOTICE_FETCH_SUCCESS':
            return{
                ...state,
                notice : action.payload.notice
            }
        case 'NOTICE_CREATE_SUCCESS':
            return {
                ...state,
                notice: [...state.payload.notice, action.payload.notice]
            }
        case 'NOTICE_EDIT_SUCCESS':
            return {
                ...state,
              notice: { [action.payload.id]: action.payload.notice, ...state.payload.notice } 
            }
        default:
            return{
                ...state
            }
    }
}

export default notice;
