import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Mother from '../images/signUp.png';
import { Button } from 'react-bootstrap';
import Microsoft from '../images/microsoft.png';
import './styles/signUp.css'

const SignUp = () => {
  return (
  <> 
    <div className='mainBody2 d-flex flex-direction-row'>
      <div style={{width:"50%",background:"#8245D0"}}>
        <Link to="/"><img src={Logo} alt="Logo" style={{margin:"20px 0 0 80px"}}/></Link>

                <form style={{color:"white", width:"60%", margin:"-30px auto", fontFamily:"Inter"}}>

                 <h5 className='mb-2'>SIGN UP 😊</h5>

                <div style={{marginTop:20}}>
                        <label for="exampleInputEmail1" className="form-label">FullName</label>
                        <input type="text" className="form-control inputSection2" placeholder='Enter your fullname'/>
                       
                    </div>
                    <div style={{marginTop:20}}>
                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control inputSection2" placeholder='Enter your email'/>
                       
                    </div>
                    <div style={{marginTop:20}}>
                        <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                        <input type="number" className="form-control inputSection2" placeholder='Enter your phone number'/>
                       
                    </div>
                    <div style={{marginTop:20}}>
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control inputSection2" placeholder='***************'/>
                    </div>
                   
                    <div className="form-check" style={{marginTop:20}}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">I agree to terms and conditions</label>
                    </div>
                    <Button type="submit" className="formBtn" style={{marginTop:30, width:"100%",height: "39px",backgroundColor:"#FFFFFF", color:"#8133D0",fontSize:"14px", fontWeight:"700",border:"none"}} >Sign Up</Button>
                    <Button type="submit" className="formBtn" style={{marginTop:30, width:"100%", height: "39px", backgroundColor:"#8133D0",fontSize:"14px", fontWeight:"700", border:"1px solid white"}}><img src={Microsoft} alt="microsoft" style={{marginRight:"8px"}}/>Sign Up With Microsoft</Button>

                    <p className="small fw-bold text-center" style={{marginTop:45, color:"#C4C4C4"}}>Already Registered? <Link to="/login"
                    style={{textDecoration:"none", color:"white"}}>Log In</Link></p>

                </form>
      </div>
      <div style={{width:"50%",margin:"auto", textAlign:"center"}}>
        <img src={Mother} alt="mother" style={{}}/>
        <p style={{color:"#8133D0",fontFamily: "Droid Sans",fontWeight: "700", fontSize: "21px", marginTop:"60px", textAlign:"center"}}>Your child deserves to be immunized 🤱</p>
      </div>
    </div>
  </>  
  )
}

export default SignUp