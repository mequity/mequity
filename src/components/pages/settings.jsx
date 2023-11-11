import React from 'react';
import Logo from '../images/logo.png';
import './styles/settings.css'
import { Link } from 'react-router-dom';
import DashIcon from '../images/DashIconWhite.png';
import AppointmentIcon from '../images/appointmentsIcon.png';
import Syringe from '../images/Syringe.png';
import HelpIcon from '../images/helpIcon.png';
import SettingsIcon from '../images/SettingsPurple.png';
import SearchAvatar from '../images/SearchAvatar.png';
import NotificationAvatar from '../images/Notification.png';
import ProfileAvatar from '../images/profile.png';
import { Button } from 'react-bootstrap';

const Settings = () => {
  return (
    <>
        <div className="sideBar">
            <Link to="/"><img src={Logo} alt="logo" style={{margin:"20px 0 0 10px"}}/></Link>
            <Link to="/dashboard" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{marginTop:"40px"}}><img src={DashIcon} alt="Icon" style={{marginRight:"20px"}}/>Dashboard</div></Link>
            <Link to="/records" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={AppointmentIcon} alt="Icon" style={{marginRight:"20px"}}/>Records</div></Link>
            <Link to="/vaccineTypes" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={Syringe} alt="Icon" style={{marginRight:"20px"}}/>Vaccine Types</div></Link>
            <Link to="/help" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={HelpIcon} alt="Icon" style={{marginRight:"20px"}}/>Help</div></Link>
            <Link to="/settings" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{backgroundColor:"white",color:"#8133D0"}}><img src={SettingsIcon} alt="Icon" style={{marginRight:"20px"}}/>Settings</div></Link>
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
                 
              <div className='d-flex justify-content-center text-center' style={{paddingTop:"30px"}}>
                <div className='tabs' style={{background:"white"}}>Account Settings</div>
                <div className='tabs'>Notifications</div>
                <div className='tabs'>Language Preferences</div>
                <div className='tabs'>Support</div>
                <div className='tabs'>Privacy settings</div>
              </div>

              <div style={{width:"86%", minHeight:"600px", backgroundColor:"white", margin:"4px auto", borderRadius:"15px"}}>

              

              <form style={{width:"75%", fontFamily:"Inter", margin:"auto", paddingTop:"50px"}}>

              <h4>Account Settings</h4>

            <div className='d-flex' style={{marginTop:"60px"}}>
                <div>
                    <label for="exampleInputEmail1" className="form-label">FirstName</label>
                    <input type="text" className="form-control" placeholder='Daniel' style={{width:"370px", height:"50px"}}/>
                    
                </div>

                <div style={{marginLeft:"20px"}}>
                    <label for="exampleInputEmail1" className="form-label">LastName</label>
                    <input type="text" className="form-control" placeholder='Karanja' style={{width:"370px", height:"50px"}}/>
                    
                </div>
            </div>   

            <div className='d-flex' style={{marginTop:"40px"}}>
                <div>
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder='example@gmail.com' style={{width:"370px", height:"50px"}}/>
                    
                </div>
                
                <div style={{marginLeft:"20px"}}>
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='***************' style={{width:"370px", height:"50px"}}/>
                </div>
            </div>    
                
                <Button type="submit" className="formBtn" style={{marginTop:"40px", width:"200px", height: "50px", backgroundColor:"#8133D0",fontSize:"14px", fontWeight:"700", border:"1px solid white", borderRadius: "15px"}}>Save Changes</Button>

        </form>

              </div>

          </div>

        </div>
    </>
  )
}

export default Settings