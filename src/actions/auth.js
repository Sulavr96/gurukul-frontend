import api from "../api";

const regristrationSuccess = user => {
    return{
        type: 'USER_REGISTRATION_SUCCESS',
        payload:{
            user
        }
    }
}

const loginSuccess = user => {
    return{
        type: 'USER_LOGIN_SUCCESS',
        payload: {
            user
        }
    }
}

export const userRegister = (user) =>
    dispatch => {
        api.post('/user/register/', user )
            .then(response =>{
                dispatch(loginSuccess(response.data))
                
            })
            .catch(error =>{
                console.log(error)
            })
    }

export const userLogin = (user) =>
    dispatch => {
        console.log(user)
            api.post('/user/login/', user )        
            .then(response =>{
                const { token } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem("userId",response.data.user_id)
                dispatch(loginSuccess(response.data))
            })
            .catch(error =>{
                console.log(error)
            })
    }