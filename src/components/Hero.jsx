import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section" style={{
            paddingTop: '0px',
            paddingBottom: '100px',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'flex-start'
        }}>
            <div className="hero-content">
                <h1 className="hero-title" style={{
                    fontSize: '64px',
                    lineHeight: 1.05,
                    maxWidth: '520px',
                    marginBottom: '24px',
                    fontWeight: '700',
                    color: 'var(--text-primary)'
                }}>
                    Turning Ideas Into Real solutions.
                </h1>

                <div className="hero-intro" style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <p style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        margin: 0,
                        marginBottom: '16px',
                        lineHeight: 1.5
                    }}>
                        Shanmukha Vardhan — Freelance Developer <br />
                        <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}>Founder of AVOLVE Studio</span>
                    </p>

                    <p style={{
                        fontSize: '1.15rem',
                        fontWeight: '400',
                        color: 'var(--text-secondary)',
                        margin: 0,
                        marginBottom: '32px',
                        lineHeight: 1.6,
                        maxWidth: '480px'
                    }}>
                        I build MVPs for early-stage startups and modern websites for businesses.<br />
                        I also build my own products through AVOLVE Studio.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="#work" className="primary-cta" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '16px 32px',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-color)',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'transform 0.2s ease, opacity 0.2s ease'
                        }}>
                            View Work
                        </a>

                        <a href="/contact" className="secondary-cta" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            padding: '16px 32px',
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-color, rgba(255, 255, 255, 0.1))',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'all 0.2s ease'
                        }}>
                            Start a Project
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-visual" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                <div style={{
                    width: '100%',
                    maxWidth: '480px',
                    padding: '24px',
                    borderRadius: '16px',
                    background: '#f6f6f6',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    color: '#111',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666', marginBottom: '12px' }}>
                        Featured Project (Best)
                    </div>

                    <img src="/images/ProjectA.png" alt="AVOLVE App UI Preview" style={{
                        width: '100%',
                        height: '240px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }} />

                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#111' }}>
                        AVOLVE
                    </h3>

                    <p style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.5, margin: '0 0 20px 0' }}>
                        Mental health platform focused on helping people manage loneliness, emotional stress, and self-reflection.
                    </p>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                        {['Next.js', 'Supabase', 'Product Design'].map(tag => (
                            <span key={tag} style={{
                                padding: '4px 10px',
                                background: 'rgba(0,0,0,0.05)',
                                borderRadius: '50px',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: '#333'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href="/avolve" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: '600',
                        color: '#111',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        transition: 'opacity 0.2s ease'
                    }}>
                        View Project →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
