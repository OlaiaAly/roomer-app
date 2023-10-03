import * as React from 'react';
import { useApi }  from '../../hooks/useApi';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null);
    const [logged, setLogged] = React.useState(false);

    const api = useApi();

   const signin = async (email , senha) => {
       const resUser = await api.signin(email, senha);

       if(resUser){
            setUser({
                'name':resUser.name,
                'email': resUser.email, 
                'telephone':resUser.telephone
            });

            setLogged(true);

            return true;
        }
        
        return false;
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
        <AuthContext.Provider value={{user, logged,signin, logout, xlogout}}>
            {children}
        </AuthContext.Provider>
    );
}