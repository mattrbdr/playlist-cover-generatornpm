import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p>Designed and developed with ❤️ by</p>
            <p className="creator">
                <a href="https://www.odyssey.matteorbdr.com" target="_blank" rel="noopener noreferrer">
                    UntilEverythingIsDone
                </a>
            </p>
            <div className="social-links">
                <a href="https://github.com/mattrbdr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/matteorbdr/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
            <p>© {new Date().getFullYear()} All rights reserved</p>
        </footer>
    );
}

export default Footer; 