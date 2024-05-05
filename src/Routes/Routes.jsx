import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from './../Pages/Blog';
import Contact from './../Pages/Contact';
import Appointment from "../Pages/Appointment";
import About from "../Pages/Home/About";
import Services from "../Pages/Home/Services";
import AddServices from './../Pages/AddServices';
import CheckOut from './../Pages/CheckOut';
import Login from './../User/Login';
import Register from './../User/Register';
import PrivateRoutes from './PrivateRoutes';
import ServiceDetails from "../Pages/ServiceDetails";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        //loader: () => fetch('/public/services.json')
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
        //loader: () => fetch('/public/services.json')
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/addServices",
        element: <PrivateRoutes><AddServices /></PrivateRoutes>
      },
      {
        path: "/checkOut/:id",
        element: <PrivateRoutes><CheckOut /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/servicesDetails/:id",
        element: <PrivateRoutes><ServiceDetails /></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/cart",
        element: <PrivateRoutes><Cart /></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ], 
  },
]);

export default router