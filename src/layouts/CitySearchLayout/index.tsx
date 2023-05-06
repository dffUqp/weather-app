import { Outlet } from 'react-router-dom';
import Header from './Header';

function CitySearchLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default CitySearchLayout;
