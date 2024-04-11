import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bg_url } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10 '>
            <img className="w-screen"src={bg_url} alt="logo" />
        </div>
      <Gptsearchbar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
