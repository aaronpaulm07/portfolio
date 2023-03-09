import React from 'react'
import { Link } from 'react-router-dom'
import Menu1 from '../images/menu.png'
import { ScrollLink as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Header = () => {
  return (
    <div className='Hroot'>
        <ScrollLink activeClass="active"  className='title' to="abt" smooth={true} duration={500} spy={true} exact="true" >About</ScrollLink>
        <Link className='title'>About</Link>
        <Link className='title'>Contact</Link>
        <img className='menu' src={Menu1}  alt="menu" />
    </div>
  )
}

export default Header