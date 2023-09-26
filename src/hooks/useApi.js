import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_BASE
});

export  const useApi = () => ({
    validateToken: async (token) => {
        const response = await api.post('/validate', {token});
        return response.data;
    },
    signin: async (email, password) => {
        // console.log(process.env.API_BASE_URL);
        const response = await api.post('',
            {email, password}
        );

        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
    xlogout: async () => {
        const response = await api.get('/');

        return response.data;
    }

});