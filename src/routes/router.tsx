import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import City from '../pages/City';
import Home from '../pages/Home';

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
