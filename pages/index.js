import React from 'react'
import Carosel from "../components/ImageCarosel"
import FeaturedCarosel from '../components/FeaturedCarosel'
import MileStone from '../components/MileStone'
import TopProperties from '../components/TopProperties'
import StaticImage1 from '../components/StaticImage1'
import DhaCities from '../components/DhaCities'
import Team from "../components/Team"
import Testimonial from "../components/Testimonial"
import { useAppContext } from '../context/appContext'
const about = () => {
  let {WithoutFiltersPropertiesHandler}=useAppContext()
  React.useEffect(()=>{
      WithoutFiltersPropertiesHandler()
  },[])
  return (
    <div>
      <Carosel/>
      <FeaturedCarosel/>
      <MileStone/>
      <TopProperties/>
      <StaticImage1/>
      <DhaCities/>
      <Team/>
      <Testimonial/>
    </div>
  )
}

export default about
