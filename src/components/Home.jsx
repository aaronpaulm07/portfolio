import React from 'react'
import Header from './Header'
import "../fonts/Poppins-Regular.ttf"
import self from '../images/self.png';
import role from '../images/Group14.png';

const Home = () => {
  return (
    <div className='root'>
      <div>
        <div>
          <div>
            <div>
              <Header/>
            </div>
            <div>
            <div className='na'>
            <img className='self' src={self}  alt="self" />
            
            <h1 className='im'>I'M</h1>
            <h1 className='fname'>AARON</h1>
            <h1 className='lname'>PAUL</h1> 
            <div className='rect1' />
            <img className='roles' src={role}  alt="role" />
            </div>
            </div>
          </div>
         </div>
    </div>
    </div>
  )
}

export default Home