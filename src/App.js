import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './components/App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/benkimim" element={<About />} />
                <Route path="/neler-yapabilirim" element={<Skills />} />
                <Route path="/portfolyo" element={<Portfolio />} />
                <Route path="/iletisim" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
