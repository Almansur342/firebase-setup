import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const {loginUser,googleLogin,setUser,facebookLogin,user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  // const user = useContext(AuthContext);
  // console.log(user);
  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password);
    loginUser(email,password);
  }

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
      setUser(result.user);
    })

    .catch(error => console.error(error))
  }
  const handleFacebookLogin = () =>{
    facebookLogin()
    .then(result =>{
      setUser(result.user);
    })
    .catch(error => console.error(error))
  }


 useEffect(()=>{
 if(user){
  navigate(location.state)
 }
 },[user,location.state,navigate])

  return (
    <div className="w-[30%] mx-auto border-2 p-4 border-green-600 rounded-lg my-10">
    <form onSubmit={handleLogin} className="space-y-5">
       
       
       <div>
         <p>Email</p>
          <input className="input input-bordered w-full " type="email" name="email" placeholder="Type here" />
       </div>
       <div>
         <p>Password</p>
          <input className="input input-bordered w-full " type="password" name="password" placeholder="Type here" />
       </div>
       
       <button type="submit" className="btn w-full btn-primary text-lg">Login</button>
    </form>
    <button onClick={handleGoogleLogin} className="btn btn-secondary w-full mt-4 text-lg">Google Login</button>
    <button onClick={handleFacebookLogin} className="btn btn-secondary w-full mt-4 text-lg">Facebook Login</button>
  </div>
  );
};

export default Login;