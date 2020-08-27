import axios from 'axios';
import config from './config';

const api = axios.create({
    baseURL: config.backendURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    return config;
})

api.interceptors.response.use(response => {
        if (response && response.headers && response.headers.authorization) {
            localStorage.setItem('token', response.headers.authorization);
        }
        return response;
    }, error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('profile');
        }
        return Promise.reject(error);
    }
)

export default api;