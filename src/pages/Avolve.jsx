import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Avolve = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const philosophyRef = useRef(null);
    const featuresRef = useRef(null);
    const closingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo(heroRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            // Philosophy Section
            gsap.fromTo(philosophyRef.current.children,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: 'top 80%',
                    }
                }
            );

            // Features/Values Cards
            const cards = featuresRef.current.children;
            gsap.fromTo(cards,
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Closing Statement
            gsap.fromTo(closingRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: closingRef.current,
                        start: 'top 90%',
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main
            className="avolve-container"
            ref={containerRef}
            style={{
                padding: '40px 60px',
                minHeight: '100vh',
                paddingTop: '120px',
                maxWidth: '1200px',
                margin: '0 auto',
                color: 'var(--text-primary)'
            }}
        >
            {/* Hero Section */}
            <div ref={heroRef} style={{ textAlign: 'center', marginBottom: '120px' }}>
                <h1 style={{
                    fontSize: 'clamp(4rem, 12vw, 8rem)',
                    fontWeight: '700',
                    lineHeight: '0.9',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.04em',
                    marginBottom: '20px',
                    marginBottom: '20px',
                    color: 'var(--text-primary)'
                }}>
                    AVOLVE
                </h1>
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)',
                    fontWeight: 300,
                    maxWidth: '600px',
                    margin: '0 auto',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}>
                    My brain turned into a product
                </p>
            </div>

            {/* Philosophy / Story */}
            <section ref={philosophyRef} style={{ marginBottom: '100px', maxWidth: '800px', margin: '0 auto 100px' }}>
                <div style={styles.quoteBlock}>
                    <p style={styles.quoteText}>
                        "Avolve is one of those projects that started with <span style={styles.highlight}>'what if this could exist?'</span> and slowly became <span style={styles.highlight}>'okay… this actually needs to exist.'</span>"
                    </p>
                </div>

                <p style={styles.paragraph}>
                    At its core, Avolve is about growth. Personal, digital, and slightly chaotic growth. It’s built to help users reflect, improve, and move forward without feeling like they’re being lectured by a robot.
                </p>
                <p style={styles.paragraph}>
                    From system design to UI decisions, everything was built with intention. No random features. No “just because” buttons. Every part earns its place.
                </p>
            </section>

            {/* Core Values / Features */}
            <section style={{ marginBottom: '120px' }}>
                <h3 style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem'
                }}>
                    Designed to feel...
                </h3>
                <div ref={featuresRef} style={styles.gridThreeCol}>
                    <div style={styles.featureCard}>
                        <div style={styles.icon}>🌱</div>
                        <h3 style={styles.cardTitle}>Human</h3>
                        <p style={styles.cardDesc}>Not Clinical.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <div style={styles.icon}>🤝</div>
                        <h3 style={styles.cardTitle}>Helpful</h3>
                        <p style={styles.cardDesc}>Not Overwhelming.</p>
                    </div>
                    <div style={styles.featureCard}>
                        <div style={styles.icon}>🧠</div>
                        <h3 style={styles.cardTitle}>Smart</h3>
                        <p style={styles.cardDesc}>But not Smug.</p>
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <div
                ref={closingRef}
                style={{
                    background: 'var(--bg-card)',
                    padding: '60px 40px',
                    borderRadius: '24px',
                    textAlign: 'center',
                    border: '1px solid rgba(0,0,0,0.05)',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}
            >
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '20px',
                    color: 'var(--text-primary)'
                }}>
                    Avolve isn’t perfect.<br />
                    Neither are people.
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic'
                }}>
                    That’s kind of the point.
                </p>
            </div>

            {/* Bottom Spacer */}
            <div style={{ height: '100px' }}></div>
        </main>
    );
};

const styles = {
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: 'var(--text-primary)',
        marginBottom: '32px',
        fontWeight: 400
    },
    quoteBlock: {
        padding: '0 20px',
        borderLeft: '4px solid var(--text-primary)',
        marginBottom: '40px'
    },
    quoteText: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-display)',
        lineHeight: '1.4',
        color: 'var(--text-primary)',
        fontStyle: 'italic'
    },
    highlight: {
        color: 'var(--text-primary)',
        fontStyle: 'normal',
        fontWeight: 600
    },
    gridThreeCol: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
    },
    featureCard: {
        padding: '40px 30px',
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '20px'
    },
    cardTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: 'var(--text-primary)'
    },
    cardDesc: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
    }
};

export default Avolve;
