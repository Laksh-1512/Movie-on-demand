import React from 'react';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth/web-extension';
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {useDispatch} from "react-redux"
import { addUser,removeUser } from '../utils/userSlice';
import { logo,avatar } from '../utils/constants';
import {ToggleGPTSearchView} from "../utils/GptSlice"
import {useSelector} from "react-redux"
import lang from '../utils/LangConstants';
import configSlice, { changelang } from '../utils/configSlice';

const Header = () => {
    const checkstatus=useSelector((store)=>store.gpt.ToggleGPTSearchView);
    const navigate=useNavigate();
     const dispatch = useDispatch();
    const handlesignout=()=>{
    signOut(auth).then(() => {
      navigate("/");      
    }).catch((error) => {
      navigate("/error"); 
    });
      }


      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
        
        const {uid,email,displayName} = user;
        dispatch(addUser({uid: uid, email:email, displayName: displayName }));
        navigate("/brower");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
        });
        //this will be called when it unmounts 
        return ()=>unsubscribe();
    },[])

        const handleAISearch=()=>{
          dispatch(ToggleGPTSearchView());//toggle of AI search
        }


        const handlelang=(e)=>{
          dispatch(changelang(e.target.value));
        }

  return (
    <div className='flex w-screen justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img
        className='w-52'
        src = {logo}
        alt="logo"
      />
      <div className='flex p-2 '>
       { checkstatus&&<select name="lang" className=' m-3 p-2 bg-gray-800 text-white' onChange={handlelang}>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>}
<button className='py-1 px-2 h-16  m-2 text-white rounded-lg text-lg bg-green-600' onClick={handleAISearch}>{checkstatus ? "Home Page" : "AI Search"}</button>
        <img className="w-14 h-14 m-4" src={avatar} alt="user_icon" />
        <button className='font-semibold text-white text-lg' onClick={handlesignout}>sign out</button>
      </div>
    </div>
  );
}

export default Header;
