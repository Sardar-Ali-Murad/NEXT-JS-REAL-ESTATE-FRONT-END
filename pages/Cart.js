import React from 'react'
import { useAppContext } from '../context/appContext'
import Link from "next/link"
import CartItems from '../components/CartItems'
import PriceCard from '../components/PriceCard'


const Cart = () => {

  let props=useAppContext()

  React.useEffect(()=>{
    props.UOrders()
  },[])

  if(props.UserOrders.length===0){
    return(
         <div className='div-perfect-center ' style={{paddingBottom:"200px",zIndex:"100", 
          padding:"20px",borderRadius:"20px",backdropFilter:"blur(20px)"}}>
        <h4 className='text-white' style={{color:"black"}}>Your Cart Is Empty </h4>
        <Link href="/Properties" style={{color:"black"}} className="text-center">
           <button className='shop-btn dark btn text-center' style={{marginLeft:"50%",transform:"translateX(-50%)"}}>Fill No</button>
        </Link>
    </div> 
        )
}

  return (
    <div>
      <CartItems cart={props.UserOrders}/>
      {
        props.isLoading && <h1 style={{textAlign:"center"}} className="my-[40px]">Loading...</h1>
      }
      <PriceCard cart={props.UserOrders}/>
    </div>
  )
}

export default Cart
