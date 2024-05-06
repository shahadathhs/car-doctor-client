//import { useLoaderData } from "react-router-dom";
//import PropTypes from 'prop-types';
//import { useEffect, useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import useServices from "../../hooks/useServices";

const Services = () => {
  //DRY => DO Not Repeat Yourself

  //const Services = ({services}) => {
  //console.log(services) // services does not load in services route from navbar
  
  //const services1 = useLoaderData()
  //console.log(services1) // services1 does not load in home page
  
  //const services2 = useLoaderData(services)
  //console.log(services2)

  // using useEffect //local json
  // const [services3, setServices3] = useState([])

  // useEffect(() => {
  //   fetch("/services.json")
  //    .then(res => res.json())
  //    .then(data => setServices3(data))
  // } ,[])

  //here services2 & services3 are same => load both in home page and service page

  //database
  // const [services4, setServices4] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //    .then(res => res.json())
  //    .then(data => setServices4(data))
  // } ,[])
  const services = useServices();
  
  return (
    <div>
      {/* banner */}
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center p-6 text-center">
          <h1 className="text-2xl font-bold text-indigo-600 leading-none">Service</h1>
          <p className="p-4 text-4xl">Our Service Area</p>
          <p className="max-w-md">
          From diagnostics to intricate repairs, our skilled technicians utilize advanced techniques and genuine parts to restore your vehicle to its prime condition.
          </p>
        </div>
      </section>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          services.map(service => 
            <div key={service._id}
              className="max-w-xs p-6 rounded-md shadow-md mx-auto dark:bg-gray-900 dark:text-gray-50">
              <img src={service.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
              <div className="mt-6 mb-2">
                <span className="block text-xl font-medium tracking-widest uppercase dark:text-indigo-400">{service.title}</span>
                <h2 className="text-xl font-semibold tracking-wide">Price: <span className="text-indigo-600">{service.price}$</span></h2>
              </div>
              <div className="flex justify-between w-full">
                <Link to={`/checkOut/${service._id}`} className="dark:text-gray-100 btn btn-outline">
                  <IoShieldCheckmarkOutline />Check Out
                </Link>
                <Link to={`/servicesDetails/${service._id}`} className="dark:text-gray-100 btn btn-outline">
                 <BiDetail />Details
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Services;

// Services.propTypes = {
//   services: PropTypes.array
// }