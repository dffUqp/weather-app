import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Loader from 'src/components/UI/Loader';

const Loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) =>
  function Loadable(props: any) {
    return (
      <Suspense
        fallback={
          <div style={{ height: '100vh' }}>
            <Loader />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };

const City = Loadable(lazy(() => import('src/pages/City')));
const Home = Loadable(lazy(() => import('src/pages/Home')));
const CitySearchLayout = Loadable(
  lazy(() => import('src/layouts/CitySearchLayout'))
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <CitySearchLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':cityName',
        element: <City />,
      },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);

export default router;
