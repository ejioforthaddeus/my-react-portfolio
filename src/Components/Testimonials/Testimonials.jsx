import React from "react";
import'./Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import image1 from "../../img/profile.jfif";
import image2 from "../../img/eji.jpg";
import image3 from "../../img/pablo4.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination'
import 'swiper/css'



const Testimonial=()=>{
  const  clients=[
    {
        img: image1,
        review:
          "tee code helps you to Go from no-code to an in-demand junior web developer  ",
        name: 'master clem',
        status : 'ENTREPRENEUR software engineer'
      },
      {
        img: image2,
        review: 'i design any frontend website and also develope website too',
        name: 'Thade',
        status: 'webdeveloper'
      },
      {
        img : image3,
        review:'am your best friend too ❤️and ........freelance is available',
        name: 'thade',
        status: "frontend developer"
      }
    ];
    
    return(
        <div className="testimonials">
            <div className="t-heading">
                <span>Clients</span>
                <span>Says</span>
                <span>About me</span>
                <div className="blur t-blur" style={{background:"#ABF1FF94"}}></div>
           <div className=" blur t-blur2" style={{background:"var(--purple)"}}></div>
            </div>
            {/* swiper slide */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            Pagination={{clickable:true}}>
{clients.map((clients,index)=>{
    return(
        <SwiperSlide key={index}>
            <div className="Testiomony"><img src={clients.img} alt="" />
            <span>{clients.review}</span>
            <span>{clients.name}</span>
            <span>{clients.status}</span></div>
        </SwiperSlide>
    )
})}
            </Swiper>
        </div>
    )
}
export default Testimonial