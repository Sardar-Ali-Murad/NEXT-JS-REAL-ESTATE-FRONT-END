import React from 'react'
import CustomFurniture from "../components/CustomFurniture"
import HomeFront from "../components/HomeFront"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import NewsLetter from "../components/NewsLetter"
const index = () => {
  
  return (
    <div>
        <HomeFront/>
      <Featured/>
      <CustomFurniture/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default index
