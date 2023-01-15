import React from 'react'
import Link from 'next/link'
import {ImCross}  from "react-icons/im"
const orderFailure = () => {
  return (
    <div class="bg-brown-800 min-h-[100vh]" style={{minHeight:"100vh",background:"brown"}}>
      <div class="bg-[#d99494] p-6  md:mx-auto">
        <ImCross className="text-red-50" style={{fontSize:"40px",color:"red"}}/>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-black-50 font-semibold text-center form-font" style={{color:"black"}}  >Payment Failure!</h3>
            <p class="text-gray-600 my-2 label" style={{color:"black"}}>Some Error Occured. Try Few Minutes Later!</p>
            <p className='label' style={{color:"black"}}> Have a great day!  </p>
            <div class="py-10 text-center">
                <Link href="/" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 label">
                    GO BACK 
               </Link>
            </div>
        </div>
    </div>
  </div>
  )
}

export default orderFailure
