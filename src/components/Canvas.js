import React, { useRef, useEffect } from 'react';

function Canvas({ image, text, fontSize, position, alignment }) {
    const canvasRef = useRef(null);
    const CANVAS_WIDTH = 1152;
    const CANVAS_HEIGHT = 1152;

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'playlist-cover.png';
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false });
        
        // Enable font smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        if (image) {
            const img = new Image();
            img.src = image;
            img.onload = () => {
                // Clear canvas with black background
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

                // Calculate aspect ratio fitting
                const scale = Math.max(CANVAS_WIDTH / img.width, CANVAS_HEIGHT / img.height);
                const imgX = (CANVAS_WIDTH - img.width * scale) * 0.5;
                const imgY = (CANVAS_HEIGHT - img.height * scale) * 0.5;

                // Draw image with proper scaling
                ctx.drawImage(img, imgX, imgY, img.width * scale, img.height * scale);

                // Add gradient overlay
                let gradient;
                if (position === "top") {
                    gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT * 0.5);
                    gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)");
                    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                } else {
                    gradient = ctx.createLinearGradient(0, CANVAS_HEIGHT, 0, CANVAS_HEIGHT * 0.5);
                    gradient.addColorStop(0, "rgba(0, 0, 0, 0.8)");
                    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                }
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

                // Draw text with better quality
                ctx.fillStyle = "#FFFFFF";
                ctx.font = `bold ${fontSize * 2}px Inter`;
                ctx.textAlign = alignment;
                ctx.textBaseline = 'middle';
                
                // Add text shadow for better visibility
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                ctx.shadowBlur = 15;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

                // Calculate text position
                const textX = alignment === "left" ? CANVAS_WIDTH * 0.1 :
                            alignment === "center" ? CANVAS_WIDTH * 0.5 :
                            CANVAS_WIDTH * 0.9;
                            
                const lines = text.split('\n');
                const lineHeight = fontSize * 2.4; // Espacement entre les lignes

                lines.forEach((line, index) => {
                    const yOffset = index * lineHeight;
                    const finalY = position === "top" ? 
                        CANVAS_HEIGHT * 0.15 + yOffset : 
                        CANVAS_HEIGHT * 0.85 - ((lines.length - 1) * lineHeight) + yOffset;
                    
                    ctx.fillText(line, textX, finalY);
                });
            };
        } else {
            // Show empty state
            ctx.fillStyle = '#282828';
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        }
    }, [image, text, fontSize, position, alignment]);

    return (
        <div className="canvas-container">
            <canvas 
                ref={canvasRef} 
                width={CANVAS_WIDTH} 
                height={CANVAS_HEIGHT} 
                className="canvas" 
            />
            {image && (
                <button className="download-btn" onClick={handleDownload}>
                    DOWNLOAD COVER
                </button>
            )}
        </div>
    );
}

export default Canvas;