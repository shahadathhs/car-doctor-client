import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import checkout from "../assets/lottie/checkout.json";
import Lottie from "lottie-react";
import { FaCartPlus, FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import useAuth from './../hooks/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const CheckOut = () => {
  const service = useLoaderData()
  console.log(service)

  const { user } = useAuth()

  const [startDate, setStartDate] = useState(new Date())

  const handleOrderConfirm = event => {
    event.preventDefault();

    const form = event.target;

    const name = user.displayName;
    const phone = form.phone.value;
    const email = user.email;
    const servicesName = service.title;
    const servicePrice = service.price;
    const servicePhoto = service.img;
    const schedule = startDate.toString();
    const message = form.message.value;

    const checkOut = {name, phone, email, servicesName, servicePrice, servicePhoto, schedule, message}

    console.table(checkOut)

    fetch('http://localhost:5000/checkOut', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(checkOut)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Successful!',
            text: 'CheckOut Successful Added',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
      form.reset();
  }

  return (
    <div className="mx-auto p-4 text-center">
      {/* banner */}
      <div className="text-center text-2xl mx-auto p-4 flex flex-col md:flex-row justify-center items-center gap-16">
        <Lottie className="h-[300px]" animationData={checkout} loop={true} />
        <div className="text-center space-y-3">
          <Link to={`/servicesDetails/${service._id}`} className="dark:text-gray-100 btn btn-outline">
          <FaRegHandPointLeft />Service Details
          </Link>
          <br />
          <Link to="/cart" className="dark:text-gray-100 btn btn-outline">
            <FaCartPlus />Your Cart
          </Link>
          <br />
          <Link to="/services" className="dark:text-gray-100 btn btn-outline">
            All Services<FaRegHandPointRight />
          </Link>
        </div>
      </div>
      {/* form */}
      <div className="text-center space-y-3 p-4">
        <p className="text-2xl text-indigo-600">Checkout Form</p>
        <form onSubmit={handleOrderConfirm}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* name */}
          <label className="input input-bordered flex items-center gap-2" >
            Name:
            <input type="text" className="glow w-full" name="name" placeholder={user.displayName} disabled />
          </label>
          {/* Number */}
          <label className="input input-bordered flex items-center gap-2" >
            Phone:
            <input type="number" className="glow w-full" name="phone"  placeholder="Enter your phone number" required />
          </label>
          {/* email */}
          <label className="input input-bordered flex items-center gap-2">
            Email:
            <input type="email" className="glow w-full" name="email"  placeholder={user.email} disabled />
          </label>
          {/* services name */}
          <label className="input input-bordered flex items-center gap-2">
            Service Name:
            <input type="text" className="glow" name="servicesName" placeholder={service.title} disabled />
          </label>
          {/* service price */}
          <label className="input input-bordered flex items-center gap-2" >
            Service Price:
            <input type="number" className="glow" name="servicePrice"  placeholder={service.price} disabled />
          </label>
          {/* photo */}
          <label className="input input-bordered flex items-center gap-2" >
            Photo:
            <input type="text" className="glow" name="photo"  placeholder={service.img} disabled />
          </label>
          {/* date */}
          <label className="input input-bordered flex items-center gap-2" >
            Schedule:
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </label>
          {/* customer message/note */}
          <textarea placeholder="Your message or note for us" name="message"
          className="textarea textarea-bordered textarea-lg w-full md:col-span-2" required ></textarea>
          <input type="submit" value="Order Confirm" className="btn btn-outline text-indigo-600 w-full md:col-span-2" />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;