import api from '../api';

export const FETCH_COURSE_SUCCESS = 'FETCH_COURSE_SUCCESS';

const fetchCourseSuccess = course => {
    return {
        type: FETCH_COURSE_SUCCESS,
        payload: {
            course
        }
    }
}

export const fetchCourse = _ =>
    dispatch => {
        api.get('/courses/')
            .then(response => {
                dispatch(fetchCourseSuccess(response.data))
            })
            .catch(errors => {
                console.log(errors)
            })
    }
