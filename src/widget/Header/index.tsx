import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '~/shared/constants/ROUTES';
import './style.css';

export const Header = () => {
  const isVpnFeatureEnabled = true; // Hardcoded feature flag. In real world, this should be fetched from a feature flag service

  const location = useLocation();

  const navigate = useNavigate();

  const isHomePage = location.pathname === ROUTES.HOME.path;

  const isVpnPage = location.pathname === ROUTES.VPN.path;

  const onBack = () => {
    navigate(-1);
  };

  const onVpn = () => {
    navigate(ROUTES.VPN.path);
  };

  return (
    <header>
      {!isHomePage && (
        <button
          type="button"
          className="button-apple-style header-left-button font-bold"
          onClick={onBack}
        >
          Back
        </button>
      )}

      {!isVpnPage && isVpnFeatureEnabled && (
        <button
          type="button"
          className="button-apple-style header-right-button font-bold"
          onClick={onVpn}
        >
          VPN
        </button>
      )}
    </header>
  );
};
