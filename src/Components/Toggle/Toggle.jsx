import React from "react";
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons//icons/uil-moon'
import { themeContext } from "../../Context";
 import { useContext } from "react";
const Toggle=()=>{
    const theme=useContext(themeContext);
    const darkMood=theme.state.darkMood
    const handleClick=()=>{
        theme.dispatch({type:'toggle'})
    }
    return(
<div className="toggle"
    onClick={handleClick}>
    <Moon/>
    <Sun/>
    <div className="t-btn"
    
    style={darkMood?{left:'2px'}:{right:'2px'}} 
       >
     
    </div>
    
</div>
    )
}
export default Toggle