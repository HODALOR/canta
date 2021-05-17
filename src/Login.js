import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

const Login = () => {
    const[Email,setEmail] = useState('')
   
    const[Password,setPassword] = useState('')


    const signin = e =>{
        e.preventDefault();
    }



    const signup = e =>{
        e.preventDefault();

    //     auth.createUserWithEmailAndPassword(Email,Password)
    //     .then((auth) =>{
    //         console.log(auth);
    //     })

    //     .catch(error.alert(error.message))

    }

   
  
  return (
    
      <div className="Login">
        
          <Link to="/">
            <img
              alt="Amazon Logo White"
              src="https://www.nicepng.com/png/full/228-2281836_vault-logo-available-amazon-app-store.png"
              className="login__logo"
            />
          </Link>
        
        <div className="login__container">
          <h1>Sign-In</h1>
            <form>
              <h5>Email</h5>
              <input value={Email} onChange={(e)=> setEmail(e.target.value)} className="userName__imput" type="text" />

              <h5>Password</h5>
              <input type="password" classNmae="password" value={Password} onChange = {(e)=> setPassword(e.target.value)}/>

              <button onClick={signin} className="login__button">Sign In</button>
            </form>
          

          <p className="login__agreement">
            hello user this the login agreement kindly pay ettention to it
          </p>
          <button onClick={signup} className="signup__button">I don't have amazon account</button>
        </div>
      </div>
    
  );
};

export default Login;
