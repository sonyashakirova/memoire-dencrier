import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage } from './pages';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
