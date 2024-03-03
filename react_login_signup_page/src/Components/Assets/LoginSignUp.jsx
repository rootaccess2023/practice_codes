import React, { useState } from 'react'
import './LoginSignUp.css'
import email from '/Users/polo/Documents/login-page/login-page/src/Assets/email.png'
import password from '/Users/polo/Documents/login-page/login-page/src/Assets/password.png'
import person from '/Users/polo/Documents/login-page/login-page/src/Assets/person.png'

const LoginSignUp = () => {

    const [action, setAction] = useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login" ? <div></div> : 
            <div className='input'>
                <img src={person} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            <div className='input'>
                <img src={email} alt="" />
                <input type="email" placeholder='Email ID'/>
            </div>
            <div className='input'>
                <img src={password} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up" ? <div></div>:
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Log In</div>
        </div>
    </div>
  )
}

export default LoginSignUp
