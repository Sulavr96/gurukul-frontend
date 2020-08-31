import api from '../api';

const noticeFetchSuccess = notice => {
    return {
        type: 'NOTICE_FETCH_SUCCESS',
        payload: {
            notice
        }
        
    }
}

export const noticeFetch = _ =>
    dispatch => {
        api.get('/notices/')
            .then(response => {
                dispatch(noticeFetchSuccess(response.data))
            })
            .catch(errors => {
                console.log(errors)
            })
    }
