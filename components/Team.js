import {useAppContext}  from "../context/appContext"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from 'swiper';
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay ,Navigation } from "swiper";


import {team} from "../utils/data"

const Team = () => {
    let {WithoutFiltersPropertiesHandler}=useAppContext()
    React.useEffect(()=>{
        WithoutFiltersPropertiesHandler()
    },[])
    
  return (

    <div className="div-center-80 my-[40px]">

      <h1 className='label text-center'>Meet Our Agents</h1>
      <p className='form-font text-center mb-[30px]'>Our Agents are specialized in both filed rental and nonrental properties including some of the finest properties ranging from magnificent estate properties to modern apartments..</p>

    
    
    <Swiper
    // slidesPerView={3}
    spaceBetween={30}
    freeMode={true}
    modules={[Navigation, Pagination, Autoplay,FreeMode,]}
    // slide
    navigation
    autoplay={{ delay: 2000 }}
    className="mySwiper"
    breakpoints={{
        576: {
            width: 576,
            slidesPerView: 2,
        },
        450: {
            width: 450,
            slidesPerView: 1,
        },
        768: {
          width: 900,
          slidesPerView: 2,
        },
    }}
    >

    {
        team.map((member)=>{
            return <SwiperSlide key={member?.name}>
                  <div>
      <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
    <Image className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={member.img} alt="Image" style={{height:"150px",width:"150px",borderRadius:"50%",marginTop:"12px",color:"black"}} height={100} width={100}/>
     <div className="text-center mt-2 text-3xl font-medium label text-black" style={{color:"black"}}>{member.name}</div>
     <div className="text-center mt-2 font-light text-sm form-font">{member.smallText}</div>
     <div className="text-center font-normal text-lg label" style={{color:"black"}}>{member.smallText2}</div>
     <div className="px-6 text-center mt-2 font-light text-sm">
       <p className="label" style={{color:"black"}}>
         {member.longText}
       </p>
     </div>
     <hr className="mt-8"/>
     <div className="flex p-4">
         <div className="w-1/2 text-center">
         <span className="font-bold label" style={{color:"black"}}>{member.phoneNo}</span> 
       </div>
       <div className="w-0 border border-gray-300">
         
       </div>
       <div className="w-1/2 text-center">
         <span className="font-bold form-font">{member.email}</span> 
       </div>
     </div>
  </div>
</div>
            </SwiperSlide>
        })
    }

    </Swiper>

    </div>
  
  )
}

export default Team
