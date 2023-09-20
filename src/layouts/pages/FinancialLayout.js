import { Outlet , NavLink, } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Material
import {Typography, Stack, Button,  } from "@mui/material";

import Iconify from '../../components/iconify';




// ----------------------------------------------------------------------

export const FinancialLayout = () => {
  return (
    <>

        <Helmet>
            <title> Finaceira | Roomer </title>
        </Helmet>

        
          <Stack direction="row" alignItems="center" justifyContent="space-between" m={5}>
            <Typography variant="h4" gutterBottom>
              Finaceira
            </Typography>

            <Stack direction="row" spacing={2}>
                
              <NavLink to="bill">
                      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                        Faturação
                      </Button>
                  </NavLink>
                  <NavLink to="services">
                      <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Pagamentos
                      </Button>
                  </NavLink>
                  <NavLink to="contracts">
                      <Button  variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                      Inadiplência
                      </Button>
                  </NavLink>

                  <NavLink to="contracts">
                      <Button  variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                        Outros
                      </Button>
                  </NavLink>

              </Stack>
          </Stack>

        <Outlet />

    </>
  );
}
