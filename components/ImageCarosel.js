import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

import {useAppContext}  from "../context/appContext"

export default function App() {
    let {PropertiesWithoutFilters}=useAppContext()
    // React.useEffect(()=>{
    //     WithoutFiltersPropertiesHandler()
    // },[])
  return (
    <>
      <Swiper className="mySwiper"
             modules={[Navigation, Pagination, Autoplay]}
             slidesPerView={1}
            //  slide
             navigation
             autoplay={{ delay: 2000 }}
             pagination={{ clickable: true }}
            //  spaceBetween={300}
      >
        {
            PropertiesWithoutFilters.slice(2).map((product)=>{
                return <SwiperSlide key={product?._id}>
                     <Image src={product?.image} style={{height:"80vh",objectFit:"cover"}} unoptimized={true} priority height={100} width={100} alt="Image"/>
                </SwiperSlide>
            })
        }
      </Swiper>
    </>
  );
}
