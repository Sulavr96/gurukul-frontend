import api from "../api";

export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';

const getUserInfoSuccess = user => {
    return{
        type: FETCH_USER_INFO_SUCCESS,
        payload: {
            user
        }
    }
}

export const getuserInfo = (id) =>
    dispatch => {
        api.get('/user/'+id, id )
            .then(response =>{     
                console.log(response,'########')          
                dispatch(getUserInfoSuccess(response.data))
            })
            .catch(error =>{
                console.log(error)
            })
    }