import api from "../api";
import {successToaster, failureToaster} from "../../src/components/common/toaster";
import { ToastContainer, toast } from "react-toastify";

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
            api.post('/user/login/', user )        
            .then(response =>{
                const { token } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem("userId",response.data.user_id)
                successToaster()
                dispatch(loginSuccess(response.data))
            })
            .catch(error =>{
                console.log(error)
                if(error){
                    failureToaster()
                }
            })
    }