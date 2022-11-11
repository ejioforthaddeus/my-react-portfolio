import React from "react";
import './Portfolio.css'
import Cap1 from "../../img/cap1.PNG";
import Cap2 from "../../img/cap2.PNG";
import Cap3 from "../../img/cap3.PNG";
import Cap5 from "../../img/cap5.PNG";
 import {Swiper,SwiperSlide} from 'swiper/react'
 import 'swiper/css'
const Portfolio=()=>{
    return(
        <div className="porfolio">
            {/* heading */}
            <span>Recent projets</span>
            <span>Portfolio</span>
 {/* slide */}
 <Swiper
 spaceBetween={30}
 slidesPerView={3}
 grabCursor={true}
 className="porfolio-slider">
    <SwiperSlide>
        <img src={Cap1} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Cap2} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Cap3} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={Cap5} alt="" />
    </SwiperSlide>
 </Swiper>
        </div>
    )
}
export default Portfolio