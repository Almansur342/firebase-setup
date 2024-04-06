import { createContext, useEffect, useState} from "react";
export const AuthContext = createContext(null);
import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../FireBase/Firebase.init";
import {onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const registerUser = (email,password) =>{
 return createUserWithEmailAndPassword(auth,email, password)
}

const loginUser = (email, password) =>{
 return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin = () =>{
  return signInWithPopup(auth,googleProvider);
}

const facebookLogin = () =>{
  return signInWithPopup(auth,facebookProvider);
}

const logOut = () =>{
  return signOut(auth);
}

const authInfo = {
  registerUser,
  loginUser,
  user,
  setUser,
  googleLogin,
  facebookLogin,
  logOut
}

  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
      setUser(currentUser);
      
      } else {
        setUser(null)
      }
    });

    return ()=>{
      unsubscribe()
    }
  },[])

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;