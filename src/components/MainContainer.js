import React from 'react'
import {useSelector} from "react-redux"
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    
    if(!movies)return ;
    const movie=movies[0];
    const {id,original_title,overview}=movie;
  return (
    <div>
      <VideoTitle id={id} title={original_title} description={overview} ></VideoTitle>
      <VideoBackground id={id}></VideoBackground>
    </div>
  )
}

export default MainContainer
