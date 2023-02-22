import React from 'react'
import Header from '../components/Header'
import About from '../components/about'
import Contact from '../components/contact'
const Home = () => {
  return (
    <div className='root'>
      <div>
        <div>
          <div>
            <div className='rect1' >
            <Header/>
            </div>
            <h1 className='fname'>AARON</h1>
            <h1 className='lname'>PAUL</h1>
          </div>
          <div>
            <About/>
          </div>
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