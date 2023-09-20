import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container, Stack, } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import {
  AppWidgetSummary
} from '../sections/@dashboard/app';


// ----------------------------------------------------------------------


export default function DwellerIndexPage() {
  return (
    <>
      <Helmet>
        <title> Moradores : Roomer</title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

        </Grid>

      </Container>
    </>
  );
}