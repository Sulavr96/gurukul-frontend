const auth = (state={}, action) => {
    switch(action.type){
        case 'USER_LOGIN_REQUEST':
            return{
                ...state,
                user: [action.payload.user]
            }
        case 'USER_REGISTRATION_SUCCESS':
            return{
                ...state,
                user: [...state.payload.user, action.payload.user]
            }
        default:
            return {
                ...state
            }
    }

}

export default auth;