import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Hroot'>
        <Link className='title'>About</Link>
        <Link className='title'>Contact</Link>
    </div>
  )
}

export default Header