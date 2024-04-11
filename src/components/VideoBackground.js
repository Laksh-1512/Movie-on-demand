import React, { useEffect } from 'react'
import {options} from "../utils/constants"
import {useDispatch,useSelector} from "react-redux"
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({id}) => {
   const dispatch = useDispatch();
   const trailerVideo =useSelector((store)=>store.movies?.trailerVideo);
  const getvideo=async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/693134/videos?language=en-US', options)
    const json = await data.json();
    
    const trailers=json.results.filter((movie)=>movie.type==="Trailer");
    const trailer=trailers[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(()=>{
    getvideo();
  },[])
  

  return (
    <div className='w-screen '>
      <iframe className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?autoplay=1&mute=1&hd=1" }title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground
