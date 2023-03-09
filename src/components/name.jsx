import React from 'react'
import self from '../images/self.png'


const contact = () => {
  return (
    <div className='root'>
        <div className='na'>
            <img className='self' src={self}  alt="self" />
            <h1 className='im'>I'M</h1>
            <h1 className='fname'>AARON</h1>
            <h1 className='lname'>PAUL</h1> 
            <div className='rect1' />
        </div>
    </div>    
  )
}

export default contact