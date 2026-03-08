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
                style={{ maxWidth: '60%', marginBottom: '16px' }}
            >
                <path
                    d="M2 8 C40 2, 80 10, 120 5 S200 1, 240 7 S300 3, 318 6"
                    stroke="#7b8ea8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>

            {/* Subtitle */}
            <p style={{
                fontSize: '1.05rem',
                color: '#888',
                fontWeight: '400',
                letterSpacing: '0.03em',
                marginBottom: '60px',
                fontFamily: "system-ui, -apple-system, sans-serif"
            }}>
                developer & product maker from vizag
            </p>

            {/* Hero Image — larger on desktop */}
            <div style={{
                maxWidth: '750px',
                width: '100%',
                opacity: 0,
                animation: 'fadeImageIn 1.2s ease-out 0.3s forwards' // Added fade-in animation
            }}>
                <img
                    src="/images/img1.png"
                    alt="Shanmukha Vardhan"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply' // This removes the white rectangle background!
                    }}
                />
            </div>

            {/* Scroll hint */}
            <div style={{
                marginTop: '48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                opacity: 0,
                animation: 'heroFloat 2s ease-in-out infinite, fadeImageIn 1s ease-out 1s forwards'
            }}>
                <span style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#999',
                    fontFamily: "system-ui, -apple-system, sans-serif"
                }}>scroll</span>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                    <path d="M8 4L8 18M8 18L2 12M8 18L14 12" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <style>{`
                @keyframes heroFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(6px); }
                }
                @keyframes fadeImageIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
