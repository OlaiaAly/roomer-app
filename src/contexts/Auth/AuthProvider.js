import * as React from 'react';
import { useApi }  from '../../hooks/useApi';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState();

    const api = useApi();

   const signin = async (email , senha) => {
       const res = await api.signin(email, senha);
        // setUser({ res.user.name, res.user.email})
        console.log(user);
   };
    

   const logout = async () => { 
        await api.logout();
        setUser(null);
    };

    const xlogout = async () => { 
        await api.xlogout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, signin, logout, xlogout}}>
            {children}
        </AuthContext.Provider>
    );
}