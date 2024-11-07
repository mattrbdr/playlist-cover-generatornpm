import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/">Playlist Cover</Link>
                    <button 
                        className={`hamburger ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/tutorial" className="nav-link" onClick={() => setIsOpen(false)}>
                        Guide & Tips
                    </Link>
                    <a 
                        href="https://www.odyssey.matteorbdr.com" 
                        className="nav-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                    >
                        Odyssey
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 