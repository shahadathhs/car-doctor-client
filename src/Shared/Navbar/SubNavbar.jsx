import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
//import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { RxAvatar } from "react-icons/rx";
import { FaBagShopping } from "react-icons/fa6";

const SubNavbar = () => {
  // user management
  const {user, logOut} = useAuth();
  
  const handleLogout = () =>{
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Successful!",
              text: "You have been successfully logout.",
              icon: "success"
            });
          })
          .catch(() => {
            Swal.fire({
              title: "Unsuccessful!",
              text: "Au error detected. Try again",
              icon: "error"
            });
          }); 
      }
    });
  }

  return (
    <div className="flex w-full container justify-end p-4 pt-0">
      <ul className="items-stretch flex mr-0 gap-2">
        {/* Cart */}
        <li className="flex">
				<NavLink 
        className={({ isActive }) => isActive 
        ? 
        'btn btn-sm btn-outline text-xl text-indigo-600' 
        : 
        'btn btn-sm text-xl btn-outline'
        }
        to="/cart"><FaBagShopping /></NavLink>
        </li>
        {/* Add Services */}
        <li className="flex">
          <NavLink 
          className={({ isActive }) => isActive 
          ? 
          'btn btn-sm btn-outline text-indigo-600' 
          : 
          'btn btn-sm btn-outline'
          }
          to="/addServices"><IoMdAddCircleOutline />Add Services</NavLink>
        </li>
        {/* Login In / Register */}
        {/* user management */}
        <li>
          {
            user
            ?
            <div className="dropdown dropdown-hover dropdown-end">
              {/* hover element */}
              <div tabIndex={0}  className="avatar">
                <div className="w-8 rounded">
                  {
                    user.photoURL 
                    ?
                    <img src={user?.photoURL} />
                    :
                    <div className="flex justify-center text-2xl my-auto pt-1 text-orange-500"><RxAvatar/></div>
                  }
                </div>
              </div>
              {/* dropdown */}
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 space-y-2 rounded-box">
                {/* profile */}
                <li className="flex">
                  <div 
                  className="p-2 flex flex-col dark:bg-gray-900 dark:text-gray-100 border-2 border-indigo-600">
                    <div className="flex-shrink-0 w-full h-32 sm:w-32 mb-0">
                      {
                      user.photoURL 
                      ?
                      <img className="rounded-lg" src={user?.photoURL} />
                      :
                      <div className="flex justify-center text-2xl my-auto py-2 text-orange-500"><RxAvatar/></div>
                      }
                    </div>
                    <div className="flex flex-col space-y-4 p-1">
                      <div>
                        <span className="text-sm text-gray-600">User Name:</span>
                        <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">User Email:</span>
                        <h2 className="text-md font-semibold">{user.email || "email not found"}</h2>
                      </div>
                      {/* logout */}
                      <div>
                        <button onClick={handleLogout}  className="btn btn-sm btn-outline">Logout</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            :
            <div className="dropdown dropdown-hover dropdown-end">
              {/* hover element */}
              <div tabIndex={0}  className="avatar">
                <div className="w-8 rounded">
                  <div className="flex justify-center text-2xl my-auto mt-1 text-orange-500"><RxAvatar/></div>
                </div>
              </div>
              {/* dropdown */}
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 space-y-2 rounded-box w-28">
                <li className="flex">
                  <NavLink 
                  className={({ isActive }) => isActive 
                  ? 
                  'btn btn-sm btn-outline bg-white text-indigo-600' 
                  : 
                  'btn btn-sm btn-outline bg-white text-orange-500'
                  }
                  to="/login">Login</NavLink>
                </li>
                <li className="flex">
                  <NavLink 
                  className={({ isActive }) => isActive 
                  ? 
                  'btn btn-sm btn-outline bg-white text-indigo-600' 
                  : 
                  'btn btn-sm btn-outline bg-white text-orange-500'
                  }
                  to="/register">Register</NavLink>
                </li>
              </ul>
            </div>
          }
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;