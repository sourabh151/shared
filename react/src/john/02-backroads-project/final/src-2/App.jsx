import React from 'react'
import "./css/App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Tours from './components/Tours'
import Footer from './components/Footer'
import "./css/all.css"

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Tours />
            <Footer />
        </>
    )
}

export default App