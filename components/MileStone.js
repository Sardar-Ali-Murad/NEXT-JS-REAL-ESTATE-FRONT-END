import React from 'react'
import {BiBuilding}  from "react-icons/bi"
import {FaRegHandScissors}  from "react-icons/fa"
import {SlLike} from "react-icons/sl"
import {IoPersonOutline} from "react-icons/io5"

const MileStone = () => {
  return (
    <div className='div-center-80'>
       <h1 className='label text-center'>Milestones</h1>
      <p className='form-font text-center mb-[30px]'>
      With our expertise in real estate, entrepreneurship, technology, and more, our leaders have the tools to clear a path toward success. We are always available for your success in every real estate deal. Sk Builder will always stay connected for any demand or sale of your properties.
    </p>

    <div className='grid-even-4 my-[40px] milestone' >

       <div style={{background:"#e16a6a",textAlign:"center",borderRadius:"20px"}} className="p-[20px]">
           <BiBuilding style={{fontSize:"50px" }} className="my-[20px] text-center div-center ml-[50%]"/>
           <h1 className='label'>341</h1>
           <p className='form-font text-white'>Total Properies</p>
      </div>
       <div  style={{background:"#e16a6a",textAlign:"center",borderRadius:"20px"}} className="p-[20px]">
           <FaRegHandScissors style={{fontSize:"50px" }} className="my-[20px] text-center div-center ml-[50%] "/>
           <h1 className='label'>312</h1>
           <p className='form-font text-white'>Happy Clients</p>
      </div>
       <div  style={{background:"#e16a6a",textAlign:"center",borderRadius:"20px"}} className="p-[20px]">
           <SlLike style={{fontSize:"50px" }} className="my-[20px] text-center div-center ml-[50%] "/>
           <h1 className='label'>312</h1>
           <p className='form-font text-white'>Successfull Deals</p>
      </div>
       <div  style={{background:"#e16a6a",textAlign:"center",borderRadius:"20px"}} className="p-[20px]">
           <IoPersonOutline style={{fontSize:"50px" }} className="my-[20px] text-center div-center ml-[50%] "/>
           <h1 className='label'>111</h1>
           <p className='form-font text-white'>Our Teams</p>
      </div>

    </div>

    </div>
  )
}

export default MileStone
