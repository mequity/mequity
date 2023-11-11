import React from 'react';
import Logo from '../images/logo.png';
import './styles/records.css'
import { Link } from 'react-router-dom';
import DashIcon from '../images/DashIconWhite.png';
import AppointmentIcon from '../images/AppointmentsIconPurple.png';
import ChatIcon from '../images/Syringe.png';
import HelpIcon from '../images/helpIcon.png';
import SettingsIcon from '../images/settingsIcon.png';
import SearchAvatar from '../images/SearchAvatar.png';
import NotificationAvatar from '../images/Notification.png';
import ProfileAvatar from '../images/profile.png';
import Children from '../images/Children.png';
import DatabaseView from '../images/DatabaseView.png';
import Hospital from '../images/Hospital.png';
import { Button } from 'react-bootstrap';
import Document from '../images/Document.png';
import Avatar from '../images/avatar.png';

const Records = () => {
  return (
    <>
        <div className="sideBar">
            <Link to="/"><img src={Logo} alt="logo" style={{margin:"20px 0 0 10px"}}/></Link>
            <Link to="/dashboard" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{marginTop:"40px"}}><img src={DashIcon} alt="Icon" style={{marginRight:"20px"}}/>Dashboard</div></Link>
            <Link to="/records" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{backgroundColor:"white",color:"#8133D0"}}><img src={AppointmentIcon} alt="Icon" style={{marginRight:"20px"}}/>Records</div></Link>
            <Link to="/vaccineTypes" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={ChatIcon} alt="Icon" style={{marginRight:"20px"}}/>Vaccine Types</div></Link>
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

              <h4 style={{padding:"40px 0 0 85px"}}>
                  Immunization Records
              </h4>
              <div style={{display:"flex", justifyContent:"space-around"}}>
                <div className='recAction d-flex'>
                  <img src={Children} alt="Plus Icon" style={{width:"40px",height:"40px", margin:"10px 8px"}}/>
                  <p>4 <br/> No of children</p>
                </div>
                <div className='recAction d-flex'>
                  <img src={DatabaseView} alt="Clinic" style={{width:"40px",height:"40px", margin:"10px 10px"}}/>
                  <p>13<br/> No of immunization records</p>
                </div>
                <div className='recAction d-flex'>
                  <img src={Hospital} alt="Doctor" style={{width:"40px",height:"40px", margin:"10px 10px"}}/>
                  <p>20 <br/> Total No of Visits</p>
                </div>
              </div>

              <div style={{width:"86%", minHeight:"450px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px"}}>
                
                <div className='d-flex justify-content-between' style={{padding:"20px 20px 0 20px"}}>
                  <h5>All Immunization Records</h5>
                  <div>
                    <Button type="submit" className="formBtn" style={{width:"150px", height: "39px", backgroundColor:"#8133D0",fontSize:"14px", fontWeight:"700", borderRadius:"15px", border:"none"}}>Add a new record</Button>
                    <Button type="submit" className="formBtn" style={{width:"120px", height: "39px", backgroundColor:"white", color:"black", fontSize:"14px", fontWeight:"700", borderRadius:"15px", marginLeft:"20px", border:"1px solid #DCDCDC"}}>Export</Button>
                  </div>
                </div>  

                <div style={{display:"flex", justifyContent:"space-between", padding:"20px 20px 0 20px", marginTop:"20px"}}>
                    <span>Child's name</span>
                    <span>Gender</span>
                    <span>Doctor's name</span>
                    <span>Immunization Type</span>
                    <span>Date</span>
                    <span>Report</span>
                </div>

                <div style={{height:"2px", backgroundColor:"#DCDCDC", width:"98%", margin:"20px auto"}}></div>

                <div style={{display:"flex", justifyContent:"space-around", paddingTop:"5px", color:"rgba(0, 0, 0, 0.4)"}}>
                    <span><img src={Avatar} alt="avatar"/> Joseph K.B</span>
                    <span>Male</span>
                    <span>Rosemary Wairimu</span>
                    <span>Chicken Pox</span>
                    <span>28/03/23</span>
                    <img src={Document} alt="Icon"/>
                  </div>

              </div>

          </div>

        </div>
    </>
  )
}

export default Records