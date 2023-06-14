import { createBrowserRouter } from 'react-router-dom';
import { AppHome } from './components/AppHome';
import { AppAbout } from './components/AppAbout';
import { moviesLoader } from './loaders/moviesLoader';
import { movieLoader } from './loaders/movieLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppHome />,
    loader: moviesLoader,
  },
  {
    path: '/about/:id',
    element: <AppAbout />,
    loader: movieLoader,
  },
]);
