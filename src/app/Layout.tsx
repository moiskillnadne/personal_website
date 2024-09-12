import { Outlet } from 'react-router-dom';
import { Header } from '~/widget/Header';

export const Layout = () => {
  const appVersion = import.meta.env.VITE_APP_VERSION;

  return (
    <div id="app-layout" className="flex flex-col m-0 p-0 w-screen h-svh">
      <Header />
      <div className="flex flex-1">
        <Outlet />
      </div>

      <span style={{ margin: '12px 16px', opacity: '0.35', fontSize: '12px' }}>{appVersion}</span>
    </div>
  );
};
