import React,{useState,useEffect} from 'react'
import axiosValue from './axios';
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

function Rows({title,fetchURL,isLargeRow}) {
  // console.log(typeof title[1])
  // console.log(title)
  // console.log(eachMovie.backdrop_path)
  // console.log(eachMovie.original_title)

  // {
  //   movies.map(i=>(
  //    <img className='posters' src={`${start_URL}${i.poster_path}`} alt={i.original_title} />
  //   ))
  // }

const start_URL="https://image.tmdb.org/t/p/original"; 

  const [movies,setMovies]=useState([])
  const [trailerURL, setTrailerURL]= useState("")

  useEffect(()=>{
    async function fetchData(){
      const request= await axiosValue.get(fetchURL);
      // console.table(request.data.results)
      // console.log(request.data.results[0].original_title);  Gives the result from API fetchdata -->data-->result-->at pos 0 -->details of individual movie 

      // console.log(request.data.results)
      setMovies(request.data.results)
      return request;

      //baseURL+fetchURL is the total url that ia passed here
    }
    fetchData();
  },[fetchURL]);

  // console.log("Log Output",movies)
        // console.log(eachMovie.id)

  const options={
    width:'100%',
    height:'30rem'
  }

  
    // new URL() takes string url is parameter
    // breaks down the url in different parts
    //.search part get the parts after question mark in the link
    // https://www.youtube.com/watch?v=XtMThy8QKqU&t=10338s, that is 'v=Xt...8s'
    // if there are multiple parameters after ? , like here we have v= and t= , 
    // so new URLSearchParams will allow to access each of the parameter my passing  v or t in arguments
    // like by urlParams.get('v') to get v value of v
  const handleClick=(eachMovie)=>{
    if(trailerURL){
      setTrailerURL('');
    }else{
      movieTrailer(eachMovie?.title || "")
      .then((url)=>{
          const urlParams= new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get('v'))
      }).catch(err => console.log("Error caught: ",err))
    }
  }
  // console.log(eachMovie.title)
  return (
    <div className='rows'>  
      <h1>{title}</h1>
      <div className='postersEachRow'>
        {movies.map(eachMovie => { 
          
        return <img key={eachMovie.id} 
        onClick={()=> handleClick(eachMovie)}
        className= {`posters ${isLargeRow && `postersLarge`}`} src={`${start_URL}${isLargeRow? eachMovie.poster_path:eachMovie.backdrop_path}`} alt={eachMovie.original_title} />
        })}
                
      </div>
      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>

        {trailerURL && <Youtube videoId={trailerURL} opt={options}/>}

      </div>
    </div>
  );
  // videoId is the id of each video, opt takes  properties in object format like innerHeight, width of embedded video
}

export default Rows