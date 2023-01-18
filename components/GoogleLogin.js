import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from "axios"
// import { gapi } from "gapi-script";
import { useAppContext } from '../context/appContext';
// import { gapi } from "gapi-script";


export default function Landing() { 
  let { Google,user}=useAppContext()


  // gapi.load("client:auth2", () => {
  //   gapi.client.init({
  //     client_id:"705164632277-vhv4q8ki9tntsbiv8n0do8l9rdbd1knk.apps.googleusercontent.com",
  //     plugin_name: "chat",
  //     apiKey: "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",
  //   });
  // });
 
   const responseGoogleSuccess = async (response) => {
       try {
       let {data}=await axios.post("https://al-kabeer-real.onrender.com/api/v1/googleLogin",{idToken:response.tokenId},{withCredentials:true})
        Google({user:data.user,location:data.location})
       } catch (error) {
         console.log(error.response.data.msg);
       }     
   }
   

   const responseGoogleError = (response) => {
           console.log(response)
   }
   
  return (
    <div className="App">
     <GoogleLogin
    clientId="705164632277-vhv4q8ki9tntsbiv8n0do8l9rdbd1knk.apps.googleusercontent.com"
    buttonText="Login with google"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleError}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}
