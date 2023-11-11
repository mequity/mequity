import React from 'react';
import { Button } from 'react-bootstrap';
import Logo from '../images/logo.png';
import Doctor from '../images/doctorWithSyringe.png';
import Virus from '../images/virusMolecule.png';
import Virus2 from '../images/virusMolecule2.png';
import Virus3 from '../images/virusMolecule3.png';
import Virus4 from '../images/virusMolecule4.png';
import Virus5 from '../images/virusMolecule5.png';
import Virus6 from '../images/virusMolecule6.png';
import State from '../images/state.png';
import City from '../images/city.png';
import Search from '../images/search.png';
import Drop from '../images/dropdown.png';
import { Link } from 'react-router-dom';
import './styles/landing.css'


const Immunify = () => {
  return (
    <div className='bodyDiv'>

      <img src={Logo} alt="Logo" style={{position: 'absolute', left: "10px", top: "12px"}}/>    
      <img src={Virus} alt="Virus Molecule" style={{position: 'absolute', left: "0px", top: "72px"}}/>
      <img src={Virus2} alt="Virus Molecule" style={{position: 'absolute', left: "0px", top: "505px"}}/>
      <img src={Virus3} alt="Virus Molecule" style={{position: 'absolute', left: "744px", top: "0px"}}/>
      <Link to="signuptwo"><img src={Virus4} alt="Virus Molecule" style={{position: 'absolute', right: "0px", top: "339px"}}/></Link>
      <img src={Virus5} alt="Virus Molecule" style={{position: 'absolute', right: "0px", bottom: "0px"}}/>
      <img src={Virus6} alt="Virus Molecule" style={{position: 'absolute', left: "654px", bottom: "30px"}}/>

      <nav style={{color:"white", listStyleType:"none", width:"75%", margin:"40px 0 0 300px", fontFamily:"Droid Sans", fontWeight:"700"}} class="d-flex justify-content-between">
        <div  className="d-flex">
          <Link className="links"><li style={{marginRight:"40px"}} className="navItem">Health Advisory</li></Link>
          <Link className="links"><li className="navItem">Location <img src={Drop} alt="Drop Down"/></li></Link>
        </div>
        <div  class="d-flex">
          <Link to="/login" className="links"><li style={{marginRight:"40px"}} className="navItem">Login</li></Link>
          <Link to="/signup" className="links"><li className="navItem">Sign Up</li></Link>
        </div>

      </nav>

        <div style={{color:"white",padding:"130px 0 0 300px"}}>
            <h2 style={{fontWeight:"700", fontFamily:"Droid Sans", fontSize:"40px", lineHeight:"46px"}}>Find an <br/> Immunization <br/> centre near you</h2>
            <p style={{width:"25%", margin:"20px 0 30px",fontWeight:"700", fontFamily:"Droid Sans", fontSize:"15px", lineHeight:"18.06px", color:"#C5A5F8"}}>Immunify seeks to help mothers locate the closest vaccination centre and also notify them of what vaccine their children need to take to reduce child mortality rate</p>
            <Button style={{backgroundColor:"#A554F2", border:"none", fontSize:"12px", width: "111px", height: "41px", borderRadius: "10px"}} className="navItem">Contact us</Button>
        </div>
        
        <div style={{position:"absolute", right:"200px", top:"150px"}}>
          <img src={Doctor} alt="Doctor with syringe"/>
        </div>

        <div style={{margin:"90px 0 0 300px", width:"600px", height: "180px", borderRadius:"15px", color:"white"}}>

            <div className="actionCallTitle"><h2 style={{fontWeight:"700", textAlign:"center", paddingTop:"30px", fontFamily:"Droid Sans", fontSize:"30px"}}>Find an Immunization centre near you</h2></div>
            <div className='d-flex justify-content-around actionCall' style={{height: "50%", paddingTop:"25px"}}>
              <Button style={{backgroundColor:"white"}} className="navItem actionBtns"> <img src={State} alt="State" style={{marginRight:"8px"}}/>State</Button>
              <Button style={{backgroundColor:"white"}} className="navItem actionBtns"> <img src={City} alt="City"style={{marginRight:"8px"}}/>City</Button>
              <Button style={{backgroundColor:"#A554F2"}} className="navItem actionBtns"><img src={Search} alt="Search"/> Check</Button>
            </div>

        </div>

    </div>
  )
}

export default Immunify