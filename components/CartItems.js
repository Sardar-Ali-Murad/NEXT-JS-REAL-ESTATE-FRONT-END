import React from 'react'
import CartItem from './CartItem'
import Link from "next/link"
import axios from "axios"
import { useAppContext } from '../context/appContext'
const CartItems = ({cart}) => {
    let {UOrders,stripe}=useAppContext()

    const clear=async ()=>{
      let {data}=await axios.delete("https://al-kabeer-real.onrender.com/api/v1/Orders/deleteAll",{withCredentials:true})
       UOrders() 
    }

    function stripeFunction(){
      stripe()
    }

  return (
    <div className='main-div-margins' >

    <div className='div-center-80  cart-main' >
        <div className='grid-even-3 cart-head'>
            <p>Item</p>
            <p>Quantity</p>
            <p>SubTotal</p>
        </div>
        <div className='line' style={{marginTop:"10px",marginBottom:"30px"}}></div>
      {
          cart?.map((all)=>{
            return <CartItem all={all} key={all?._id}/>
        })
      }
      
    </div>

    <div style={{display:"flex",justifyContent:"space-between"}} className="div-center-80 btns-main">
        {/* <Link href="/Properties"> */}
           <button className='shop-btn dark btn' onClick={stripeFunction}>Pay Now</button>
        {/* </Link> */}
        <button className='shop-btn dark btn' onClick={clear}>Clear Shopping Card</button>
    </div>
            </div>
  )
}

export default CartItems
