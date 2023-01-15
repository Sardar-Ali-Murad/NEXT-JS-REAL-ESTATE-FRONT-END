import React from 'react'
import {AiOutlineMinus}  from "react-icons/ai"
import {AiOutlinePlus}  from "react-icons/ai"
import {FcDeleteColumn}  from "react-icons/fc"
import { useAppContext } from '../context/appContext'
import axios from 'axios'

const CartItem = ({all}) => {
   let {UOrders}=useAppContext()
   const [count,setCount]=React.useState(all?.quantity)
   
   function minus(){
       let num=count-1
       if(num<1){
          setCount(count)
       }
       else{
          setCount((pre)=>pre-1)
       }
    }
   
    function plus(){
      let num=count+1
      if(num>10){
         setCount(count)
      }
      else{
         setCount((pre)=>pre+1)
      }
    }

    React.useEffect(()=>{
      const start=async ()=>{
         let {data}=await axios.patch(`https://al-kabeer-real.onrender.com/api/v1/Orders/${all._id}`,{quantity:count},  {withCredentials:true})
      }
       start()
      UOrders()
    },[count])


    const del=async ()=>{
     let {data}=await axios.delete(`https://al-kabeer-real.onrender.com/api/v1/Orders/${all?._id}`,{withCredentials:true})
     UOrders()
    }

  return (
    <div style={{display:"flex"}}>

        <div className='grid-even-3' style={{marginBottom:"100px",width:"100%"}}>

            <div className='cart-flex'>

                 <div style={{display:"flex",gap:"30px"}}>
                    <img style={{height:"50px",width:"50px",borderRadius:"50%"}} className='cart-img' src={all?.product.image}/>
                    <div>
                        <h7 className="roboto" style={{margin:"0px"}}>{all?.product.name}</h7>
                        <div  style={{display:"flex",gap:"5px"}}><p>Color:</p>  <div className='color'style={{background:all?.color,height:"20px",width:"20px",borderRadius:"50%",marginTop:"5px"}}></div></div>
                    </div>
                 </div>

                 <p style={{color:"brown",margin:"0px"}}>${all?.product.price}</p>

            </div>
                 <div style={{display:"flex",gap:"30px"}}>
                       <AiOutlineMinus className='minus' onClick={minus} style={{fontSize:'20px'}}/>
                       <h4>{all?.quantity}</h4>
                       <AiOutlinePlus className='plus' onClick={plus} style={{fontSize:'20px'}}/>
                  </div>

                  <h5>${all?.product.price * all?.quantity}</h5>
                  {/* <div className='line' style={{width:"100%"}}></div> */}
            </div>
                  <FcDeleteColumn onClick={del} style={{fontSize:'30px',cursor:"pointer"}}/>
    </div>
  )

}

export default CartItem
