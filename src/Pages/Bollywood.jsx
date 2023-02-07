
import {Link} from "react-router-dom"
import "../style/Nav.css"
import "../style/Subhead.css"
import "../Layout/Layout.css"

import {Bollydata} from "../Api/Bollydata"
import { useNavigate } from "react-router-dom";




function Bollywood() {
  const navigate = useNavigate();
  const handleNavigation = (item,index) =>{
    console.log(item);
    
     navigate(`/bollywood/a/${index}`, {state:item});
  }




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
<hr className="hrtag" />
<div >
          <div className='Subhead'> Bollywood<span className='unred'>_____</span>
                                   <span className='unred1'>_____</span><span className='topposts'>Top Posts</span>
          </div> 

          </div>

          {/* <Layout  name={"Bollywood"} Apidata={data}/> */}

          <div className='container'>
            <div className='child1'>
              <div className='one'>
                {Bollydata.slice(0,7).map((item,index)=>{
                    return(
                    <div className="one" key={index}>
                        <img className="img-size"
                        onClick={()=> handleNavigation(item,index)} src={item.urlToImage} alt={"images"}/>
                    <div className="content">
                        <h3 id="title">{item.title}</h3><br/>
                         <p id="middle"> {item.content}</p>
                         <p id="last">{item.publishedAt}</p>
                    </div>
                    </div>)
                })}
                
              </div>
             
              {/* <div className='two'>
            <img src={arrow.svg} alt={"down-arrow"}/>
            LOAD MORE
              </div> */}
            </div>

            <div className='child2'>
              <div className='a'>
              {Bollydata.slice(7,8).map((item1,index1)=>{
                    return(
                    <div className="a" key={index1}>
                        <img className="img-size1" 
                        onClick={()=> handleNavigation(item1,index1)}
                        src={item1.urlToImage} alt={"images"}/>
                    <div className="content1">
                        <h3 id="title1">{item1.title}</h3><br/>
                        
                         <p id="last1">{item1.publishedAt}</p>
                    </div>
                    <div className="no1"><h1>1</h1></div>    
                    </div>)
                })}  
                        
              </div>
              
              <div className='b'>
              {Bollydata.slice(8,11).map((item2,index2)=>{
                    return(
                    <div className="b" key={index2}>
                        <img className="img-size2" 
                        onClick={()=> handleNavigation(item2,index2)}
                        src={item2.urlToImage} alt={"images"}/>
                    <div className="content2">
                        <h3 id="title2">{item2.title}</h3><br/>
                        
                         <p id="last2">{item2.publishedAt}</p>
                    </div>
                     <div className="no2">
                    <h1>{index2+2}</h1>  
                    </div>  
                      
                      
                    </div>)
                })}                

               </div> 
               
              <div className='c'>
              <p className="add">Advertisement</p>
              </div>


              
              
            </div>

          </div>
 
</>
  )
}

export default Bollywood;