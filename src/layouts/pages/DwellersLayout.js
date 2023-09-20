import { Outlet , NavLink, } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Material
import {Typography, Stack, Button, } from "@mui/material";

import Iconify from '../../components/iconify';




// ----------------------------------------------------------------------

export const DwellersLayout = () => {
  return (
    <>

        <Helmet>
            <title> Moradores | Roomer </title>
        </Helmet>


        <Stack direction="row" alignItems="center" justifyContent="space-between" m={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>

            <Stack direction="row" spacing={2}>
                <NavLink>
                    <Button to="/dashbord/a" variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Inquilinos
                    </Button>
                </NavLink>
                <NavLink>
                    <Button to="/dashbord/b" variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Dependentes
                    </Button>
                </NavLink>
                <NavLink>
                    <Button to="/dashbord/admin" variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      New User
                    </Button>
                </NavLink>
            </Stack>

        </Stack>

        <Outlet />

    </>
  );
}
