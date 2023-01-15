import FormRow from '../components/FormRow'
import React from 'react'
import {useAppContext} from "../context/appContext"
import Alert from "../components/Alert"
import  {useRouter } from 'next/router'

const resetPassword = () => {
    let router=useRouter()
    let token=router.query.token
    let email=router.query.email
    let [resetPassword,setResetPassword]=React.useState("")
    let {resetPasswordFun,showAlert}=useAppContext()
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>       
    <div>
     {showAlert && <Alert/>}
      <FormRow name="password" labelText="Reset Password" value={resetPassword} handleChange={(e)=>setResetPassword(e.target.value)} placeholder="Enter Your New Password"/>
       <button className='btn' onClick={()=>resetPasswordFun({password:resetPassword,email,token})} >Submit</button>

       </div>
     </div>
  )
}

export default resetPassword


