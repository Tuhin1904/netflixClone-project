import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
const [show,updateShow]=useState(false)
  useEffect(()=>{
//     // whenever we scroll down 100px show gets updated
     window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
          updateShow(true);
      }else updateShow(false) ;
     });
//     //  everytime page is refreshed event listener gets removed
     return ()=>{window.removeEventListener('scroll');}
  },[])
  return (
    <>
      <div className={`Nav ${show && 'Nav_dark'} `}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="NetflixLogo"/>

      </div>

    </>
  )
}

export default Navbar