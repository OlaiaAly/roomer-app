import axios from 'axios';

axios.defaults.withCredentials= true;

const api = axios.create({
    baseURL: 'http://localhost:8000/api',  
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        // 'Authentication': 'Bearer 5|C6ixV0seUvO0uLjK9bnBv1I9zsuftcpPUfuyBN9d4f3cb505'
    }

});



export  const useApi = () => ({
    validateToken: async (token) => {
        const response = await api.post('/validate', {token}, {'Access-Control-Allow-Origin' :  '*'});
        return response.data;
    },

    // LOG IN
    signin: async (email, password) => {


        await api.get('../sanctum/csrf-cookie').then(response => {
            // Login...
        });

        const res =  await api.post('/auth/students',
            {email, password}
        );

        if(res && res.status === 201){
            
            // GETTING THE TOKEN
            const token = JSON.stringify(res.data.token);             
            localStorage.setItem('token_auth', token);      
            
            // RETURNING THE USER
            return (res.data.user);
        }

        return null;     
    },

    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    },

    xlogout: async () => {

    let data =[];
        try{
        // console.log('ALY');
        // console.log(process.env.REACT_APP_API_BASE_URL);
        // axios.defaults.withCredentials= true;

        const response = await api.post('/auth/login', JSON.stringify({
            email:"tinovambo@gmail.com",
            password:"tinovambo@gmail.com"
           }));
            
        //    const response = await api.get('/users');
             console.log(response.data);
             console.log(response.status);
             console.log(response.statusText);

             data = response;
             return response.data;
        }
        catch(err){
            console.log(err);
        }
       
        return data;
    }
});