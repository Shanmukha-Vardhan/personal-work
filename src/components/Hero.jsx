import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section-v2" style={{
            paddingTop: '40px',
            paddingBottom: '120px',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative'
        }}>
            {/* Overline */}
            <div style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                opacity: 0.7
            }}>
                volume I — the tale of
            </div>

            {/* Name - Big & Bold */}
            <h1 className="hero-title" style={{
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                lineHeight: 1,
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-display)'
            }}>
                shanmukha
            </h1>
            <h1 className="hero-title" style={{
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                lineHeight: 1,
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '60px',
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-display)'
            }}>
                vardhan
            </h1>

            {/* Hero Image */}
            <div style={{
                width: '100%',
                maxWidth: '900px',
                borderRadius: '20px',
                overflow: 'hidden',
                marginBottom: '0',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)'
            }}>
                <img
                    src="/images/img1.png"
                    alt="Shanmukha Vardhan - Developer & Designer"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
