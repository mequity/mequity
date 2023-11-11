import React from 'react';
import Logo from '../images/logo.png';
import './styles/records.css'
import { Link } from 'react-router-dom';
import DashIcon from '../images/DashIconWhite.png';
import AppointmentIcon from '../images/appointmentsIcon.png';
import Syringe from '../images/SyringePurple.png';
import HelpIcon from '../images/helpIcon.png';
import SettingsIcon from '../images/settingsIcon.png';
import SearchAvatar from '../images/SearchAvatar.png';
import NotificationAvatar from '../images/Notification.png';
import ProfileAvatar from '../images/profile.png';
import { Button } from 'react-bootstrap';

const Vaccines = () => {
  return (
    <>
        <div className="sideBar">
            <Link to="/"><img src={Logo} alt="logo" style={{margin:"20px 0 0 10px"}}/></Link>
            <Link to="/dashboard" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{marginTop:"40px"}}><img src={DashIcon} alt="Icon" style={{marginRight:"20px"}}/>Dashboard</div></Link>
            <Link to="/records" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={AppointmentIcon} alt="Icon" style={{marginRight:"20px"}}/>Records</div></Link>
            <Link to="/vaccineTypes" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{backgroundColor:"white",color:"#8133D0"}}><img src={Syringe} alt="Icon" style={{marginRight:"20px"}}/>Vaccine Types</div></Link>
            <Link to="/help" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={HelpIcon} alt="Icon" style={{marginRight:"20px"}}/>Help</div></Link>
            <Link to="/settings" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={SettingsIcon} alt="Icon" style={{marginRight:"20px"}}/>Settings</div></Link>
        </div>
        <div style={{width:"80%", position:"absolute", right:"0"}}>

          <div className='d-flex justify-content-between mt-3' style={{height:"20%"}}>
            <div style={{marginLeft:"60px"}}>
              <h2  style={{
                  fontFamily: "Droid Sans",
                  fontSize: "27px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#8133D0"
                  }}>
               Hi, Shirley P.</h2>
              <p style={{
                fontFamily: 'Droid Sans',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "14px",
                color:"rgba(54, 0, 139, 0.5)"
              }}>Schedule an appointment today!</p>

            </div>
            <div style={{margin:"20px 40px"}}>
              <img src={SearchAvatar} alt="search" style={{marginRight:"20px"}}/>
              <img src={NotificationAvatar} alt="search" style={{marginRight:"20px"}}/>
              <img src={ProfileAvatar} alt="search"/>
            </div>
          </div>


          <div style={{backgroundColor:"#DCDCDC",height:"89vh"}}>
              
              <div className='d-flex justify-content-between'>
                <h4 style={{padding:"40px 0 0 85px"}}>
                    All Vaccine Types
                </h4>
                
                <Button type="submit" className="formBtn" style={{width:"120px", height: "39px", backgroundColor:"#8133D0", fontSize:"14px", fontWeight:"700", borderRadius:"15px", margin:"40px 85px 0 0", border:"1px solid #DCDCDC"}}>Export</Button>
              </div>

              <div style={{width:"86%", minHeight:"550px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px"}}>

                <div style={{display:"flex", justifyContent:"space-between", padding:"40px 20px 0 20px", marginTop:"20px"}}>
                    <span>Vaccine name</span>
                    <span>Diseases protected against</span>
                    <span>Age Range</span>
                    <span>Doses</span>
                    <span>Route of Administration</span>
                    <span>Side Effects</span>
                </div>

                <div style={{height:"2px", backgroundColor:"#DCDCDC", width:"98%", margin:"40px auto 0"}}></div>

                <div style={{display:"flex", justifyContent:"space-between", padding:"40px 20px 0 20px", color:"rgba(0, 0, 0, 0.4)"}}>
                    <span>MMR</span>
                    <span>Measles, Mumps, <br/>Rubella</span>
                    <span>12-15 months,<br/> 4-6 years</span>
                    <span>2 doses</span>
                    <span>Injection</span>
                    <span>Mild fever,<br/> rash,<br/> joint pain</span>
                </div>

              </div>

          </div>

        </div>
    </>
  )
}

export default Vaccines