import React from 'react'
import Planer1 from "../utils/img/bwp.jpg"
import Planer2 from "../utils/img/isl.jpeg"
import Planer3 from "../utils/img/kr.jpg"
import Planer4 from "../utils/img/lh.jpg"
import Planer5 from "../utils/img/mul.jpg"
import { motion } from 'framer-motion';
import {fadeIn, navVariants, slideIn} from "../utils/frameMotion"
import TypingText from "./TypingText"
import Image from "next/image"

let arr=[{name:"DHA BWP",pic:Planer1},{name:"DHA LH",pic:Planer2},{name:"DHA ISL",pic:Planer3},{name:"DHA KR",pic:Planer4},{name:"DHA ML",pic:Planer5},]


const Worlds = () => {
    let [active,setActive]=React.useState(0)
  return (
    <div className='world-main my-[50px]'>
      <div className='text-center'><TypingText text="The Cities!"/></div>

      <h3 className='text-center form-font' style={{color:"white"}}>Choose the city you want to explore</h3>
      <div className='div-center-80  image-gallery'>
         {
            arr.map((all,index)=>{
                return <motion.div key={all?.name}  initial="hidden" whileInView="show"  variants={fadeIn('right', 'tween', index*.3, 1)} onClick={()=>setActive(index)} className={`single-image-gallery ${active===index?"active-one":"simple-one"}`}>
                    <Image alt="Image" src={all.pic}/>
                    <h3 className='label'>{all?.name}</h3>
                </motion.div>
            })
         }
      </div>
    </div>
  )
}

export default Worlds
