import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from '~/pages/Home';
import VpnPage from '~/pages/Vpn';
import { DonatePage } from '~/pages/Donate';

import { AppearanceBackground } from './AppearanceBackground';

import { ROUTES } from '~/shared/constants/ROUTES';
import { Layout } from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: ROUTES.HOME.path, element: <HomePage /> },
      { path: ROUTES.VPN.path, element: <VpnPage /> },
      { path: ROUTES.DONATE.path, element: <DonatePage /> },
    ],
  },
]);

function App() {
  return (
    <AppearanceBackground>
      <RouterProvider router={router} />
    </AppearanceBackground>
  );
}

export default App;
