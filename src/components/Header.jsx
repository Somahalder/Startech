import React, { useState } from 'react'
import { Link} from "react-router-dom";
import{ HashLink} from"react-router-hash-link";
import { FaBars , FaTimes} from "react-icons/fa";


const Header = () => {

    const [ click , setClick ] = useState(false);
    const handleClick = ()=> setClick (!click);

  return (
    <nav>
        <h1> Star <span> tech</span></h1>

        <ul className={click?"nav-menu active" :"nav-menu"}>
        
        <li> <HashLink to = {"/#home"}> Home </HashLink></li>
        <li> <Link to = {"/contact"}> Contact</Link></li>
        <li> <HashLink to = {"/#about"}> About</HashLink></li>
        <li> <HashLink to = {"/#brands"}> Brands </HashLink></li>
        <li> <Link to = {"/services"}> Services </Link></li>

        </ul>

        <div className="hamburger" onClick={handleClick}>

        {click?  ( <FaTimes fontSize = {20} style ={{ color: "#fff"}} />) 
           :(<FaBars fontSize = {20} style ={{ color: "#fff"}} />)}
        </div>
      
    </nav>
  )
}

export default Header
