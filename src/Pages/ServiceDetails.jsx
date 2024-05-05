import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import details from "../assets/lottie/details.json";
import Lottie from "lottie-react";
import { FaRegHandPointRight } from "react-icons/fa";

const ServiceDetails = () => {
  let index= 1
  const service = useLoaderData()

  return (
    <div>
      <p className="text-center text-3xl p-4">Service details of <span className="text-indigo-600">{service.title}</span></p>
      {/* banner */}
      <div className="text-center text-2xl mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-16">
        <Lottie className="h-[300px]" animationData={details} loop={true} />
        <div className="text-center space-y-3">
          <Link to={`/checkOut/${service._id}`} className="dark:text-gray-100 btn btn-outline">
            Check Out<IoShieldCheckmarkOutline />
          </Link>
          <br />
          <Link to="/services" className="dark:text-gray-100 btn btn-outline">
            All Services<FaRegHandPointRight />
          </Link>
        </div>
      </div>
      {/* details card */}
      <div className="p-4 mt-4">
        <section className="p-4 dark:bg-gray-800 dark:text-gray-100">
          <div className="container grid gap-6 mx-auto text-center items-center grid-cols-1 md:grid-cols-2">
            <div className="w-full rounded-md dark:bg-gray-900">
              <h1 className="text-4xl font-extrabold dark:text-gray-50">{service.title}</h1>
              <span className="block mb-2 text-indigo-600">Price: {service.price}$</span>
              <p className="my-8">{service.description}</p>
            </div>
            <img src={service.img} alt="" className="object-cover h-full rounded-md  dark:bg-gray-500" />
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {
            service.facility.map(fa => 
              <div key={index++} className="max-w-md p-2 mx-auto dark:bg-gray-900 border-[1px] border-indigo-600 rounded-xl shadow-md dark:text-gray-100">
                <h2 className="text-2xl font-semibold">{fa.name}</h2>
                <span className="text-sm dark:text-gray-400">{fa.details}</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;