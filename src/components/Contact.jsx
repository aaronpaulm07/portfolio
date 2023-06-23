import React from "react";
import mail from "../images/mail.png";
import LinkedIn from "../images/linked.png";

const Contact = () => {
  return (
    <div className="root">
      <div className="connn" id="connn">
        <h2 className="conH" id="contact_aaron">CONTACT</h2>
        <h2 className="GETIT">GET IN TOUCH</h2>
        <p className="para2">
          I like to work with fun, open-minded people.
          <br /> Feel free to say hello!
        </p>
        <div className="address">
          <img className="mail" src={mail} alt="mail" />
          <a
            className="email"
            href="mailto:aaronpaulm07@gmail.com"
            target="_new"
          >
            aaronpaulm07@gmail.com
          </a>
        </div>
        <div className="address">
          <img className="linked" src={LinkedIn} alt="LinkedIn" />
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/aaron-paul-m07"
            target="_blank"
            rel="noopener noreferrer"
          >
            aaronpaulm07
          </a>
        </div>
        <div className="end" />
      </div>
    </div>
  );
};

export default Contact;
