import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../shared/constants/ROUTES'
import './style.css'

export const Header = () => {
  const location = useLocation()

  const navigate = useNavigate()

  const isHomePage = location.pathname === ROUTES.HOME.path

  const routeSettings = Object.values(ROUTES).find((route) => route.path === location.pathname)

  const onBack = () => {
    navigate(-1)
  }

  return (
    <header>
      {!isHomePage && <button type='button' className='button-apple-style header-back-button font-bold' onClick={onBack}>Back</button>}

      {!isHomePage && routeSettings && <h2 className='header-title'>{routeSettings.name}</h2>}
    </header>
  )
}