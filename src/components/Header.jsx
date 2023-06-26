import React from "react";
import { Link } from "react-scroll";
import Menu1 from "../images/menu.png";

const Header = () => {
  return (
    <div className="Hroot">
      <div className="rac">
        <a 
          href="https://drive.google.com/drive/folders/19QwBb9jpldRG9tF1piovmuLsrhV03S2k?usp=drive_link"
          className="title"
        >
          Resume
        </a>
        <a href="#aaron_about" className="title">
          About
        </a>
        <a href="#contact_aaron" className="title">Contact</a>
      </div>
      <img className="menu" src={Menu1} alt="menu" />
    </div>
  );
};

export default Header;
