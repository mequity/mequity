import React from 'react';
import Logo from '../images/logo.png';
import './styles/records.css'
import { Link } from 'react-router-dom';
import DashIcon from '../images/DashIconWhite.png';
import AppointmentIcon from '../images/appointmentsIcon.png';
import Syringe from '../images/Syringe.png';
import HelpIcon from '../images/HelpPurple.png';
import SettingsIcon from '../images/settingsIcon.png';
import SearchAvatar from '../images/SearchAvatar.png';
import NotificationAvatar from '../images/Notification.png';
import ProfileAvatar from '../images/profile.png';
import Expand from '../images/expand.png';
import { Button } from 'react-bootstrap';

const Help = () => {
  return (
    <>
        <div className="sideBar">
            <Link to="/"><img src={Logo} alt="logo" style={{margin:"20px 0 0 10px"}}/></Link>
            <Link to="/dashboard" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{marginTop:"40px"}}><img src={DashIcon} alt="Icon" style={{marginRight:"20px"}}/>Dashboard</div></Link>
            <Link to="/records" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={AppointmentIcon} alt="Icon" style={{marginRight:"20px"}}/>Records</div></Link>
            <Link to="/vaccineTypes" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={Syringe} alt="Icon" style={{marginRight:"20px"}}/>Vaccine Types</div></Link>
            <Link to="/help" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{backgroundColor:"white",color:"#8133D0"}}><img src={HelpIcon} alt="Icon" style={{marginRight:"20px"}}/>Help</div></Link>
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


          <div style={{backgroundColor:"#DCDCDC",height:"89vh", overflow:"scroll"}}>
              
                <h4 style={{padding:"40px 0 0 85px"}}>
                    FAQS
                </h4>

              <div style={{width:"86%", minHeight:"85px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px", display:"flex", justifyContent:"space-between"}}>
                <p style={{fontFamily: 'Droid Sans',fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "20px", color: "#170F49", padding:"30px 0 0 40px"}}>
                    What is this app and what does it do?   
                </p>
                <div style={{margin:"30px 40px 0 0", backgroundColor:"#FFFFFF", borderRadius:"50%", width:"30px", height:"30px", boxShadow:" 0px 5px 16px rgba(8, 15, 52, 0.06)"}}>
                    <img src={Expand} alt="expand" style={{padding:"3px 0 0 12px"}}/>
                </div>
              </div>

              <div style={{width:"86%", minHeight:"85px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px", display:"flex", justifyContent:"space-between"}}>
                <p style={{fontFamily: 'Droid Sans',fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "20px", color: "#170F49", padding:"30px 0 0 40px"}}>
                    How do I add my child's immunization records to the app?   
                </p>
                <div style={{margin:"30px 40px 0 0", backgroundColor:"#FFFFFF", borderRadius:"50%", width:"30px", height:"30px", boxShadow:" 0px 5px 16px rgba(8, 15, 52, 0.06)"}}>
                    <img src={Expand} alt="expand" style={{padding:"3px 0 0 12px"}}/>
                </div>
              </div>

              <div style={{width:"86%", minHeight:"85px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px", display:"flex", justifyContent:"space-between"}}>
                <p style={{fontFamily: 'Droid Sans',fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "20px", color: "#170F49", padding:"30px 0 0 40px"}}>
                    How do I set up reminder notifications for my child's upcoming vaccinations or appointments?  
                </p>
                <div style={{margin:"30px 40px 0 0", backgroundColor:"#FFFFFF", borderRadius:"50%", width:"30px", height:"30px", boxShadow:" 0px 5px 16px rgba(8, 15, 52, 0.06)"}}>
                    <img src={Expand} alt="expand" style={{padding:"3px 0 0 12px"}}/>
                </div>
              </div>

              <div style={{width:"86%", minHeight:"85px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px", display:"flex", justifyContent:"space-between"}}>
                <p style={{fontFamily: 'Droid Sans',fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "20px", color: "#170F49", padding:"30px 0 0 40px"}}>
                    What do I do if I miss a vaccination appointment?  
                </p>
                <div style={{margin:"30px 40px 0 0", backgroundColor:"#FFFFFF", borderRadius:"50%", width:"30px", height:"30px", boxShadow:" 0px 5px 16px rgba(8, 15, 52, 0.06)"}}>
                    <img src={Expand} alt="expand" style={{padding:"3px 0 0 12px"}}/>
                </div>
              </div>

              <div style={{width:"86%", minHeight:"85px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px", display:"flex", justifyContent:"space-between"}}>
                <p style={{fontFamily: 'Droid Sans',fontStyle: "normal", fontWeight: 400, fontSize: "22px", lineHeight: "20px", color: "#170F49", padding:"30px 0 0 40px"}}>
                    How do I find healthcare providers in my area for my child's vaccinations or appointments?   
                </p>
                <div style={{margin:"30px 40px 0 0", backgroundColor:"#FFFFFF", borderRadius:"50%", width:"30px", height:"30px", boxShadow:" 0px 5px 16px rgba(8, 15, 52, 0.06)"}}>
                    <img src={Expand} alt="expand" style={{padding:"3px 0 0 12px"}}/>
                </div>
              </div>

            <p style={{textAlign:"center"}}>For more enquiries, send us an email at support@immunify.co OR  <Button type="submit" className="formBtn" style={{width:"150px", height: "45px", backgroundColor:"#8133D0",fontSize:"14px", fontWeight:"700", border:"1px solid white", borderRadius: "15px", marginLeft:"20px"}}>Contact Us</Button></p>
             

          </div>

        </div>
    </>
  )
}

export default Help