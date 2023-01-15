import FormRow from '../components/FormRow'
import React from 'react'
// import Button from '@mui/material/Button';
import {useAppContext} from "../context/appContext"
import Alert from "../components/Alert"

const forgetPassword = () => {
        let [email,setEmail]=React.useState("")
        let {forgetPassword,showAlert,isLoading}=useAppContext()
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>       
    <div>
      {isLoading && <h2 className='label'>Loading....</h2>}
        {showAlert && <Alert/>}
      <FormRow name="email" labelText="Enter Your Email To Continue" value={email} handleChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/>
       <button onClick={()=>forgetPassword(email)} className="btn">Submit</button>
       </div>
     </div>
  )
}

export default forgetPassword


