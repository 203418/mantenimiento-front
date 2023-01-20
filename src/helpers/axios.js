import axios from 'axios';

const auth = 'Bearer ' + localStorage.getItem('accessToken');

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Content-type': 'application/json',
        Authorization: auth ? auth: '',
    }
});