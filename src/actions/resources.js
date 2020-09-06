import api from "../api";

export const CREATE_TEACHER_RESOURCES_SUCCESS = 'CREATE_TEACHER_RESOURCES_SUCCESS';
export const FETCH_TEACHER_RESOURCES_SUCCESS = 'FETCH_TEACHER_RESOURCES_SUCCESS';
export const UPDATE_TEACHER_RESOURCES_SUCCESS = 'UPDATE_TEACHER_RESOURCES_SUCCESS';
export const DELETE_TEACHER_RESOURCES_SUCCESS = 'DELETE_TEACHER_RESOURCES_SUCCESS';

const createTeacherResourceSuccess = resources => {
    return{
        type: CREATE_TEACHER_RESOURCES_SUCCESS,
        payload: {
            resources
        }
    }
}

const getTeacherResourcesSuccess = resources => {
    return{
        type: FETCH_TEACHER_RESOURCES_SUCCESS,
        payload: {
            resources
        }
    }
}

const updateTeacherResourceSuccess = resources => {
    return{
        type: UPDATE_TEACHER_RESOURCES_SUCCESS,
        payload: {
            resources
        }
    }
}

const deleteTeacherResourceSuccess = resources => {
    return{
        type: DELETE_TEACHER_RESOURCES_SUCCESS,
        payload: {
            resources
        }
    }
}

export const postTeacherResource = resources => dispatch => {
    api.post('/resources/', resources)
        .then(response =>{
            dispatch(createTeacherResourceSuccess(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
}

export const getTeacherResources = id => dispatch => {
    api.get('/resources/'+id+'/', id )
        .then(response =>{            
            dispatch(getTeacherResourcesSuccess(response.data))
        })
        .catch(error =>{
            console.log(error)
        })
}

export const updateTeacherResource = (id, resources) => dispatch => {
    api.put('/resources/'+id+'/', resources)
        .then(response =>{
            dispatch(updateTeacherResourceSuccess(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
}

export const deleteTeacherResource = id => dispatch => {
    api.put('/resources/'+id+'/')
        .then(response =>{
            dispatch(deleteTeacherResourceSuccess(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
}