import api from "../api";

export const CREATE_TEACHER_ASSIGNMENT_SUCCESS = 'CREATE_TEACHER_ASSIGNMENT_SUCCESS';
export const FETCH_TEACHER_ASSIGNMENT_SUCCESS = 'FETCH_TEACHER_ASSIGNMENT_SUCCESS';
export const UPDATE_TEACHER_ASSIGNMENT_SUCCESS = 'UPDATE_TEACHER_ASSIGNMENT_SUCCESS';
export const DELETE_TEACHER_ASSIGNMENT_SUCCESS = 'DELETE_TEACHER_ASSIGNMENT_SUCCESS';

const createTeacherAssignmentSuccess = assignment => {
    return{
        type: CREATE_TEACHER_ASSIGNMENT_SUCCESS,
        payload: {
            assignment
        }
    }
}

const getTeacherAssignmentSuccess = assignment => {
    return{
        type: FETCH_TEACHER_ASSIGNMENT_SUCCESS,
        payload: {
            assignment
        }
    }
}

const updateTeacherAssignmentSuccess = assignment => {
    return{
        type: UPDATE_TEACHER_ASSIGNMENT_SUCCESS,
        payload: {
            assignment
        }
    }
}

const deleteTeacherAssignmentSuccess = assignment => {
    return{
        type: DELETE_TEACHER_ASSIGNMENT_SUCCESS,
        payload: {
            assignment
        }
    }
}

export const postTeacherAssignment = assignment => dispatch => {
    api.put('/assignments/', assignment)
        .then(response =>{
            dispatch(createTeacherAssignmentSuccess(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
}

export const getTeacherAssignment = id => dispatch => {
    api.get('/assignments/'+id+'/', id )
        .then(response =>{            
            dispatch(getTeacherAssignmentSuccess(response.data))
        })
        .catch(error =>{
            console.log(error)
        })
}

export const updateTeacherAssignment = (id, assignment) => dispatch => {
    api.put('/assignments/'+id+'/', assignment)
        .then(response =>{
            dispatch(updateTeacherAssignmentSuccess(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
}

export const deleteTeacherAssignment = (id) => dispatch => {
    api.put('/assignments/'+id+'/')
        .then(response =>{
            dispatch(deleteTeacherAssignmentSuccess(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
}