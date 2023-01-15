
import React from 'react'
import { useAppContext } from '../context/appContext'
import Alert from './Alert'


const NewLetter = () => {
  let {NewsLetter,showAlert}=useAppContext()
  let [email,setEmail]=React.useState("")


  function sub(){
    // if(email!=="" && email.includes("@")){
    //   AlertFun({type:"success",msg:"You Have Subscibed Successfully"})
    // }
    // else{
    //   AlertFun({type:"danger",msg:"Provide The Email Please Or Valid One"})
    // }
    NewsLetter(email)
  }
  return (
    <div className='main-div-margins grid-17 div-center-80'>
        <div>
          {showAlert && <Alert/>}
          <h2>Join our newsletter and get 20% off</h2>
          <p className='label text-black' style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
        </div>
        <div className='news-input'>
          <input placeholder='Ente Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='dark'/>
          <button className='btn p-[16px]'  style={{padding:"16px",}} onClick={sub} >Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter
