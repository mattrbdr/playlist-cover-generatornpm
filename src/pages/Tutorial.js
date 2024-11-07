import React from 'react';
import Footer from '../components/Footer';

function Tutorial() {
    return (
        <div className="tutorial-page">
            <div className="tutorial-content">
                <h1 className="tutorial-title">Guide & Tips <span className="highlight">to create a beautiful cover</span></h1>
                
                <div className="tutorial-grid">
                    <section className="tutorial-section">
                        <h2>Choose the right image</h2>
                        <ul>
                            <li>Use high-quality images (minimum 1152×1152 pixels)</li>
                            <li>Prefer images with good contrast</li>
                            <li>Avoid images with too many details</li>
                        </ul>
                    </section>

                    <section className="tutorial-section">
                        <h2>The perfect text</h2>
                        <ul>
                            <li>Keep the text short and impactful</li>
                            <li>Use a font size adapted to the text length</li>
                            <li>Position the text to ensure readability</li>
                        </ul>
                    </section>

                    <section className="tutorial-section">
                        <h2>Design tips</h2>
                        <ul>
                            <li>Use the black gradient to improve text readability</li>
                            <li>Test different positions and alignments</li>
                            <li>Keep a balance between text and image</li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Tutorial; 