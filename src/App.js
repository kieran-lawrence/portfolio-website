import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/forms/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './index.css';
import PortfolioOverview from './components/pages/PortfolioOverview';

const App = () => {
    return (
        <div className='container'>
            <div className='nav'>
                <Navbar />
            </div>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/portfolio/:id" element={<PortfolioOverview />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <div className='footer'>
                <Footer />
            </div>    
        </div>
    )
}

export default App