import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider, 
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContest = createContext(null);

// direct login auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })   
  }

  // loginUser
  const login =  (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

   // google login
   const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  
  // twitter login
  const twitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser?.email)
      setUser(currentUser);
      setLoading(false);
      
      // if user exist then issue a token
      const userEmail = { email: currentUser?.email || user?.email }
      if (currentUser) {
        axios.post("http://localhost:5000/jwt", userEmail, {
          withCredentials: true
        })
          .then(res => {
            console.log(res.data)
          })
      }else{
        axios.post("http://localhost:5000/logout", userEmail, {
          withCredentials: true
        })
          .then(res => {
            console.log(res.data)
          })
      }


    });
    return () => {
      unSubscribe();
    }
  }, [user])

  const authInfo = {
    user, setUser, loading, 
    createUser, updateUserProfile,
    googleLogin, githubLogin, twitterLogin,
    login, logOut,
  }

  return (
    <AuthContest.Provider value={authInfo}>
      {children}
    </AuthContest.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
}