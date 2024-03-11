import { PartialRouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import AuthenticationRoutes from 'src/router/Authentication';
import landingRoutes from './Landing';

const router: PartialRouteObject[] = [
  {
    path: '/',
    children: AuthenticationRoutes
  },

  // ExtendedSidebarLayout

  {
    path: 'extended-sidebar',
    element: <ExtendedSidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/Authentication" replace />
      },
      {
        path: '/landing',
        children: landingRoutes
      },
      {
        path: '/Authentication',
        children: AuthenticationRoutes
      },
    ]
  }
];

export default router;
