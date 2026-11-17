import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'

const Login = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Sign Up")

    const {url,token ,setToken}=useContext(StoreContext)
 const [data,setData]=useState({
    name:"",
    email:"",
    password:""
 })
const onChnageHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setData(data=>({...data,[name]:value}))
}

// useEffect(()=>{
//     console.log(data)
// },[data])

const onLogin=async(event)=>{
    event.preventDefault()
    let newUrl=url;
    if(currState==="Login"){
        newUrl +="/api/user/login"
    }
    else{
        newUrl +="/api/user/register"
    }
    const response=await axios.post(newUrl,data)
    if(response.data.success){
setToken(response.data.token)
localStorage.setItem("token",response.data.token)
setShowLogin(false)
    }
    else{
        alert(response.data.message)
    }


}

  return (
    <div className='login-popup'>
<form onSubmit={onLogin} className='login-popup-container'>
    <div className="login-popup-title">
        <h2>{currState}</h2>
        <img src={assets.cross_icon} onClick={()=>{setShowLogin(false)}}/>
    </div>
<div className="login-popup-inputs">
    {
        currState==="Login"?<><input type="text" placeholder='your email' name='email' onChange={onChnageHandler} value={data.email} required />
    <input type="password" placeholder='password' name='password' onChange={onChnageHandler} value={data.password} required /></> 
    :<> <input type="text" placeholder='your name' required name='name' onChange={onChnageHandler} value={data.name} />
    <input type="text" placeholder='your email' name='email' onChange={onChnageHandler} value={data.email} required />
    <input type="password" placeholder='password' name='password' onChange={onChnageHandler} value={data.password} required /></>
    }
   
</div>
<button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
<div className="login-popup-condition">
    <input type="checkbox" required />
    <p>By clicking on Login, I accept the <span>Terms & Conditions & Privacy Policy</span></p>
</div>
{
    currState==="Login"
    ?<p>Create a new Account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
    :<p>Already have an  Account <span onClick={()=>setCurrState("Login")}>Login here</span></p>

}


</form>



    </div>
  )
}

export default Login