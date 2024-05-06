import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaTwitter  } from 'react-icons/fa';
import { useState } from "react";
import useAuth from './../hooks/useAuth';
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginLottie from "../assets/lottie/login.json";
//import axios from "axios";

const Login = () => {
  const { login, googleLogin, githubLogin, twitterLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state  || "/";

  // handle social login
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        Swal.fire({
          title: 'Successful!',
          text: 'You Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        // loggedIn User
        //console.log(result.user);
        if (result.user) {
          navigate(from);
        }

        // const userEmail = { email: result.user.email }
        // // get access token
        // axios.post("http://localhost:5000/jwt", userEmail, {
        //   withCredentials: true
        // })
        //   .then(res => {
        //     console.log(res.data)
        //     if (res.data.success) {
        //       navigate(from);
        //     }
        // })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Login UnsuccessFul!',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
        console.log(error);
      })
  };

  // handle email login
  const handleEmailLogin = event => {
    event.preventDefault();
    
    const form = event.target;
    
    const email = form.email.value;
    const password = form.password.value;
    
    setLoginError("");

    login(email, password)
      .then((result) => {
        
        Swal.fire({
          title: 'Successful!',
          text: 'You Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
        // loggedIn User
        //console.log(result.user)
        
        if (result.user) {
          navigate(from);
        }
          
          // //const user = { email}
          // const userEmail = {email : result.user.email}
          // // get access token
          // axios.post("http://localhost:5000/jwt", userEmail, {
          //   withCredentials: true
          // })
          //   .then(res => {
          //     console.log(res.data)
          //     if (res.data.success) {
          //       navigate(from);
          //     }
          //   })
        
      })
      .catch((error)=> {
        Swal.fire({
          title: 'Error!',
          text: 'Password or Email did not match!',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
        setLoginError(error.message);
      })
  };

  return (
    <div className="hero mx-auto">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left text-3xl p-4">
          <Lottie  animationData={loginLottie} loop={true} />
        </div>
        {/* login form */}
        <div className="w-full mx-auto max-w-md  shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
          <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
          {/* register link */}
          <p className="text-sm text-center dark:text-gray-400">Do not have account?
            <Link to="/register" className="focus:underline hover:underline text-indigo-600">Register here</Link>
          </p>
          {/* social login buttons */}
          <div className="my-6 space-y-4 p-4">
            {/* google login */}
            <button aria-label="Login with Google"  onClick={() => handleSocialLogin(googleLogin)}
            className="flex items-center justify-center gap-2 w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:dark:ring-indigo-400">
              <FaGoogle /> Login with Google
            </button>
            {/* github login */}
            <button aria-label="Login with GitHub" role="button"  onClick={() => handleSocialLogin(githubLogin)}
            className="flex items-center justify-center gap-2 w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:dark:ring-indigo-400">
              <FaGithub />Login with GitHub
            </button>
            {/* twitter login */}
            <button aria-label="Login with Twitter" role="button" onClick={() => handleSocialLogin(twitterLogin)}
            className="flex items-center justify-center gap-2 w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:dark:ring-indigo-400">
              <FaTwitter />Login with Twitter
            </button>
          </div>

          <div className="flex items-center w-full my-4">
            <hr  className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr  className="w-full dark:text-gray-400" />
          </div>

          {/* email login */}
          <form className="space-y-8 p-4" onSubmit={handleEmailLogin} >
            <div className="space-y-4">
              {/* email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">Email address</label>
                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                dark:text-gray-100 focus:dark:border-indigo-400" />
              </div>
              {/* password */}
              <div className="space-y-2 relative">
                <label htmlFor="password" className="text-sm">Password</label>
                <input type={showPassword ? "text" : "password"} 
                name="password" id="password" placeholder="*****" required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 
                dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" />
                <span 
                  className="absolute top-9 right-4" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
                {
                  loginError && <small className='text-red-500'>{loginError}</small>
                }
              </div>
            </div>
            {/* submit */}
            <input type="submit" value="Login"
            className="w-full px-8 py-3 font-bold rounded-md btn btn-outline text-indigo-600" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;