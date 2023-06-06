import React from 'react'
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import Menu1 from '../images/menu.png'

const Header = () => {
  return (
    <div className='Hroot'>
        <a href='https://drive.google.com/drive/folders/19QwBb9jpldRG9tF1piovmuLsrhV03S2k?usp=drive_link' className='title'>CV</a>
        <Link smooth to="/#about" className='title'>About</Link>
        <Link className='title'>Contact</Link>
        <img className='menu' src={Menu1}  alt="menu" />
    </div>
  )
}

export default Header
