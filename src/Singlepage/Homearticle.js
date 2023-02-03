import {useParams, useLocation} from "react-router-dom";
import profile from "../Images/profile.png"
import "./Homearticle.css"
import { useNavigate } from "react-router-dom";

const Homearticle = () =>{
    const param = useParams();
    const location = useLocation();
    console.log(param);
    console.log(location);
   const  navigate = useNavigate();
    const gobackhome = () =>{
        navigate(-1);
    }

    return(
        <>
        <div className="articlehome">
            <div className="top1home">
               <p className="the1home">The</p> 
               <p className="siren1home">Siren</p> 
               <button className="gethome">Get Started</button>
            </div>
        </div>
        
<div className="body1home">
    <h2 className="titleofarthome">{location.state.title}</h2>
    <img src={profile} alt={"profile pic"}/>
    <h4 className="authornamehome">{location.state.author}</h4>{" "}
    <span className="lastreadhome"> Jan-28,2023 10mins read</span>

    <span className="socialmedia">
        <i className="fa-brands fa-facebook" ></i>
        <i className="fa-brands fa-whatsapp" ></i>
        <i className="fa-brands fa-instagram" ></i>
        <i className="fa-brands fa-twitter" ></i>
    </span>


    <img className="urlimagehome" src={location.state.urlToImage} alt={"images"}/>
    <p className="contentfullhome">
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


<button  onClick={gobackhome}className="backhome">Go Back</button>
</div>

        
        </>
    )
}
export default Homearticle;