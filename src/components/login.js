import React, { useRef, useState } from 'react'
import Header from './header'
import checkvaliddata from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../utils/Firebase';
import {useNavigate} from "react-router-dom";
import { bg_url } from '../utils/constants';

const Login = () => {
  const navigate=useNavigate();
  const [issigned,setissigned]=useState(true);
  const[errmessage,seterrmessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleonclick=()=>{
    const message = checkvaliddata(email.current.value,password.current.value);
    seterrmessage(message);
    if(message)return;
    //sign up
    if(!issigned){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/brower");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrmessage(errorMessage);
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/brower");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrmessage(errorMessage);
      });
    }
  }
  const signed=()=>{
    setissigned(!issigned);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={bg_url} alt="img" />
      </div>
          <form onSubmit={(e)=>{e.preventDefault()}} 
            className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 '>
             <h1 className='font-bold text-3xl m-2 py-4 rounded-lg'>{issigned?"Sign In":"Sign Up"}</h1>
              {!issigned && <input   className="p-4 my-4  w-full rounded-lg text-black"  type="text" placeholder="Name" />}
              <input  ref={email}
              className="p-4 my-4  w-full rounded-lg text-black" 
              type="Email Address" 
              placeholder='Email' ></input>
              <input ref={password}  
              className="p-4 my-4  w-full rounded-lg text-black"  type="Password" placeholder='Password' />
              <button className="p-2 my-6 bg-red-600   rounded-lg w-full" onClick={handleonclick}>{issigned?"Sign In":"Sign Up"}</button>
              <p className='m-2 text-md text-red-400'>{errmessage}</p>
              <p className="m-2 text-lg cursor-pointer"onClick={signed}>{issigned?"New to netflix? Sign up here":"Click here! Sign In"}</p>
          </form> 
    </div>
  )
}

export default Login
