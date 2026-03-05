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
                fontWeight: '500',
                color: '#1a1a1a',
                lineHeight: 1.15,
                marginBottom: '8px',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                letterSpacing: '-0.02em'
            }}>
                shanmukha vardhan
            </h1>

            {/* Hand-drawn underline accent */}
            <svg
                width="320"
                height="12"
                viewBox="0 0 320 12"
                fill="none"
                style={{ maxWidth: '60%', marginBottom: '80px' }}
            >
                <path
                    d="M2 8 C40 2, 80 10, 120 5 S200 1, 240 7 S300 3, 318 6"
                    stroke="#7b8ea8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>

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
