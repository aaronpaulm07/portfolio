import React from 'react';
import { Link } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
