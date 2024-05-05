import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer';
import SubNavbar from '../Shared/Navbar/SubNavbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SubNavbar></SubNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;