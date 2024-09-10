import { Outlet } from 'react-router-dom';
import { Header } from '../widget/Header';

export const Layout = () => {
  return (
    <div id="app-layout">
      <Header />
      <div className="app-content-template">
        <Outlet />
      </div>
    </div>
  );
};
