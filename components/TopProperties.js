import {useAppContext}  from "../context/appContext"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";


// import required modules
import { FreeMode, Pagination, Autoplay ,Navigation } from "swiper";



const FeaturedCarosel = () => {
    let {PropertiesWithoutFilters}=useAppContext()
    // React.useEffect(()=>{
    //     WithoutFiltersPropertiesHandler()
    // },[])
  return (
    <div className='div-center-80 my-[40px]'>
      <h1 className='label text-center'>
Top Properties
</h1>
      <p className='form-font text-center mb-[30px]'>

Real estate is one of the most competitive industries in the world. It’s also one of the most progressive industries in the world. It’s projected to be a$ 200 billion in assiduity by 2022, according to Forbes. Real estate can be a profitable and satisfying career if you know what you are doing. But it’s not for everyone. You need specific chops, knowledge, and experience before taking on this career path.
</p>

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
            PropertiesWithoutFilters.slice(2,12).map((product)=>{
                return <SwiperSlide key={product?._id}>
                    <div>
                        <div className="relative">
                           <Image src={product?.image} style={{height:"45vh",objectFit:"cover"}} unoptimized={true} priority height={100} width={100} alt="Image"/>
                           <p className="form-font absolute top-[30px] text-black bg-brown-300 p-[4px] left-[20px]" style={{color:"white",background:"brown"}} >FEATURED</p>
                           
                          <div className="right-[20px] bottom-[30px] absolute">
                           <p className="form-font  text-black bg-brown-300 p-[4px] "  style={{color:"white",background:"brown"}}>{product?.category}</p>
                           <p className="form-font text-white" style={{textShadow:'2px 2px 2px brown'}}>{product.name}</p>
                           <p className="form-font text-white" style={{textShadow:'2px 2px 2px brown'}}>${product.price}/mo</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper>

      {/* The Second Swipper */}

      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, Pagination, Autoplay,FreeMode,]}
        // slide
        navigation
        autoplay={{ delay: 3000 }}
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
            PropertiesWithoutFilters.slice(13).map((product)=>{
                return <SwiperSlide key={product?._id}>
                    <div>
                        <div className="relative">
                           <Image alt="Image" src={product?.image} style={{height:"45vh",objectFit:"cover"}} unoptimized={true} priority height={100} width={100}/>
                           <div>
                              <p className="form-font absolute top-[30px] text-black bg-brown-300 p-[4px] left-[20px]" style={{color:"white",background:"brown"}} >Featured</p>
                           </div>

                          <div className="right-[20px] bottom-[30px] absolute">
                           <p className="form-font  text-black bg-brown-300 p-[4px] "  style={{color:"white",background:"brown"}}>{product?.category}</p>
                           <p className="form-font text-white" style={{textShadow:'2px 2px 2px brown'}}>{product.name}</p>
                           <p className="form-font text-white" style={{textShadow:'2px 2px 2px brown'}}>${product.price}/mo</p>
                          </div>

                        </div>
                     {/*  */}
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper>

    </div>
  )
}

export default FeaturedCarosel
