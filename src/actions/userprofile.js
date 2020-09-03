import api from "../api";

export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';

const getUserInfoSuccess = user => {
    return{
        type: FETCH_USER_INFO_SUCCESS,
        payload: {
            user
        }
    }
}

const updateUserInfoSuccess = user => {
    return{
        type: UPDATE_USER_INFO_SUCCESS,
        payload: {
            user
        }
    }
}

export const getuserInfo = id => dispatch => {
    api.get('/user/'+id+'/', id )
        .then(response =>{            
            dispatch(getUserInfoSuccess(response.data))
        })
        .catch(error =>{
            console.log(error)
        })
}

export const updateUserInfo = (id, userInfo) => dispatch => {
    api.put('/user/'+id+'/', userInfo)
        .then(response =>{
            dispatch(updateUserInfoSuccess(response))
        })
        .catch(error=>{
            console.log(error)
        })
}