import React from "react";
import './Work.css'
import Upwork from '../../img/Upwork.png'
import fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from "../../Context";
 import { useContext } from "react";
 import {motion} from 'framer-motion'
 const Work=()=>{
    const theme=useContext(themeContext);
    const darkMood=theme.state.darkMood
    return(
        <div className="work">
<div className="awesome">
          
          <span style={{color: darkMood? 'white':''}}>My  Works for all these </span>
          <span>Brands & clients</span>
          <span style={{color: darkMood? 'white':''}}>tee code helps you to Go from no-code to an in-demand junior <br /> web developer,
at a fraction of the cost of a bootcamp. <br /> Start with the front-end by learning HTML,
CSS, and JavaScript. <br /> Then, master the back-end and APIs to round out your full-stack skills.</span>
    
          <button className="button s-button">Hire me</button>
          <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
    </div>
    <div className="w-right">
        <motion.div
        
        initial={{rotate:90}}
        whileInview={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'string'}}
        className="w-mc">
        <div className="w-secC">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secC">
                <img src={fiver} alt="" />
            </div>
            <div className="w-secC">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secC">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secC">
                <img src={Facebook} alt="" />
            </div>
        </motion.div>
        <div className="w-backCircle w-bCircle"></div>
        <div className="w-backCircle w-yCircle"></div>
    </div>
        </div>
    )
 }
 export default Work