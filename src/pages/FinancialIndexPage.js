import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import {
  AppWidgetSummary
} from '../sections/@dashboard/app';

// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function FinancialIndexPage() {
  return (
    <>
      <Helmet>
        <title> Financeira | Rommer </title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Faturas do Mês" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pagamentos do Mês" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Indadiplência do Mês" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Outros" total="#" color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

        </Grid>

      </Container>
    </>
  );
}
