// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'admistração',
    path: '/dashboard/administrative/index',
    icon: icon('ic_analytics'),
  },
  {
    title: 'financeira',
    path: '/dashboard/financial',
    icon: icon('ic_user'),
  },
  {
    title: 'moradores',
    path: '/dashboard/dwellers',
    icon: icon('ic_cart'),
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'sinup',
    path: '/signup',
    icon: icon('ic_disabled'),
  },
  {
    title: 'test',
    path: '/dashboard/test',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
