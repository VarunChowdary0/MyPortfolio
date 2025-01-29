import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Introduction from './Introduction';

const HomePage: React.FC = () => {
  const location = useLocation();

  return (
    <>
    <div className=' bg-[#f1efec] min-h-screen '>
      <div className=' fixed flex pt-4 px-5 text-2xl max-sm:text-lg font-4 text-[#4e46dc] font-bold
       top-0 left-0 right-0 bg-[#f1efec] h-[40px]'>
        Sai varun Poludasu
      </div>
      <Header />
      {location.pathname === '/' ? <Introduction /> : <Outlet />}
      <div className=' fixed bottom-10 right-6'>
      </div>
    </div>
    </>
  );
};

export default HomePage;
