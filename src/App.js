import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tutorial" element={<Tutorial />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;