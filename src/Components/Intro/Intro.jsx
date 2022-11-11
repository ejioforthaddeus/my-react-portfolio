import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Linkdin from '../../img/linkedin.png'
import Instrgram from '../../img/instagram.png'
import Boy from '../../img/eji.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Glassemoji from '../../img/glassesimoji.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
 import { useContext } from "react";
 import {motion} from 'framer-motion'
const Intro=()=>{
    const theme=useContext(themeContext);
    const darkMood=theme.state.darkMood
    const transition={duration:2, type:'spring'}
    return(
        <div className="intro">
            <div className="i-left"><div className="i-name">
                <span style={{color: darkMood? 'white':''}}>hey! i`m</span>
                <span> Thaddeus</span>
                <span style={{color: darkMood? 'white':''}}>Front end developer,with high level of experience in web designing and development,producing the quaility work</span>
                </div>
                <button className="button i-button">hire me</button>
                <div className="i-icon">
                    <a href="">
                    <img src={Github} alt="" /></a>
                    <a href="">
                    <img src={Linkdin} alt="" /></a>
                    <a href=""></a>
                    <img src={Instrgram} alt="" />
                    </div></div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img width={240}  src={Boy} alt="" />
                
                <motion.img 
                initial={{left:'-32%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                
                src={Glassemoji} alt="" />
                <motion.div
                initial={{left:'74%',top:'-4%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                
                style={{top:'-4%',left:'68%'}}
                className="f-div">
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                initial={{top:'18rem',left:'9rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                
                
                style={{top:'18rem',left:'0rem'}}
                className="f-div">
                    <FloatingDiv image={Thumbup} txt1='UI' txt2='Designer'/></motion.div>
                    {/* blur div */}
                    <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
                    <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',hight:'11rem',left:'-9rem'}}></div>
                    </div> 
        </div>
    )
}
export default Intro