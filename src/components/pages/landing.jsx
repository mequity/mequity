import React from "react";
import { Button } from "react-bootstrap";
import Logo from "../images/logo.png";
import Doctor from "../images/doc_1.jpg";
import Virus from "../images/virusMolecule.png";
import Virus5 from "../images/virusMolecule5.png";
import Drop from "../images/dropdown.png";
import { Link } from "react-router-dom";
import "./styles/landing.css";

const Immunify = () => {
  return (
    <div className="bodyDiv">
      
      <img
        src={Virus}
        alt="Virus Molecule"
        style={{ position: "absolute", left: "0px", top: "72px" }}
      />
      <img
        src={Virus5}
        alt="Virus Molecule"
        style={{ position: "absolute", right: "0px", top: "400px" }}
      />

      <nav
        style={{
          color: "white",
          listStyleType: "none",
          margin: "40px 0 0 40px",
          fontFamily: "Droid Sans",
          fontWeight: "70",
        }}
        class="d-flex justify-content-between"
      >
        <div className="d-flex">
          <Link className="links">
            <li style={{ marginRight: "40px" }} className="navItem">
              Health Advisory
            </li>
          </Link>
          <Link className="links">
            <li className="navItem">
              Location <img src={Drop} alt="Drop Down" />
            </li>
          </Link>
        </div>
        <div class="d-flex">
          <Link to="/login" className="links">
            <li style={{ marginRight: "40px" }} className="navItem">
              Login
            </li>
          </Link>
          <Link to="/signup" className="links">
            <li className="navItem">Sign Up</li>
          </Link>
        </div>
      </nav>

      <div style={{ color: "white", padding: "150px 0 0 30px" }}>
        <p
          style={{
            fontWeight: "700",
            fontFamily: "Droid Sans",
            fontSize: "45px",
          }}
        >
          Mequity
        </p>
        <Button
          style={{
            backgroundColor: "#A554F2",
            border: "none",
            fontSize: "12px",
            width: "111px",
            height: "41px",
            borderRadius: "10px",
          }}
          className="navItem"
        >
          Contact us
        </Button>
      </div>

      <img src={Doctor} alt="Doctor with syringe" style={{position: "absolute", bottom:"0px"}} />
    </div>
  );
};

export default Immunify;
