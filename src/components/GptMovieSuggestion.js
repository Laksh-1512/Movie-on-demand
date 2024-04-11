import React from 'react'
import MovieList from"./MovieList"
import {useSelector} from "react-redux"
const GptMovieSuggestion = () => {
  const {movieresults,moviename}=useSelector((store)=>store.gpt);
  if(!moviename)return null;
  return (
    <div className='p-4 m-4 bg-black text-white  '>
      {moviename.map((movienames,index)=> <MovieList title={movienames} movies={movieresults[index]}></MovieList>)}
    </div>
  )
}

export default GptMovieSuggestion
