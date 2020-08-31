const notice = (state={}, action) => {
    switch(action.type) {
        case 'NOTICE_FETCH_SUCCESS':
            return{
                ...state,
                notice : [action.payload.notice]
            }
        default:
            return{
                ...state
            }
    }
}

export default notice;
