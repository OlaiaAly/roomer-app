import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

// Layouts mine
import {AdministrativeLayout, DwellersLayout, FinancialLayout} from './layouts/pages'; 


// pages
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Test from "./pages/Test";

// Administrative
import AdministrativeIndexPage from "./pages/AdministrativeIndexPage";
// PageComponets - Administrative
import {UserTableList, UserFormRegister} from './components/pagesComponets/administrative/users';
import {ContractTableList} from './components/pagesComponets/administrative/contracts';
import {ServiceTableList} from './components/pagesComponets/administrative/services'; 

// Financial
import FinancialIndexPage from "./pages/FinancialIndexPage";
// PageComponets - Financial
import {FinacialTableList} from "./components/pagesComponets/financial";

// Dwellers - Moradores
import DwellerIndexPage from "./pages/DwellerIndexPage";


const Private = ({Item}) => {
  const signed = false;

  return signed === true ? <Item/> : <LoginPage/>;
  
};

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: < Private Item={DashboardLayout} />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'test', element: <Test /> },

        // Administrative
        { 
          path: 'administrative', 
          element: <AdministrativeLayout />,
          children:[
            {element: <Navigate to="/dashboard/administrative/index" />, index: true },
            {path: 'index', element: <AdministrativeIndexPage /> },

            {path: 'users', element: <UserTableList /> },
            {path: 'users/register', element: <UserFormRegister /> },

            {path: 'services', element: <ServiceTableList /> },

            {path: 'contracts', element: <ContractTableList /> },

          ]
        },
        // Financial
        { 
          path: 'financial', 
          element: <FinancialLayout />,
          children:[
            {element: <Navigate to="/dashboard/financial/index" />, index: true },
            {path: 'index', element: <FinancialIndexPage /> },
            {path: 'bill', element: <FinacialTableList /> },
            {path: 'services', element: <ServiceTableList /> },
            {path: 'contracts', element: <ContractTableList /> },
          ]
        },

        // Dwellers
        { 
          path: 'dwellers', 
          element: <DwellersLayout />,
          children:[
            {element: <Navigate to="/dashboard/dwellers/index" />, index: true },
            {path: 'index', element: <DwellerIndexPage /> },
            {path: 'bill', element: <FinacialTableList /> },
            {path: 'services', element: <ServiceTableList /> },
            {path: 'contracts', element: <ContractTableList /> },
          ]
        },
        
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUpPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
