import React from 'react'
import { Element } from 'react-scroll';
import Header from '../components/Header'
import About from '../components/about'
import Contact from '../components/contact'
import Name from '../components/name'
import "../fonts/Poppins-Regular.ttf"
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
              <Name/>
            </div>
          </div>
          <Element name="about">
            <div>
              <About/>
            </div>
          </Element>  
          <div>
            <Contact/>
          </div>
        <div className='end'/>
      </div>  
    </div>
    </div>
  )
}

export default Home