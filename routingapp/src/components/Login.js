import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const nav=useNavigate();

    const verifyEmail=()=>{
        
        if(!emailRegex.test(email)){
            setEmailError("invalid input email")
        }
        else{
            setEmailError("");
        }
    }
    const verifyPassword=()=>{
        if(password.length<8||password.length>16){
            setPasswordError("invalid password")
        }
        else{
            setPasswordError("")
        }
    }
    const NavHome=()=>{
        if(email=="abc@gmail.com"&&password=="12345678"){
            nav('/');
        }
    }

    return (
        <div className='container p-3 border border-dark my-3'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value);verifyEmail();}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">{emailError}</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value);verifyPassword();}} className="form-control" id="exampleInputPassword1" />
                    <div id="emailHelp" className="form-text">{passwordError}</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>{NavHome()}}>Submit</button>
            </form>
        </div>
    )
}
export default Login;
