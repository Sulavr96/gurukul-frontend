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
        api.post('/user/login/', user )        
            .then(response =>{
                const { token } = response.data;
                localStorage.setItem('token', token);
                dispatch(loginSuccess(response.data))
            })
            .catch(error =>{
                console.log(error)
            })
    }