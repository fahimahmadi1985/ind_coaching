import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Search from './components/Search';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard/:name/:lname" element={<Dashboard />} />
                <Route path="/search/:searchkey" element={<Search />} />
            </Routes>
        </div>
    )
}

export default App