import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import env from "react-dotenv";

// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// API
import {AuthContext} from '../../../contexts/Auth/AuthContext';

// components
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [authValues, setAuthValues ]= useState(initializeAuthValues);


  function initializeAuthValues(){
    return {email:'', password:''};
  }
  
  const onChangeAuthValues = (event) => {
    const {value, name} = event.target;
    setAuthValues({
      ...authValues,
      [name]: value,   
    })
  }


  const handleClick = async  (e) => {
    e.preventDefault();
    if(authValues.email && authValues.password){
        // const isLogged = await auth.signin(authValues.email, authValues.password);
        const res = await auth.xlogout();


      console.log(res);
        
        // if(isLogged){
          // navigate('/dashboard', { replace: true });
        // }
    }
  };
  
  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="E-mail" onChange={(e) => onChangeAuthValues(e)} value={authValues.email}/>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => onChangeAuthValues(e)} value={authValues.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Esqueci o password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Entrar
      </LoadingButton>
    </>
  );
}
