import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import WhatiDo from './pages/WhatiDo';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <WhatiDo />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default App;