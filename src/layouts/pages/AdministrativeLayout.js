import { Outlet , NavLink, } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Material
import {Typography, Stack, Button, ButtonGroup, } from "@mui/material";

import Iconify from '../../components/iconify';



// ----------------------------------------------------------------------

export const  AdministrativeLayout = () =>  {
  return (
    <Stack >

        <Helmet>
            <title> Administrção | Roomer </title>
        </Helmet>


        <Stack direction="row" alignItems="center" justifyContent="space-between" m={5}>
          <Typography variant="h4" gutterBottom>
            Administração
          </Typography>

            <Stack direction="row" spacing={2}>
                
                <NavLink to="users">
                    <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Usuaríos
                    </Button>
                </NavLink>
                <NavLink to="services">
                    <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Serviços
                    </Button>
                </NavLink>
                <NavLink to="contracts">
                    <Button  variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Contratos
                    </Button>
                </NavLink>

                <NavLink to="contracts">
                    <Button  variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Apartamentos
                    </Button>
                </NavLink>
            </Stack>

        </Stack>

          <Outlet />

    </Stack>
  );
}
