import React,{useRef} from 'react'
import lang from '../utils/LangConstants'
import {useSelector} from "react-redux"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY, options } from '../utils/constants';
import {useDispatch} from "react-redux"
import { addgptMovieResult } from '../utils/GptSlice';

const Gptsearchbar = () => {
  const textref=useRef(null);
  const dispatch=useDispatch();

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options);
    
    const json=await data.json();
    return json.results; //return promise
  }


  const gptsearch=async ()=>{
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const prompt = "act as a movie recomendation system and suggest me 5 movies only names no description no numbering only text with 5 names in one line "+ textref.current.value;; 
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  const gptmovies=text.split(",");//["movie1","movie2",,,"movie5"]
  const promiseArray=gptmovies.map(movie=>searchMovieTMDB(movie)); //[5 promise]
  
  const tmdbresult=await Promise.all(promiseArray);
  dispatch(addgptMovieResult({moviename:gptmovies,movieresults:tmdbresult}));
  }
  
      
  const type=useSelector((store)=>store.config?.lang);

  return (
    <div  className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>{e.preventDefault()}}>
        <input ref={textref} className='p-4 m-4 col-span-9' type="text" placeholder={lang[type].getsearchbox}  />
        <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={gptsearch}>{lang[type].search}</button>
      </form>
    </div>
  )
}

export default Gptsearchbar
