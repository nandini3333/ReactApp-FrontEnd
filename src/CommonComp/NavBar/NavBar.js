import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <>

            <div className='topnav'>
                <Link to={"/home"} className='li'>Home</Link>
                <Link to={"/bollywood"} className='li'>Bollywood</Link>
                <Link to={"/technology"} className='li'>Technology</Link>
                <Link to={"/hollywood"} className='li'>Hollywood</Link>
                <Link to={"/fitness"} className='li'>Fitness</Link>
                <Link to={"/food"} className='li'>Food</Link>
            </div>


        </>
    )
}

export default NavBar