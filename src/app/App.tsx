import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import HomePage from '~/pages/Home'

import { AppearanceBackground } from './AppearanceBackground'

import { ROUTES } from '~/shared/constants/ROUTES'
import { Layout } from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: ROUTES.HOME.path, element: <HomePage /> },
      // { path: ROUTES.APPEARANCE.path, element: <AppearancePage /> }
    ]
  },
])

export const DEFAULT_BG_IMAGE = 'https://picsum.photos/id/327/1280/720'

function App() {

  return (
    <AppearanceBackground imageUrl={DEFAULT_BG_IMAGE}>
      <RouterProvider router={router} />
    </AppearanceBackground>
  )
}

export default App
