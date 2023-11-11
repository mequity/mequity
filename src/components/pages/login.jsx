import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Father from '../images/father.png';
import { Button } from 'react-bootstrap';
import Microsoft from '../images/microsoft.png';
import './styles/login.css'

const LogIn = () => {
  return (
  <> 
    <div className='loginMainBody d-flex flex-direction-row'>
      <div style={{width:"50%",background:"#8245D0"}}>
        <Link to="/"><img src={Logo} alt="Logo" style={{margin:"20px 0 0 100px"}}/></Link>

                <form style={{color:"white", width:"55%", margin:"auto", fontFamily:"Inter"}}>

                 <h5 className='mb-2'>WELCOME BACK 😊</h5>

                    <div style={{marginTop:50}}>
                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control LoginInputSection" placeholder='Enter your email'/>
                       
                    </div>
                   
                    <div style={{marginTop:50}}>
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control LoginInputSection" placeholder='***************'/>
                    </div>
                   
                    <div className="form-check d-flex justify-content-between" style={{marginTop:50}}>
                        <span>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                        </span>     
                        <span>Forgot Password?</span>
                    </div>
                    <Button className="formBtn" style={{marginTop:60, width:"100%",height: "39px",backgroundColor:"#FFFFFF",fontSize:"14px", fontWeight:"700",border:"none"}} ><Link to="/dashboard" style={{textDecoration:"none", color:"#8133D0"}}>Sign In</Link></Button>
                    <Button type="submit" className="formBtn" style={{marginTop:30, width:"100%", height: "39px", backgroundColor:"#8133D0",fontSize:"14px", fontWeight:"700", border:"1px solid white"}}><img src={Microsoft} alt="microsoft" style={{marginRight:"8px"}}/>Sign in With Microsoft</Button>

                    <p className="small fw-bold text-center" style={{marginTop:85, color:"#C4C4C4"}}>Don't have an account? <Link to="/signup"
                    style={{textDecoration:"none", color:"white"}}>Sign Up</Link></p>

                </form>
      </div>
      <div style={{width:"50%",margin:"auto", textAlign:"center"}}>
        <img src={Father} alt="father" style={{}}/>
        <p style={{color:"#8133D0",fontFamily: "Droid Sans",fontWeight: "700", fontSize: "21px", marginTop:"60px", textAlign:"center"}}>Help your child stay safe 😊</p>
      </div>
    </div>
  </>  
  )
}

export default LogIn