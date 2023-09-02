import React, { useEffect, useState } from 'react'
import axiosValue from './axios'
import requests from './requests'
import './Banner.css';

function Banner() {
// Math.random() provides value betweeen 0 and 1 , math.floor gives lower round of value, and multiplying it with 20 gives a value between 0 to 20

    const [movie,setMovie]= useState("")
    useEffect(()=>{
        async function fetchData(){
            const req= await axiosValue.get(requests.fetchFavourite)
            setMovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length)
                ]
            );
            return req;
        }
        fetchData()
    },[])
  return (
    
    <div 
    className='banner'
    style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,backgroundSize:'cover',
    height:'25rem',
    color:'white',
    objectFit:'contain',
    padding:'1rem'
    }}>


        <div className='banner_content' style={{marginLeft:'1rem'}}>
                <h1 style={{fontWeight:'900',paddingBottom:'0.3rem',
                paddingTop:'0.5rem',marginTop:'2.5rem'}}>{movie?.original_title}</h1>
                <button className='btn' 
                >Watch Now</button>
        
        <div style={{width:'30rem',padding:'0.2rem',fontWeight:'500',lineHeight:'1.3rem',height:'5rem'}}>
            {movie?.overview}
        </div>
        </div>

    </div>
  )
}

export default Banner