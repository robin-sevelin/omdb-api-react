import { RouterProvider } from 'react-router-dom';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';

import { router } from './Router';

export const App = () => {
  return (
    <>
      <AppHeader />
      <RouterProvider router={router} />
      <AppFooter />
    </>
  );
};
