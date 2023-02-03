


import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../style/Nav.css"
import "../style/Subhead.css"
import { Apicaller } from '../Api/Apicaller'
import {useEffect} from "react";
import Layout from "../Layout/Layout"

function Food() {

  const [data,setdata] = useState([]);
  useEffect(()=>{
    Apicaller({
      url:" https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=90b5566f6c314946a71f7e0be8d307c4",
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

<div >
          <div className='Subhead'>                                   <span className='unred1'>_____</span><span className='topposts'>Top Posts</span>
          </div> 

          </div>

          <Layout name={"Food"} Apidata={data}/>

</>
  )
}

export default Food;