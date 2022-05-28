import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/servicies/Services'
import Portafolio from './components/portafolio/Portafolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portafolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App
