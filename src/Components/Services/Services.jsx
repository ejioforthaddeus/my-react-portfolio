import React from "react";
import './Services.css'
import Glassemoji from '../../img/glasses.png'
import Heart from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from "../Card/Card";
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
 import { useContext } from "react";
 import {motion} from "framer-motion"

const Services=()=>{
    
    
    const transition={duration:2, type:'spring'}
    const theme=useContext(themeContext);
    const darkMood=theme.state.darkMood
    return(
        <div className="services">
           <div className="awesome">
          
                <span style={{color: darkMood? 'white':''}}>My  Awesome</span>
                <span>Service</span>
                <span style={{color: darkMood? 'white':''}}>tee code helps you to Go from no-code to an in-demand junior <br /> web developer,
at a fraction of the cost of a bootcamp. <br /> Start with the front-end by learning HTML,
CSS, and JavaScript. <br /> Then, master the back-end and APIs to round out your full-stack skills.</span>
          <a href={Resume} download>
                <button className="button s-button">Download cv</button></a>
                <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
           </div>
           <div className="Card">
           <motion.div 
           
           initial={{left:'-32%'}}
           whileInView={{left:'14rem'}}
           transition={transition}
            style={{left:'14rem'}}>
                
                <Card
               emoji={Heart}
               heading={'design'}
               detail={"UI,React,frontend"}/> 
           </motion.div>
           {/* second card */}
            <motion.div
            
            initial={{left:'-12%',top:'17%'}}
            whileInView={{left:'-4rem',top:'12rem'}}
            transition={transition}
            
            
            style={{left:"-4rem",top:"12rem"}}>
                <Card
               emoji={Glassemoji}
               heading={'developer'}
               detail={"Html,Css,Javascript,C"}/> 
           </motion.div>
           {/* third card */}
           <motion.div
           
           initial={{left:'-22%',top:'23rem'}}
           whileInView={{left:'12rem',top:'19rem'}}
           transition={transition}
           
           style={{left:'12rem',top:'19rem'}}>
                
                <Card
               emoji={Humble}
               heading={'design'}
               detail={"UI,UX"}/> 
           </motion.div>  
           <div className=" blur s-blur2" style={{background:"var(--purple)"}}></div>
           </div>
        </div>
    )
}
export default Services