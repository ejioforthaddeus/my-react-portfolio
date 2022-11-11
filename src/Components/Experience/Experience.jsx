import React from "react";
import './Experience.css'
import { themeContext } from "../../Context";
 import { useContext } from "react";

const Experience=()=>{
  const theme=useContext(themeContext);
  const darkMood=theme.state.darkMood
    return(
        <div className="experience">
          <div className="acheve">
            <div className="circle">2+</div>
            <span>years</span>
            <span>experience</span>
          </div>
          <div className="acheve">
            <div className="circle">20+</div>
            <span>completed</span>
            <span>projects</span>
          </div><div className="acheve">
            <div className="circle">2+</div>
            <span>companies</span>
            <span>work</span>
          </div>
        </div>
    )
}
export default Experience