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

    // Accent Color for Avolve: "Living Green"
    const accentColor = '#27ae60'; // A vivid but natural green
    const softAccent = 'rgba(39, 174, 96, 0.1)';

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Subtle "Breathing" Background Animation
            // We animate a background gradient slowly
            gsap.to('.avolve-breathing-bg', {
                backgroundPosition: '100% 100%',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Hero Animation - Organic and Fluid
            gsap.fromTo(heroRef.current.children,
                { y: 60, opacity: 0, scale: 0.98 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.8, // Slower, more deliberate
                    stagger: 0.25,
                    ease: 'power2.out', // Softer ease
                    delay: 0.2
                }
            );

            // Floating elements animation for icons
            gsap.to('.living-icon', {
                y: -15,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.5
            });

            // Philosophy Section - Fade Up mostly
            gsap.fromTo(philosophyRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: philosophyRef.current,
                        start: 'top 75%', // Earlier trigger for smoother entry
                    }
                }
            );

            // Features/Values Cards - Elastic Pop
            const cards = featuresRef.current.children;
            gsap.fromTo(cards,
                { y: 80, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'elastic.out(1, 0.75)', // Elasticity for "living" feel
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 80%',
                    }
                }
            );

            // Closing Statement Scale Up
            gsap.fromTo(closingRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: closingRef.current,
                        start: 'top 85%',
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main
            className="avolve-container avolve-breathing-bg"
            ref={containerRef}
            style={{
                position: 'relative',
                minHeight: '100vh',
                paddingTop: '120px',
                paddingBottom: '60px',
                maxWidth: '100vw',
                overflow: 'hidden',
                color: 'var(--text-primary)',
                // Subtle gradient background that will be animated
                background: 'linear-gradient(135deg, #ffffff 0%, #f4fcf6 50%, #ffffff 100%)',
                backgroundSize: '200% 200%'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', position: 'relative', zIndex: 1 }}>

                {/* Hero Section */}
                <div ref={heroRef} style={{ textAlign: 'center', marginBottom: '140px' }}>

                    {/* Organic Decoration */}
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'radial-gradient(circle, #27ae6030 0%, transparent 70%)',
                        borderRadius: '50%',
                        margin: '0 auto 20px',
                        filter: 'blur(10px)'
                    }}></div>

                    <h1 style={{
                        fontSize: 'clamp(5rem, 15vw, 9rem)',
                        fontWeight: '800', // Thicker
                        lineHeight: '0.9',
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.04em',
                        marginBottom: '30px',
                        color: 'var(--text-primary)',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        AVOLVE
                        <span style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-20px',
                            fontSize: '2rem',
                            color: accentColor,
                            fontStyle: 'italic'
                        }}>🌱</span>
                    </h1>

                    <p style={{
                        marginTop: '30px',
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-secondary)',
                        fontWeight: 300,
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        "This one matters more to me."
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        color: accentColor,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginTop: '15px'
                    }}>
                        A Living Project
                    </p>
                </div>

                {/* Philosophy / Story - More Personal */}
                <section ref={philosophyRef} style={{ marginBottom: '140px', maxWidth: '800px', margin: '0 auto 140px' }}>
                    <div style={{
                        ...styles.quoteBlock,
                        borderLeftColor: accentColor
                    }}>
                        <p style={styles.quoteText}>
                            Most apps are tools. You pick them up, use them, put them down.<br />
                            <span style={{ color: accentColor, fontWeight: 600 }}>Avolve is a companion.</span>
                        </p>
                    </div>

                    <p style={styles.paragraph}>
                        It started with a simple thought: <em>What if software felt less like a machine and more like a garden?</em>
                    </p>

                    <p style={styles.paragraph}>
                        In a world of rigid spreadsheets and cold notifications, Avolve breathes. It’s designed to adapt to you, not the other way around. It’s messy, it’s evolving, and it’s unapologetically human.
                    </p>

                    <p style={styles.paragraph}>
                        I didn't just build this with code. I built it with care.
                    </p>
                </section>

                {/* Core Values / Features - "Living" Cards */}
                <section style={{ marginBottom: '160px' }}>
                    <h3 style={{
                        textAlign: 'center',
                        marginBottom: '80px',
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem',
                        color: 'var(--text-secondary)'
                    }}>
                        It feels...
                    </h3>
                    <div ref={featuresRef} style={styles.gridThreeCol}>
                        <div style={styles.featureCard} className="avolve-card">
                            <div style={styles.icon} className="living-icon">🌱</div>
                            <h3 style={styles.cardTitle}>Alive</h3>
                            <p style={styles.cardDesc}>It grows as you grow.</p>
                        </div>
                        <div style={styles.featureCard} className="avolve-card">
                            <div style={styles.icon} className="living-icon">🌦️</div>
                            <h3 style={styles.cardTitle}>Adaptive</h3>
                            <p style={styles.cardDesc}>Weathering your storms.</p>
                        </div>
                        <div style={styles.featureCard} className="avolve-card">
                            <div style={styles.icon} className="living-icon">✨</div>
                            <h3 style={styles.cardTitle}>Intention</h3>
                            <p style={styles.cardDesc}>Built for purpose, not metrics.</p>
                        </div>
                    </div>
                </section>

                {/* Closing Statement */}
                <div
                    ref={closingRef}
                    style={{
                        background: `linear-gradient(to bottom right, ${softAccent}, rgba(255,255,255,0))`,
                        padding: '80px 40px',
                        borderRadius: '32px',
                        textAlign: 'center',
                        border: `1px solid ${accentColor}30`, // 30 = low hex opacity
                        maxWidth: '800px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        left: '-50px',
                        width: '150px',
                        height: '150px',
                        background: accentColor,
                        borderRadius: '50%',
                        filter: 'blur(80px)',
                        opacity: 0.2
                    }}></div>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontFamily: 'var(--font-display)',
                        marginBottom: '30px',
                        color: 'var(--text-primary)',
                        lineHeight: 1.2
                    }}>
                        People feel it.<br />
                        Even if they can't explain it.
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        Just like a living thing, Avolve is never finished. And that's exactly how it should be.
                    </p>
                </div>

                {/* Footer Spacer */}
                <div style={{ height: '100px' }}></div>

            </div>
        </main>
    );
};

const styles = {
    paragraph: {
        fontSize: '1.35rem', // Slightly larger for readability
        lineHeight: '1.8',
        color: 'var(--text-secondary)',
        marginBottom: '32px',
        fontWeight: 400
    },
    quoteBlock: {
        padding: '0 30px',
        borderLeft: '4px solid #000', // dynamic override in render
        marginBottom: '50px',
        marginLeft: '-30px' // Hanging indent feel
    },
    quoteText: {
        fontSize: '1.6rem',
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
        gap: '40px',
    },
    featureCard: {
        padding: '50px 30px',
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        border: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)' // Soft shadow
    },
    icon: {
        fontSize: '3.5rem',
        marginBottom: '24px',
        display: 'inline-block'
    },
    cardTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.6rem',
        marginBottom: '12px',
        color: 'var(--text-primary)'
    },
    cardDesc: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5
    }
};

export default Avolve;
