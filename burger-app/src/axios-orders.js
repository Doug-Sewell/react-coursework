import axios from 'axios';

const instance = axios.create({
    baseURL: '********ADD FIREBASE URL HERE************'
});

export default instance;