import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {api_key, image_url} from '../../constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [videokey, setVideosKey] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })  
  }, [])
  
  const opts ={
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  
  const handleMovie = (id) =>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
      console.log(response.data.results)
      if(response.data.results.length!==0){
          setVideosKey(response.data.results[0])
      }else{
        console.log("No Value")
      }
        

    })
  }
  
  return (
    <div className='row'> <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} src={`${image_url+obj.backdrop_path}`} alt='Image'/>
          )}
        </div>
          { videokey && <Youtube opts={opts} videoId={videokey.key}/> }
    </div>
  )
}

export default RowPost
