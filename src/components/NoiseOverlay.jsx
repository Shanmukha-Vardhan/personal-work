import React from 'react';

const NoiseOverlay = () => {
    return (
        <div className="noise-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9998,
            opacity: 0.05,
            background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
            filter: 'contrast(100%) brightness(100%)',
        }} />
    );
};

export default NoiseOverlay;
