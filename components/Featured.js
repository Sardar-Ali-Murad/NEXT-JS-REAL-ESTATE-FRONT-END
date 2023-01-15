import React from 'react'
import { useAppContext } from '../context/appContext'
import {BsSearch}  from "react-icons/bs"
import Link from 'next/link'
import Image from 'next/image'

const Featured = () => {
    let props=useAppContext()
    React.useEffect(()=>{
      props.FEATURED()
    },[])
  return (
    <div className='div-center-80 '>
       <h1 className='text-center'>Featured Products</h1>
       <div className='grid-15'>
          {
            props.featured?.slice(0,3).map((product)=>{
                return (

                  <div key={product?._id}>
                <div className='f-single-card'>
                    <div className='f-img-main' >
                      <img alt="Image" src={product.image} />

                      <Link href={`/Properties/${product?._id}`}>
                         <BsSearch className='search div-perfect-center'/>
                      </Link>
                    </div>
                    <div className='f-overlay'></div>
                </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                        <p className='dark form-font'>{product?.name}</p>
                        <p style={{color:"brown"}} className="form-font">${product?.price}</p>
                    </div>
                </div>
                )

            })
          }
       </div>
    </div>
  )
}

export default Featured
