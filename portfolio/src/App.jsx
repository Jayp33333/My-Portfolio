import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import TechnicalProficiency from './sections/TechnicalProficiency.jsx'
import AboutMe from './sections/AboutMe.jsx'
import MyProjects from './sections/MyProjects.jsx'
import ContactMe from './sections/ContactMe.jsx'
import Footer from './sections/Footer.jsx'
import Education from './sections/Education.jsx'

const App = () => {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <AboutMe/>
    <TechnicalProficiency/>
    <MyProjects/>
    <Education/>
    {/* <ContactMe/> */}
    <Footer/>
    </div>
  )
}

export default App