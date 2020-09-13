import api from '../api';

const instructorRequestCreateSuccess = instructor_request => {
    return {
        type: 'INSTRUCTOR_REQUEST_CREATE_SUCCESS',
        payload: {
            instructor_request
        }
    }
}

// export const instructorRequestCreate = (instructor_request) => {
//     dispatch => {
//         api.post('user/instructor-request/', instructor_request)
//         .then(response => {
//             dispatch(instructorRequestCreateSuccess(response.data))
//         })
//         .catch(errors=> {
//             console.log(errors)
//         })
//     }
// }
