import React from "react";
import './Footer.css' 
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Facebook from '../../img/Facebook.png'
import Linkdin from '../../img/linkedin.png'
import Logo from '../../img/logo.png'
import Wave from '../../img/wave.png';

const Footer=()=>{
    return(
        
        <div className="f-container">
            
  <hr />

 <div className="footer">
    <img src={Wave} alt="" className="img" style={{width:'100%'}} />
    <div className="f-content">
        eyathaddeus037@gmail.com
    
    <div className="social-links ">
    <img src={Github}alt="" />
    <img src={Instagram} alt="" />
    <img src={Facebook} alt="" />
    <img src={Linkdin} alt="" />
 </div>

 <div className="logo">
    <img className="log" src={Logo} alt="" />
 </div> 
 </div>
 </div>
 
        </div>
    )
}
export default Footer