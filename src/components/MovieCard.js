import React from 'react'
import { poster } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  if(!posterpath) return null
  return (
    <div className='w-48 pr-4 '>
      <img src={poster+posterpath} alt="Movie Card " />
    </div>
  )
}

export default MovieCard
