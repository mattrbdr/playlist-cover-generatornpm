import React from 'react';

function ControlPanel({
    setImage, text, setText, fontSize, setFontSize, position, setPosition, alignment, setAlignment
}) {
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
    };

    return (
        <div className="controls">
            <div className="control-group">
                <label>Cover Image</label>
                <div className="file-upload">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="file-input" 
                        id="file-input"
                    />
                    <label htmlFor="file-input" className="file-label">
                        <i className="fas fa-cloud-upload-alt"></i>
                        Choose an image
                    </label>
                    <div className="size-info upload-info">
                        Recommended size: 1152 x 1152 px
                    </div>
                </div>
            </div>

            <div className="control-group">
                <label>Text</label>
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Your text here"
                    maxLength="100"
                    rows="3"
                    className="text-input"
                />
                <div className="char-count">
                    {text.length}/100 characters
                </div>
            </div>

            <div className="control-group">
                <label>Text Size (px)</label>
                <div className="number-input">
                    <input
                        type="number"
                        value={fontSize}
                        onChange={(e) => setFontSize(parseInt(e.target.value))}
                        placeholder="Font size"
                        min="10"
                        max="100"
                    />
                    <div className="number-controls">
                        <button onClick={() => setFontSize(prev => Math.min(prev + 1, 100))}>▲</button>
                        <button onClick={() => setFontSize(prev => Math.max(prev - 1, 10))}>▼</button>
                    </div>
                </div>
            </div>

            <div className="control-group">
                <label>Text Position</label>
                <select value={position} onChange={(e) => setPosition(e.target.value)}>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>
            </div>

            <div className="control-group">
                <label>Text Alignment</label>
                <select value={alignment} onChange={(e) => setAlignment(e.target.value)}>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>
        </div>
    );
}

export default ControlPanel;