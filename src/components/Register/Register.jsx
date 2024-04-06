import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
const {registerUser,setUser} = useContext(AuthContext);
const [error, setError] = useState('');
const [emailError, setEmailError] = useState('');
// console.log(registerUser);

  const handleRegister = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
if(!/@gmail\.com$/.test(email)){
 setEmailError('Email must end with @gmail.com');
 return;
}

    if(password.length < 6){
      setError("password must be six characters or long");
      return;
    }
    if(password !== confirmPassword){
      setError("Password didn't match" );
      return;
    }
    if(!/\d{2,}$/.test(password)){
      setError("password must have 2 numbers at the end")
      return;
    }

    if(!/[@#%^&*]/.test(password)){
      setError('please add a special character');
      return;
    }

    setError("");
    // console.log(name,photo,email,password,confirmPassword);
    registerUser(email,password)
    .then(result  =>{
      setUser(result.user)
     })
    
     .catch(error =>{
      setError(error.message.split("/")[1])
     })

  }
  return (
    <div className="w-[30%] mx-auto border-2 p-4 border-green-600 rounded-lg my-10">
      <form onSubmit={handleRegister} className="space-y-5">
         <div>
           <p>Name</p>
            <input className="input input-bordered w-full" type="text" name="name" placeholder="Type here" />
         </div>
         <div>
           <p>Photo</p>
            <input className="input input-bordered w-full" type="text" name="photo" placeholder="Type here" />
         </div>
         <div>
           <p>Email</p>
            <input className="input input-bordered w-full " type="email" name="email" placeholder="Type here"/>
            
         </div>
         {
              emailError && <small className="text-red-800">
                {emailError}
              </small>
            }
         <div>
           <p>Password</p>
            <input className="input input-bordered w-full " type="password" name="password" placeholder="Type here"/>
         </div>
         <div>
           <p>Confirm password</p>
            <input className="input input-bordered w-full " type="password" name="confirmPassword" placeholder="Type here"/>
         </div>
         <button type="submit" className="btn w-full btn-primary text-lg">Register</button>
         {
          error && <small className="text-red-800">
            {error}
          </small>
         }
      </form>
    </div>
  );
};

export default Register;