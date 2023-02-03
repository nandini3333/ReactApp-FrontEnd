import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "../style/Nav.css";
import { Apicaller } from '../Api/Apicaller';
import {useEffect} from "react";
import Homelayout from '../Layout/Homelayout';


function Home() {
  const [data,setdata] = useState([]);
  useEffect(()=>{
    Apicaller({
      url:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=444e78e9f0aa4f29be2c2a82acadee80",
      method:"get"
    })
  .then((Response)=>{
          setdata(Response.articles)
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    console.log("Done")
  })
  
  },[]);
  console.log(typeof data);
  console.log(data);
  

  return (
    <>
    <div className='fullnav'>
    <div className='the'>The</div>
    <div className='siren'>Siren</div>
    <div className='topnav'>
      
<Link to={"/home"} className='li'>Home</Link>
<Link to={"/bollywood"} className='li'>Bollywood</Link>
<Link to={"/technology"} className='li'>Technology</Link>
<Link to={"/hollywood"} className='li'>Hollywood</Link>
<Link to={"/fitness"} className='li'>Fitness</Link>
<Link to={"/food"} className='li'>Food</Link>

</div>
</div>
       
        <Homelayout Apidata={data}/>
       
</>
  )
}

export default Home;