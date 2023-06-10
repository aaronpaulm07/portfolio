import React from 'react';
import { Element } from 'react-scroll';
import self2 from '../images/selff.png';
const About = () => {
  return (
    <div className='root'>
      <Element name="abouttt" className='root'>
        <div className='abt' id='abouttt'>
          
          <h1 className='aboutH'>ABOUT</h1>
          <h2 className='name'>AARON PAUL</h2>
          <p className='para'>
            As a recent graduate, I am highly interested in the fields of data analytics, UI/UX design, 
            and front-end development. With a strong foundation in HTML/CSS, React, Figma, Python, and SQL, I am equipped to
            tackle diverse projects and create user-centered experiences. I am passionate about leveraging data to drive
            insights and decision-making while also focusing on creating intuitive and visually appealing interfaces.
            With a thirst for knowledge and a drive to excel, I am excited to contribute my skills and make a meaningful
            impact in the industry.
            <br/><br/>
            I'm always happy to connect with new people to share my experiences and also learn from them.
          </p>
          <img className='selff' src={self2}  alt="self2" />
        </div>
      </Element>
    </div>
  );
};

export default About;
