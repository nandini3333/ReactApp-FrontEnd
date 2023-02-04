import "../style/Subhead.css"
import "./Layout.css"
// import arrow from "../Images/arrow.svg"
import { useNavigate } from "react-router-dom";


const Layout = (props)=>{
  const navigate = useNavigate();
    const {name,Apidata} = props;

    const handleNavigation = (item,index) =>{
      console.log(item);
      console.log(`/${name}/a/${index}`);
       navigate(`/${name}/a/${index}`, {state:item});
   
    }
    return(
      <>
       <div className='Subhead'>{name}<span className='unred'>______</span>
</div>

<div className='container'>
            <div className='child1'>
              <div className='one'>
                {Apidata.slice(10,19).map((item,index)=>{
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
              {Apidata.slice(12,13).map((item1,index1)=>{
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
              {Apidata.slice(13,16).map((item2,index2)=>{
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
                    <h1>2</h1>  
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
export default Layout;