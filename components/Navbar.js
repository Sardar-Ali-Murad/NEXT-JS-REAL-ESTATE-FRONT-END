import React from 'react'
import {BsCart}  from "react-icons/bs"
import {BsFillPersonPlusFill}  from "react-icons/bs"
import Link from 'next/link'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross}  from "react-icons/im"
import { useAppContext } from "../context/appContext"
import { useRouter } from 'next/router'
import Logo from "../utils/img/Logo.png"
import Image from "next/image"

const Navbar = () => {
    let router=useRouter()
    let [ham,setHam]=React.useState(true)
    let {Orders,UserOrders,user}=useAppContext()
    // React.useEffect(()=>{
    //    Orders()
    // },[UserOrders])

    let num=UserOrders.reduce((final,current)=>{
        final+=current?.quantity
        return final
    },0)

    function loginHandler(){
        if(user===null){
           router.push("/Register")
        }
        else{
            router.push("/user")
        }
    }

  

  return (
    <div>
   {/* Big Screen Nav Start*/}
    <div className='nav-main'>
        <div className='nav-headers'>
             {/* <h3 className='mt-[15px]'>AL-Kabeer Estate</h3> */}
             <Image src={Logo} height={60} width={60} alt="Image"/>
        </div>

    <div className='big-screen-nav'>
       <nav>
        <ul>
            <li> <Link href="/" className='link-font'>Home</Link></li>
            <li> <Link href="/about"  className='link-font'>About</Link></li>
            <li> <Link href="/Properties"  className='link-font'>Property</Link></li>
        </ul>
       </nav>
    </div> 
          

         <div className='nav-end'>
            <Link href="/Cart" style={{color:"black"}}>
            <div className='nav-flex cart-rel'>
                {/* <h7>Cart</h7> */}
                 <BsCart className='nav-icon'/>
                 <h2 className='cart-no'>{num}</h2>
            </div>
            </Link>
            <div className='nav-flex gap-[30px]' onClick={loginHandler} style={{cursor:"pointer"}}>
                 <BsFillPersonPlusFill className='nav-icon'/>
                <h5 className='mt-[10px] link-font'>{user===null?"Login":"Dashboard"}</h5>
            </div>
        </div> 

        <div>
            <GiHamburgerMenu className='ham' onClick={()=>setHam(false)}/>
        </div>
 
    {/* End of the big screen nav */}
    </div>
    {/* small screen nav starts */}
      <div className={`small-screen-main ${!ham?"small-screen-nav-active":""}`}>
         <div className='small-nav-front'>
            <h3>comfy Sloth</h3>
            <ImCross className='cross' onClick={()=>setHam(true)}/>
         </div>

         <div className='small-screen-nav-center div-center-80'>
            <li> <Link className='link-font' style={{marginBottom:"30px"}} href="/" onClick={()=>setHam(true)}>Home</Link></li>
            <li> <Link href="/about"  className='link-font' style={{marginBottom:"30px"}} onClick={()=>setHam(true)}>About</Link></li>
            <li> <Link href="/Properties"   className='link-font'  style={{marginBottom:"30px",listStyle:"none"}} onClick={()=>setHam(true)}>Property</Link></li>     
         </div>

         <div className='small-nav-end'>
            <Link href="/Cart" style={{color:"black"}} onClick={()=>setHam(true)}>
            <div className='nav-flex cart-rel'>
                {/* <h6>Cart</h6>  */}
                 <BsCart className='nav-icon'/>
                 <h2 className='cart-no'>{num}</h2>
            </div>
            </Link>
            <div className='nav-flex' onClick={loginHandler} style={{cursor:"pointer"}}>
                 <BsFillPersonPlusFill className='nav-icon'/>
                <h3>{user===null?"Login":"Dashboard"}</h3>
            </div>
        </div> 


    </div> 
    {/* small screen nav  ends*/}

    </div>
  )
}

export default Navbar