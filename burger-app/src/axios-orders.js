import axios from 'axios';

const instance = axios.create({
    baseURL: '****FIREBASE URL HERE'
});

export default instance;