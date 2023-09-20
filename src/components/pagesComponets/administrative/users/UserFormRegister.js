
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


// @mui
import {Stack, FormControl, TextField, Divider , Box, Typography, Button, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import {Save, CloudUpload} from '@mui/icons-material';

// From ButtonsMine
// import BasicSelect from '../../geral/ButtonsMine';



export const  UserFormRegister = () => {

    const navigate = useNavigate();

  
  
    const handleClick = () => {
      navigate('/dashboard', { replace: true });
    };

    
    const userType = [
        {nome : "Simples", valor : "user"},
        {nome : "Administrador", valor : "admin"},
    ];

    const userGender = [
        {nome : "Masculino", valor : "M"},
        {nome : "Feminino", valor : "F"},
    ];
  
    return (
        <Stack m={5}>

            <Helmet>
                <title> Usuário &gt; Registar | Minimal UI </title>
            </Helmet>

            <Typography variant="h3" sx={{ mb: 1 }}>
                Registar Novo Usuário                
            </Typography>
            
            <Typography  m={1}> 
                Tipo de Usuário do Sistema
            </Typography>
            {/* <BasicSelect arrayValues={userType} label="Tipo"/> */}
          


            <Divider sx={{ mt: 3 }}/>

            <Typography  my={2}>
                Informações pessoais
            </Typography>

            <Stack direction="row" spacing={3} mb={3}>

                <TextField name="code" label="Codigo" variant='standard' disabled/> <br/>
                
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField name="fulname" label="Nome Completo" required/>
                </FormControl>

            </Stack> 

            <Divider/>
            
            <Stack direction="row" spacing={3} my={3}>

                <TextField name="bi" label="Numero de BI" />

                <TextField name="#" label="Numero de NUIT" />

                {/* <BasicSelect arrayValues={userGender} label="Sexo"/> */}

            </Stack>

            <Divider/>

            <Typography  mt={2}>
                        Contactos
            </Typography>
           
            <Stack direction="row" spacing={3} my={3}>

                <TextField name="phone1" label="Nr. de Telemovel" />
                <TextField name="phone2" label="Nr. de Telemovel opcional" type="number"/>
                <TextField name="email" type="email" label="Email" />
            </Stack>

            <Divider/>

            <Typography  mt={2}>
                Endereço 
            </Typography>

            <Stack direction="row" spacing={3} my={3}>

                <TextField name="bi" label="Nr. da rua" type="number" />
                <TextField name="bi" label="Nome da rua" />
                <TextField name="#" label="Nome do Bairro" />
                <TextField name="#" label="Cidade" />

            </Stack>

            <Divider/>

            <Typography  mt={2}>
                Uplload de documentos 
            </Typography>

            <Stack direction="row" spacing={3} mt={3}>

                <InputFileUpload title="Upload de B.I"/>

            </Stack>

       

            <Stack direction="row" spacing={3} sx={{my: '2rem', mx:'auto'}}>
               
                <Box sx={{ 
                    mx: 'auto',
                    width: 200,
                    p: 1,
                    m: 1,}
                }>

                    <LoadingButton fullWidth size="middium" type="submit" variant="contained" onClick={handleClick}  startIcon={<Save />}>
                        Registar
                    </LoadingButton>
                </Box>
            </Stack>
        
            
        </Stack>
    );
}


  function InputFileUpload({title}) {
     const VisuallyHiddenInput = styled('input')`
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        width: 1px;
    `;
    return (
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUpload />}
        href="#file-upload"
      >
        {title}
        <VisuallyHiddenInput type="file" />
      </Button>
    );
  }