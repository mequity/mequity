import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import Logo from "../images/logo.png";
import Doctor from "../images/doc_1.jpg";
import Virus from "../images/virusMolecule.png";
import Virus5 from "../images/virusMolecule5.png";
import Drop from "../images/dropdown.png";
import { Link } from "react-router-dom";
import "./styles/landing.css";

const Immunify = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Define an array of random locations (you can replace these with your actual locations)
  const locations = ["Burundi", "Tanzania", "Mozambique", "Madagascar"];

  // Function to handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

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
        className="d-flex justify-content-between"
      >
        <div className="d-flex">
          <Link to="https://www.fda.gov/medical-devices/digital-health-center-excellence/fda-digital-health-advisory-committee" className="links">
            <li style={{ marginRight: "40px" }} className="navItem">
              Health Advisory
            </li>
          </Link>
          <Dropdown>
            <Dropdown.Toggle variant="transparent" id="location-dropdown">
              <span style={{ color: "white" }}>Location</span>{" "}
              <img src={Drop} alt="Drop Down" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {locations.map((location, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleLocationSelect(location)}
                >
                  {location}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex">
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
            fontWeight: "bold",
          }}
        >
          Mequity
        </p>
        
        <a href="mailto:mequity@gmail.com">
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
        </a>
      </div>

      <p style={{ color: "white" }}>
        Selected Location: {selectedLocation || "Select a location"}
      </p>

      <img
        src={Doctor}
        alt="Doctor with syringe"
        style={{ position: "absolute", bottom: "0px" }}
      />
    </div>
  );
};

export default Immunify;
