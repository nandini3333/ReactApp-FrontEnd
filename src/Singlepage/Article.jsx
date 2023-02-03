import {useParams, useLocation} from "react-router-dom";
import profile from "../Images/profile.png"
import "./Article.css"
import { useNavigate } from "react-router-dom";


const ArticleContent = () =>{
    const param = useParams();
    const location = useLocation();
    console.log(param);
    console.log(location);
   const  navigate = useNavigate();
    const goback = () =>{
        navigate(-1);
    }

    return(
        <>
        <div className="article">
            <div className="top1">
               <p className="the1">The</p> 
               <p className="siren1">Siren</p> 
               <button className="get">Get Started</button>
            </div>
        </div>
        
<div className="body1">
    <h2 className="titleofart">{location.state.title}</h2>
    <img src={profile} alt={"profile pic"}/>
    <h4 className="authorname">{location.state.author}</h4>{" "}
    <span className="lastread"> Jan-28,2023 10mins read</span>

    <span className="socialmedia">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook" ></i>
        <i className="fa-brands fa-whatsapp" ></i>
        <i className="fa-brands fa-twitter" ></i>
        
    </span>


    <img className="urlimage" src={location.state.urlToImage} alt={"images"}/>
    <p className="contentfull">
        {location.state.content}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam nulla vitae.
         Nostrum voluptas odit ad minima deleniti voluptatum fugiat suscipit. Sint natus
          tempora quisquam, labore eveniet ad quos officiis?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam nulla vitae.
         Nostrum voluptas odit ad minima deleniti voluptatum fugiat suscipit. Sint natus
          tempora quisquam, labore eveniet ad quos officiis?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam nulla vitae.
         Nostrum voluptas odit ad minima deleniti voluptatum fugiat suscipit. Sint natus
          tempora quisquam, labore eveniet ad quos officiis?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam nulla vitae.
         Nostrum voluptas odit ad minima deleniti voluptatum fugiat suscipit. Sint natus
          tempora quisquam, labore eveniet ad quos officiis?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam nulla vitae.
         Nostrum voluptas odit ad minima deleniti voluptatum fugiat suscipit. Sint natus
          tempora quisquam, labore eveniet ad quos officiis?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam nulla vitae.
         Nostrum voluptas odit ad minima deleniti voluptatum fugiat suscipit. Sint natus
          tempora quisquam, labore eveniet ad quos officiis?
    </p>

    <h4>FOR MORE INFORMATION CLICK ON BELOW LINK:
<a href={location.state.url}>Click Me</a>
<br />
<br />

</h4>


<button  onClick={goback}className="back">Go Back</button>
</div>

        
        </>
    )
}
export default ArticleContent;