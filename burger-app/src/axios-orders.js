import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-f6e19.firebaseio.com/'
    //baseURL: '********ADD FIREBASE URL HERE************'
});

export default instance;