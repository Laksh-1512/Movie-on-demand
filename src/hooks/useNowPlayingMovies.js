 
 import {useDispatch} from "react-redux"
import { addNowPlayingMovie } from '../utils/moviesSlice'
import { useEffect } from "react";
import { options } from '../utils/constants'
 
 const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlaYingMovie= async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
      const json=await data.json();
      
      dispatch(addNowPlayingMovie(json.results));
    
    }
    useEffect(()=>{
      getNowPlaYingMovie();
    },[]);
   
 }
 
 export default useNowPlayingMovies
 
 
