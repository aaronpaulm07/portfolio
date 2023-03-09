import React from 'react'
import { Link } from 'react-router-dom';
import mail from '../images/mail.png'
import LinkedIn from '../images/linked.png'



const contact = () => {
  return (
    <div className='root'>
        <div className='connn' id='connn'>
            <h2 className='conH'>CONTACT</h2>
            <h2 className='GETIT'>GET IN TOUCH</h2>
            <p1 className='para2'>I like to work with fun, open-minded people.<br/> Feel free to say hello!</p1>
            <div> 
              <img className='mail' src={mail} />
              <a className='email' href="mailto:aaronpaulm07@gmail.com" target="_new">aaronpaulm07@gmail.com</a>
            </div>
              <img className='linked' src={LinkedIn}/>
              <Link className='linkedin' to='https://www.linkedin.com/in/aaron-paul-m07'>aaronpaulm07</Link>
            
        </div>
    </div>    
  )
}

export default contact