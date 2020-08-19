import api from "../api";

const loginSuccess = user => {
    return{
        type: 'USER_LOGIN_SUCCESS',
        payload: {
            user
        }
    }
}

export const userLogin = (user) =>
    dispatch => {
        console.log(user)
        api.post('/auth/login', user )
            .then(response =>{
                dispatch(loginSuccess(response.data))
            })
            .catch(error =>{
                console.log(error)
            })
    }