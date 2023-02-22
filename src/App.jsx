import { useState } from 'react'
import Header from './components/Header'
import { Link } from 'react-scroll'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<Home/>} />
          <Route path='/contact' element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
