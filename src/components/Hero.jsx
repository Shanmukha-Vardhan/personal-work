import React from 'react';

const Hero = () => {
    return (
        <section style={{
            padding: '80px 48px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '90vh',
            justifyContent: 'center'
        }}>
            {/* Overline */}
            <div style={{
                fontSize: '1rem',
                color: '#7b8ea8',
                fontWeight: '400',
                lineHeight: 1.6,
                marginBottom: '16px',
                fontFamily: "'DM Serif Display', Georgia, serif"
            }}>
                volume I —<br />
                the tale of
            </div>

            {/* Name */}
            <h1 style={{
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: '400',
                color: '#1a1a1a',
                lineHeight: 1.15,
                marginBottom: '8px',
                fontFamily: "'DM Serif Display', Georgia, serif",
                letterSpacing: '-0.01em'
            }}>
                shanmukha vardhan
            </h1>

            {/* Underline accent */}
            <div style={{
                width: '320px',
                maxWidth: '60%',
                height: '3px',
                background: '#7b8ea8',
                borderRadius: '2px',
                marginBottom: '80px'
            }} />

            {/* Hero Image — collage-style */}
            <div style={{
                maxWidth: '600px',
                width: '100%'
            }}>
                <img
                    src="/images/img1.png"
                    alt="Shanmukha Vardhan"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain'
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
