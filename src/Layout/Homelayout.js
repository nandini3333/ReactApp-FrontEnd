import "./Homelayout.css"
// import arrow from "../Images/arrow.svg"
import "./Homecontent.css"
import { useNavigate } from "react-router-dom";

const Homelayout = (props) =>{
    const navigate = useNavigate();
    const {Apidata} = props;

    const handleNavigationhome = (item,index) =>{
        console.log(item);
        console.log(`/home/a/${index}`);
         navigate(`/home/a/${index}`, {state:item});
    }  
    return(
        <>
<div className="main3">
<div className="main-left">
{Apidata.slice(9,10).map((item8,index8)=>{
                    return(
                    <div  key={index8}>
                         <img className="img-sizeab" 
                         onClick={()=> handleNavigationhome(item8,index8)}
                         src={item8.urlToImage} alt={"images"}/> 
                    <div className="contentab">
                        <h3 id="titleab">{item8.title}</h3><br/>
                         
                         <p id="lastab">{item8.publishedAt}</p>
                    </div>
                    </div>)
                })}

</div>
<div className="main-right">
    <div className="right1">
    {Apidata.slice(9,10).map((item9,index9)=>{
                    return(
                    <div  key={index9}>
                         <img className="img-sizeabb" 
                         onClick={()=> handleNavigationhome(item9,index9)}
                         src={item9.urlToImage} alt={"images"}/> 
                    <div className="contentabb">
                        <h3 id="titleabb">{item9.title}</h3><br/>
                         <p className="hamsa">{item9.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>

    <div className="right2">
    {Apidata.slice(7,8).map((item,index)=>{
                    return(
                    <div  key={index}>
                        <img className="img-size11" 
                        onClick={()=> handleNavigationhome(item,index)}
                        src={item.urlToImage} alt={"images"}/>
                    <div className="content11">
                        <h3 id="title11">{item.title}</h3><br/>
                         
                         <p id="last11">{item.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
    
</div>
</div>


<div className='latest'>The Latest<div className='unred01'>______</div></div> 

<div className="latestart">
    <div className="latest1">
    {Apidata.slice(7,8).map((item,index)=>{
                    return(
                    <div  key={index}>
                        <img className="img-size13" 
                        onClick={()=> handleNavigationhome(item,index)}
                        src={item.urlToImage} alt={"images"}/>
                    <div className="content13">
                        <h3 id="title13">{item.title}</h3><br/>
                         <p id="middle13"> {item.content}</p>
                         <p id="last13">{item.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
    <div className="latest2">
    {Apidata.slice(8,9).map((item,index)=>{
                    return(
                    <div  key={index}>
                        <img className="img-size23" 
                        onClick={()=> handleNavigationhome(item,index)}
                        src={item.urlToImage} alt={"images"}/>
                    <div className="content23">
                        <h3 id="title23">{item.title}</h3><br/>
                         <p id="middle23"> {item.content}</p>
                         <p id="last23">{item.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
    <div className="latest3">
    {Apidata.slice(9,10).map((item,index)=>{
                    return(
                    <div  key={index}>
                        <img className="img-size33" 
                        onClick={()=> handleNavigationhome(item,index)}
                        src={item.urlToImage} alt={"images"}/>
                    <div className="content33">
                        <h3 id="title33">{item.title}</h3><br/>
                         <p id="middle33"> {item.content}</p>
                         <p id="last33">{item.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
</div>

<div className="latestarticles">
Latest Articles<div className='unred2'>______</div>
</div>


<div className="mid-main">
    <div className="mid-left">
        <div className="mid-left1">
        {Apidata.slice(14,18).map((item7,index7)=>{
                    return(
                    <div className="mid-left1" key={index7}>
                        <img className="img-size41" 
                        onClick={()=> handleNavigationhome(item7,index7)}
                        src={item7.urlToImage} alt={"images"}/>
                    <div className="content41">
                        <h3 id="title41">{item7.title}</h3><br/>
                         <p id="middle41"> {item7.content}</p>
                         <p id="last41">{item7.publishedAt}</p>
                    </div>
                    </div>)
                })}

        </div>
{/* <div className="mid-left2">
    <img src={arrow.svg} alt={"downarrow"}/>
    LOAD MORE</div> */}

    <div className="mid-left3">
    {Apidata.slice(9,10).map((item6,index6)=>{
                    return(
                    <div  key={index6}>
                         <img className="img-sizebb" 
                         onClick={()=> handleNavigationhome(item6,index6)}
                         src={item6.urlToImage} alt={"images"}/> 
                    <div className="contentbb">
                        <h3 id="titlebb">{item6.title}</h3><br/>
                         
                         <p id="lastbb">{item6.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
    </div>


    <div className="mid-right">
    <div className="mid-right1">
        <p className="add1">Advertisement</p></div>
    <div className="mid-right2">
    Top Posts<div className='unred3'>______</div>
    </div>
    <div className="mid-right3">
    {Apidata.slice(14,15).map((item5,index5)=>{
                    return(
                    <div key={index5}>
                        <img className="img-size88" 
                        onClick={()=> handleNavigationhome(item5,index5)}
                        src={item5.urlToImage} alt={"images"}/>
                    <div className="content88">
                        <h3 id="title88">{item5.title}</h3><br/>
                         
                         <p id="last88">{item5.publishedAt}</p>
                    </div>
                    </div>)
                })}
    </div>
    <div className="mid-right4">
    {Apidata.slice(14,16).map((item5,index5)=>{
                    return(
                    <div className="mid-right4" key={index5}>
                        <img className="img-size89" 
                        onClick={()=> handleNavigationhome(item5,index5)}
                        src={item5.urlToImage} alt={"images"}/>
                    <div className="content89">
                        <h3 id="title89">{item5.title}</h3><br/>
                        
                         <p id="last89">{item5.publishedAt}</p>
                    </div>
                    </div>)
                })}
    </div>
    </div>
</div>

<div className="lasttext">Latest Articles
<div className='unred4'>______</div></div>

<div className="last">
    <div className="last1">

    {Apidata.slice(14,15).map((item3,index3)=>{
                    return(
                    <div key={index3}>
                        
                    <div className="contentz1" 
                    onClick={()=> handleNavigationhome(item3,index3)}
                    >
                        <h3 id="titlez1">{item3.title}</h3><br/>
                        <p id="middlez1"> {item3.content}</p>
                         <p id="lastz1">{item3.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
    <div className="last2">
    {Apidata.slice(14,15).map((item3,index3)=>{
                    return(
                    <div  key={index3}>
                        
                    <div className="contentz1"
                    onClick={()=> handleNavigationhome(item3,index3)}
                    >
                        <h3 id="titlez1">{item3.title}</h3><br/>
                        <p id="middlez1"> {item3.content}</p>
                         <p id="lastz1">{item3.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
    <div className="last3">
    {Apidata.slice(14,15).map((item3,index3)=>{
                    return(
                    <div  key={index3}>
                        
                    <div className="contentz1"
                    onClick={()=> handleNavigationhome(item3,index3)}
                    >
                        <h3 id="titlez1">{item3.title}</h3><br/>
                        <p id="middlez1"> {item3.content}</p>
                         <p id="lastz1">{item3.publishedAt}</p>
                    </div>
                    </div>)
                })}

    </div>
    
</div>

{/* <div className="view">VIEW MORE
<img src={arrow.svg} alt={"rightarrow"}/></div> */}
</>
    )
}
export default Homelayout;