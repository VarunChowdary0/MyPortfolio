import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Introduction from './Introduction';

const HomePage: React.FC = () => {
  const location = useLocation();

  return (
    <>
    <div className=' bg-[#fbfafe 0]'>
      <Header />
      {location.pathname === '/' ? <Introduction /> : <Outlet />}
      <div className=' fixed bottom-10 right-6'>
      </div>
    </div>
    </>
  );
};

export default HomePage;
