import React from "react";
import { Element } from "react-scroll";
import self2 from "../images/selff.png";

const About = () => {
  return (
    <div name="aaron_about" >
      <div className="abt" id="ron_about">
      <div id="aaron_about" style={{backgroundColor: "#00000", height: "1px" }} />
        <h1 className="aboutH" id="aaron_about">ABOUT</h1>
        <h2 className="name">AARON PAUL</h2>
        <p className="para">
          As a recent graduate, I am highly interested in the fields of data
          analytics, UI/UX design, and front-end development. With a strong
          foundation in HTML/CSS, React, Figma, Python, and SQL, I am equipped
          to tackle diverse projects and create user-centered experiences. I am
          passionate about leveraging data to drive insights and decision-making
          while also focusing on creating intuitive and visually appealing
          interfaces. With a thirst for knowledge and a drive to excel, I am
          excited to contribute my skills and make a meaningful impact in the
          industry.
          <br />
          <br />
          I'm always happy to connect with new people to share my experiences
          and also learn from them.
        </p>
        <img className="selff" src={self2} alt="self2" />
      </div>
    </div>
  );
};

export default About;
