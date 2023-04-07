import React from 'react'
import google from '../assets/images/googlesignin.png'
export default function Login() {
  return (
    <div className='loginpage'>
      <div className='login-heading'>
        <div>Welcome to mulgo,</div>
        <div className='iitj-login'>IITJ</div>
        <button className='signup-login'><img src={google} alt="" className='goole-login'/> Sign Up With Google</button>
      </div>
     
      <div className='form-login'>
        <form action="">
          <div  className='email-login login-item'><input type="email" name="" id="" placeholder='Enter Your email'/></div>
          <div  className='email-password login-item'><input type="password" name="" id="" placeholder='password'/></div>
        </form>    
      </div>
    </div>
  )
}
