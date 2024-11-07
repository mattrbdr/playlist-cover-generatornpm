import React, { useState } from 'react';
import ControlPanel from '../components/ControlPanel';
import Canvas from '../components/Canvas';
import Footer from '../components/Footer';

function Home() {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [fontSize, setFontSize] = useState(48);
    const [position, setPosition] = useState('bottom');
    const [alignment, setAlignment] = useState('center');

    return (
        <div className="App">
            <div className="header">
                <p className="app-subtitle">YOUR MUSIC APPLICATION IS WAITING FOR YOU</p>
                <h1>Make your own playlist <span className="highlight">cover</span></h1>
                <p className="subtitle">Create your own playlist cover in just 2 minutes, free of charge!</p>
                <p className="compatibility">Compatible with Spotify, Apple Music, Deezer, and more</p>
            </div>

            <div className="main-content-grid">
                <div className="canvas-section">
                    <Canvas
                        image={image}
                        text={text}
                        fontSize={fontSize}
                        position={position}
                        alignment={alignment}
                    />
                </div>

                <div className="controls-section">
                    <ControlPanel
                        setImage={setImage}
                        text={text}
                        setText={setText}
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        position={position}
                        setPosition={setPosition}
                        alignment={alignment}
                        setAlignment={setAlignment}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home; 