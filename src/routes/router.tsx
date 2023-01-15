import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from '../components/UI/Loader';

const Loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) =>
  function Loadable(props: any) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };

const City = Loadable(lazy(() => import('../pages/City')));
const Home = Loadable(lazy(() => import('../pages/Home')));
const RootLayout = Loadable(lazy(() => import('../layouts/RootLayout')));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
]);

export default router;
