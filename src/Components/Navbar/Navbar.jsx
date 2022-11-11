import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css'
import Logo from '../../img/logo.png'



const Navbar=()=>{

    return(
        <div className="n-wrapper">
           <div className="n-left">
            <div className="name"><img src={Logo} alt="" srcset="" /></div>
            <Toggle/>
           </div>
           <div className="n-right"><div className="n-list">
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Tortfolio</li>
                <li>Testimonials</li>
            </ul>
         </div>
         <button className="button n-button"> Contact</button>
         </div>
        </div>
    )
}
export default Navbar