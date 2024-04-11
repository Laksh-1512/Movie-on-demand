import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector((store)=>{
    return store.movies.nowPlayingMovies;
  })
  return (
    movies&&(
      <div className='bg-black '>
       <div className='-mt-52 pl-12 relative z-20 '>
        <MovieList title={"NowPlaying"} movies={movies}/>
        <MovieList title={"Trending"} movies={movies}/>
        <MovieList title={"Popular"} movies={movies}/>
      </div>
    </div>
  ));
}

export default SecondaryContainer
