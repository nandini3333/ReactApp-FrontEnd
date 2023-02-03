import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Bollywood from "../Pages/Bollywood"
import Technology from "../Pages/Technology"
import Hollywood from "../Pages/Hollywood"
import Food from "../Pages/Food"
 import Fitness from "../Pages/Fitness"
 import ArticleContent from "../Singlepage/Article"
 import Homearticle from "../Singlepage/Homearticle"



function RouterComponent(){
  return(
  
  <BrowserRouter>
      <Routes>
      
        <Route path="/" exact element = {<Home/>}/>  
        <Route path="/home" element = {<Home/>}/>
        <Route path="/bollywood" element = {<Bollywood/>}/>
        <Route path="/technology" element = {<Technology/>}/>
        <Route path="/hollywood" element = {<Hollywood/>}/>
        <Route path="/fitness" element = {<Fitness/>}/>
        <Route path="/food" element = {<Food/>}/> 
      

        <Route path="/bollywood/a/:id" element={<ArticleContent />} />
        <Route path="/technology/a/:id" element={<ArticleContent />} />
        <Route path="/hollywood/a/:id" element={<ArticleContent />} />
        <Route path="/fitness/a/:id" element={<ArticleContent />} />
        <Route path="/food/a/:id" element={<ArticleContent />} />
        <Route path="/home/a/:id" element={<Homearticle />} />

        
         
      </Routes>
    </BrowserRouter>
    )
}

export default RouterComponent;