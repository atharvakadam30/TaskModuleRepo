import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoader from 'src/layouts/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards

const landingRoutes = [
  {
    path: '/',
    element: <Navigate to="Home" replace />
  },
];

export default landingRoutes;
