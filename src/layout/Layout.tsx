import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { useEffect } from 'react';

export const Layout = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
