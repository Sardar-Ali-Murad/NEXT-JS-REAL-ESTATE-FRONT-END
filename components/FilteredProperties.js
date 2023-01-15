import { Filter } from '@mui/icons-material'
import React from 'react'
import { useAppContext } from '../context/appContext'
import {BsSearch}  from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"


const FilteredProperties = () => {
    let {search,category,company,freeShipping,sort,Properties,getFilteredProperty,price,color}=useAppContext()
    
    React.useEffect(()=>{
        getFilteredProperty()
    },[search,category,company,freeShipping,sort,price,color])

    let [data,setData]=React.useState(Properties)

    if( Properties.length===0){
        return <h2 className='text-center main-div-margins'>Soory There is no such product that match your criteria...</h2>
    }


  return (
    <div className='grid-18 div-center-80 main-div-margins'>
      {
        Properties.map((product)=>{
            return     <div key={product?._id}>
            <div className='f-single-card'>
                <div className='f-img-main' >
                  <img style={{objectFit:"cover"}} src={product?.image} alt="Image"/>
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
        })
      }
    </div>
  )
}

export default FilteredProperties
