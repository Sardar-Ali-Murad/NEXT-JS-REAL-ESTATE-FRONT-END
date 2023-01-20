import React from 'react'
import Footer from "../../components/Footer"
import Alert from "../../components/Alert"

import {TiTickOutline}  from "react-icons/ti"
import {AiOutlineMinus}  from "react-icons/ai"
import {AiOutlinePlus}  from "react-icons/ai"
import { useAppContext } from '../../context/appContext';
import { useRouter } from 'next/router';

import Rating from '@mui/material/Rating';


const Property = (props) => {
     let {user,createOrder,showAlert}=useAppContext()
     let router=useRouter()
     const [color, setColor] = React.useState(props.posts.Property.colors[0]);
     const [count,setCount]=React.useState(1)

     
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


   function cartHandler(){
    if(user===null){
      router.push("/Register")
    }      
    else{
     createOrder({quantity:count,color:color,product:router.query.Property})
    }
   } 
   
   
 
   return (
      <div>
     <div className="grid-even-2 single-product-main div-center-80 main-div-margins">
        <div className='p-img'>
               <div>
                  <img style={{height:"80%",width:"100%"}} src={props.posts.Property?.image}/>
               </div>
               <div >
               </div>
               <div style={{display:"flex",gap:"30px",alignItems:"center"}}>
                  <h1 style={{marginTop:"10px"}}>Color:</h1>
                  <div style={{display:"flex",gap:"30px",flexWrap:"wrap"}}>
                  {
                     props.posts.Property?.colors?.map((all,i)=>{
                          return(
                              <div key={i}>
                                 <div className='color' onClick={()=>setColor(all)} style={{background:all,height:"40px",width:"40px",borderRadius:"50%"}}><TiTickOutline className={`tick ${color===all?"activeTick":""}`} onClick={()=>setColor(all)}/></div>          
                            </div>
                              )
                        })
                     }
                 </div>
               </div>

               <div>
                     {showAlert && <Alert/>}
                  <div style={{display:"flex",alignItems:"center",gap:"30px"}}>
                       <AiOutlineMinus className='minus' onClick={minus}/>
                       <h1>{count}</h1>
                       <AiOutlinePlus className='plus' onClick={plus}/>
                  </div>
                     <button className='shop-btn dark btn' onClick={cartHandler}>Add To Cart</button>
               </div>
        </div>
  
        <div>
            <h3>{props.posts.Property?.name}</h3>
            <div style={{display:"flex",gap:"30px",marginTop:'30px',alignItems:"center",marginBottom:"30px"}}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               {/* <Rating name="size-large" defaultValue={2} size="large" /> */}
                <p className='form-font'>(20 customers reviews)</p>
            </div>
            <h5 style={{color:'brown'}}>${props.posts.Property?.price}</h5>
             <p className='label' style={{color:"black"}}>{props.posts.Property?.description}</p>
             <div className='items-flex'>
                <h3>Available:</h3>
                <p className='item-small form-font'>InStock</p>
             </div>
             <div className='items-flex'>
               <h3>SKU:</h3>
               <p className='item-small form-font'>{props.posts.Property?._id}</p>
             </div>
             <div className='items-flex'>
                <h3>Brand:</h3>
                <p className='item-small form-font'>{props.posts.Property?.company}</p>
             </div>
             <div className='line'></div>
        </div>

    </div> 
        {/* <Footer/>  */}
    </div>
  )
}



export async function getServerSideProps(context) {
    const res = await fetch(`https://al-kabeer-real.onrender.com/api/v1/property/${context.query.Property}`)
    const posts = await res.json()
    return {
      props: {
        posts
      },
    }
}
export default Property