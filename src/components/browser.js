import React from 'react'
import Header from './header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import {useSelector} from "react-redux"
import GPTSearch from './GPTSearch';

const Browser = () => {
  const isgptsearch=useSelector(store=>store?.gpt?.ToggleGPTSearchView);
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      {
        isgptsearch? <GPTSearch/>
        : 
        <>
        <MainContainer></MainContainer>
        <SecondaryContainer></SecondaryContainer>
        </>
      }
      
    </div>
  )
}

export default Browser
