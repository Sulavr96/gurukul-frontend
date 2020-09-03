import api from '../api';
import { compose } from 'redux';

const noticeFetchSuccess = notice => {
    return {
        type: 'NOTICE_FETCH_SUCCESS',
        payload: {
            notice
        }
        
    }
}

const noticeCreateSuccess = notice => {
    return {
        type: 'NOTICE_CREATE_SUCCESS',
        payload: {
            notice
        }
    }
}

const noticeEditSuccess = notice => {
    return {
        type: 'NOTICE_EDIT_SUCCESS',
        payload: {
            notice
        }
    }
}

const noticeDeleteSuccess = notice => {
    return {
        type: 'NOTICE_DELETE_SUCCESS',
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

export const noticeCreate = (notice) =>
    dispatch => {
        api.post('/notices/', notice)
        .then(response => {
            dispatch(noticeCreateSuccess(response.data))
        })
        .catch(errors => {
            console.log(errors)
        })
    }

export const noticeEdit = (id, notice) =>
    dispatch => {
        api.put('/notices/'+id+'/', notice)
        .then(response => {
            dispatch(noticeEditSuccess(response.data))
        })
        .catch(errors=> {
            console.log(errors)
        })
    }

export const  noticeObjectFetch = (id) =>
    dispatch => {
        api.get('/notices/notice/'+id+'/', id)
        .then(response => {
            dispatch(noticeFetchSuccess(response.data))
        })
        .catch(errors => {
            console.log(errors)
        })
    }

export const noticeDelete = (id) =>
    dispatch => {
        api.delete('/notices/'+id+'/', id)
        .then(response => {
            dispatch(noticeDeleteSuccess(response.data))
        })
        .catch(errors => {
            console.log(errors)     
        })
    }