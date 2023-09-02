import React,{useState,useEffect} from 'react'
import axiosValue from './axios';
import './Row.css'

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

  return (
    <div className='rows'>
      <h1>{title}</h1>
      <div className='postersEachRow'>
        {movies.map(eachMovie => {
        return <img key={eachMovie.id} 
        className= {`posters ${isLargeRow && `postersLarge`}`} src={`${start_URL}${isLargeRow? eachMovie.poster_path:eachMovie.backdrop_path}`} alt={eachMovie.original_title} />
        })}
                
      </div>
    </div>
  );
}

export default Rows