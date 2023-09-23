import * as React from 'react';
import { useApi }  from '../../hooks/useApi';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null);


    const api = useApi();


 

   const signin = async (email , senha) => {
        const data = await api.signin(email, senha);
        if(data.user  && data.token ){
            setUser(data.token)
            return true;
        }
        return false;
   } 

   const signout = async () => { 
        await api.logout();
        setUser(null);
   }


   const sxlogout = async () => { 
    await api.xlogout();
    setUser(null);
}



    return (
        <AuthContext.Provider value={{user, signin, signout, sxlogout}}>
            {children}
        </AuthContext.Provider>
    )
}