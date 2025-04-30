
// import reactLogo from './assets/react.svg'

import './App.css'
import About from './Components/about'
import Artworks from './Components/artworks'
import Navbar from './Components/navbar'
import {Element } from 'react-scroll';
import Skills from './Components/skills';
import { Project } from './Components/project';
import { Contact } from './Components/contact';
import { Footer } from './Components/footer';
function App() {

  return (
    <>
    <Navbar/>
      <Element name="aravind">
       
          <About/>
      </Element>
   
      <Element name="artworks">
        <Artworks />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  )
}

export default App
