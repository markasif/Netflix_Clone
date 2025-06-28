import React, { useEffect, useState } from 'react'
import'./Banner.css'
import axios from '../../axios'
import {api_key, image_url} from '../../constants/constants'


function Banner() {
  const [movie, setMovie] = useState(null)
  useEffect(() =>{
    axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      console.log(response.data.results[randomIndex])
      setMovie(response.data.results[randomIndex])

    })
  }, [])
  return (
    <div style={{backgroundImage:`URL(${image_url+movie?.backdrop_path})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.original_name || movie?.title}</h1>
            <div className='Banner_Buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{movie?.overview}</h1>
        </div>
            <div className="fade_bottom">
            </div> 
    </div>
  )
}

export default Banner
