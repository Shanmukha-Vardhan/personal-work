import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const Avolve = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const whyRef = useRef(null);
    const productRef = useRef(null);
    const roleRef = useRef(null);
    const statusRef = useRef(null);
    const ctaRef = useRef(null);

    // Accent color palette
    const accent = '#27ae60';
    const accentSoft = 'rgba(39, 174, 96, 0.1)';

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Breathing background
            gsap.to('.avolve-breathing-bg', {
                backgroundPosition: '100% 100%',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Hero entrance
            gsap.fromTo(heroRef.current.children,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );

            // Section reveals
            const sections = [whyRef, productRef, roleRef, statusRef, ctaRef];
            sections.forEach((ref) => {
                if (!ref.current) return;
                gsap.fromTo(ref.current.querySelectorAll('.reveal-item'),
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        stagger: 0.1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ref.current,
                            start: 'top 80%',
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const sectionStyle = {
        marginBottom: '120px',
        maxWidth: '750px',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    const headingStyle = {
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        marginBottom: '40px',
        color: 'var(--text-primary)',
        borderLeft: `4px solid ${accent}`,
        paddingLeft: '20px'
    };

    const paragraphStyle = {
        fontSize: '1.15rem',
        lineHeight: 1.8,
        color: 'var(--text-secondary)',
        marginBottom: '24px'
    };

    const highlightStyle = {
        color: accent,
        fontWeight: 600
    };

    return (
        <main
            className="avolve-container avolve-breathing-bg"
            ref={containerRef}
            style={{
                minHeight: '100vh',
                paddingTop: '120px',
                paddingBottom: '80px',
                background: 'linear-gradient(135deg, #ffffff 0%, #f4fcf6 50%, #ffffff 100%)',
                backgroundSize: '200% 200%',
                color: 'var(--text-primary)'
            }}
        >
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
                <SEO
                    title="Avolve | Mental Health Companion"
                    description="Avolve is a calm, intentional mental health companion. Built to feel supportive without being overwhelming. Handling 500+ active users."
                    url="https://shanmukhavardhan.com/avolve"
                />

                {/* Hero */}
                <header ref={heroRef} style={{ textAlign: 'center', marginBottom: '140px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: `radial-gradient(circle, ${accent}30 0%, transparent 70%)`,
                        borderRadius: '50%',
                        margin: '0 auto 20px',
                        filter: 'blur(15px)'
                    }}></div>

                    <h1 style={{
                        fontSize: 'clamp(4rem, 12vw, 7rem)',
                        fontWeight: 800,
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.03em',
                        marginBottom: '20px',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        AVOLVE
                        <span style={{ position: 'absolute', top: '-10px', right: '-25px', fontSize: '1.5rem' }}>🌱</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '550px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        A mental health companion designed for growth, not dependency.
                    </p>

                    <p style={{
                        marginTop: '16px',
                        fontSize: '0.85rem',
                        color: accent,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em'
                    }}>
                        Early Stage Startup · 500+ Users
                    </p>
                </header>

                {/* The Why */}
                <section ref={whyRef} style={sectionStyle}>
                    <h2 className="reveal-item" style={headingStyle}>The Why</h2>

                    <p className="reveal-item" style={paragraphStyle}>
                        Mental health apps are either <span style={highlightStyle}>too clinical</span> or <span style={highlightStyle}>too gamified</span>.
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        On one side, you have apps that feel cold, diagnostic, and intimidating.<br />
                        On the other, apps that turn emotions into streaks, scores, and achievements.
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        Both approaches miss something important:<br />
                        <strong style={{ color: 'var(--text-primary)' }}>mental health is personal, slow, and non-linear.</strong>
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        Avolve exists in the space between those extremes.<br />
                        It's built to feel supportive without being overwhelming, and reflective without turning growth into a game.
                    </p>

                    <p className="reveal-item" style={{ ...paragraphStyle, fontStyle: 'italic', color: accent }}>
                        The goal isn't to fix people.<br />
                        It's to help them understand themselves, one small moment at a time.
                    </p>
                </section>

                {/* The Product */}
                <section ref={productRef} style={sectionStyle}>
                    <h2 className="reveal-item" style={headingStyle}>The Product</h2>

                    <p className="reveal-item" style={paragraphStyle}>
                        Avolve is a <span style={highlightStyle}>calm, intentional mental health companion</span>.
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        The experience focuses on:
                    </p>

                    <ul className="reveal-item" style={{ ...paragraphStyle, paddingLeft: '24px', marginBottom: '32px' }}>
                        <li>Gentle daily check-ins</li>
                        <li>Guided reflections instead of questionnaires</li>
                        <li>Insights based on patterns, not performance</li>
                        <li>A minimal interface that reduces cognitive load</li>
                    </ul>

                    <p className="reveal-item" style={paragraphStyle}>
                        Every screen is designed to feel steady and reassuring.<br />
                        No loud colors. No pressure loops. No artificial urgency.
                    </p>

                    <p className="reveal-item" style={{ ...paragraphStyle, fontStyle: 'italic' }}>
                        The product is shaped around one question:<br />
                        <strong style={{ color: 'var(--text-primary)' }}>"How does this feel to use on a difficult day?"</strong>
                    </p>
                </section>

                {/* My Role & Journey */}
                <section ref={roleRef} style={sectionStyle}>
                    <h2 className="reveal-item" style={headingStyle}>My Role & Journey</h2>

                    <p className="reveal-item" style={{
                        ...paragraphStyle,
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '16px'
                    }}>
                        Founder · Designer · Developer
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        Avolve is a product I'm building end-to-end.
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        I'm responsible for:
                    </p>

                    <ul className="reveal-item" style={{ ...paragraphStyle, paddingLeft: '24px', marginBottom: '32px' }}>
                        <li>Product vision and direction</li>
                        <li>UX and UI design</li>
                        <li>Frontend development</li>
                        <li>Early technical architecture</li>
                    </ul>

                    <p className="reveal-item" style={paragraphStyle}>
                        The journey started with personal curiosity around mental health tools and slowly evolved into a startup idea with real users and real responsibility.
                    </p>

                    <p className="reveal-item" style={{ ...paragraphStyle, fontStyle: 'italic' }}>
                        Building Avolve has pushed me beyond just "shipping features" into thinking about <span style={highlightStyle}>ethics, trust, and long-term impact</span>.
                    </p>
                </section>

                {/* Status & Vision */}
                <section ref={statusRef} style={sectionStyle}>
                    <h2 className="reveal-item" style={headingStyle}>Status & Vision</h2>

                    <div className="reveal-item" style={{
                        display: 'flex',
                        gap: '40px',
                        marginBottom: '40px',
                        flexWrap: 'wrap'
                    }}>
                        <div>
                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginBottom: '4px' }}>Status</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: accent }}>Actively under development</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginBottom: '4px' }}>Stage</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Early users · Iteration phase</p>
                        </div>
                    </div>

                    <p className="reveal-item" style={paragraphStyle}>
                        Avolve is not publicly launched yet, but it's already being used by <span style={highlightStyle}>500+ users</span> in its current form.
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        Right now, the focus is on:
                    </p>

                    <ul className="reveal-item" style={{ ...paragraphStyle, paddingLeft: '24px', marginBottom: '32px' }}>
                        <li>Refining core experiences</li>
                        <li>Validating what genuinely helps users</li>
                        <li>Building a strong, scalable foundation</li>
                    </ul>

                    <p className="reveal-item" style={paragraphStyle}>
                        The vision is to grow Avolve into a <span style={highlightStyle}>trusted, privacy-first mental health companion</span> that supports users over time, without creating dependency or pressure.
                    </p>

                    <p className="reveal-item" style={{ ...paragraphStyle, fontWeight: 500, color: 'var(--text-primary)' }}>
                        Growth will be intentional, not rushed.
                    </p>
                </section>

                {/* Call to Action */}
                <section ref={ctaRef} style={{
                    ...sectionStyle,
                    padding: '60px 40px',
                    background: accentSoft,
                    borderRadius: '24px',
                    textAlign: 'center',
                    border: `1px solid ${accent}20`
                }}>
                    <p className="reveal-item" style={{ ...paragraphStyle, fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '24px' }}>
                        This page isn't about selling. It's about <span style={highlightStyle}>sharing the journey</span>.
                    </p>

                    <p className="reveal-item" style={paragraphStyle}>
                        If you're here:
                    </p>

                    <ul className="reveal-item" style={{ ...paragraphStyle, listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                        <li>→ Follow the evolution of Avolve</li>
                        <li>→ Explore the design thinking behind it</li>
                        <li>→ Or simply take inspiration from how it's being built</li>
                    </ul>

                    <p className="reveal-item" style={{ ...paragraphStyle, fontStyle: 'italic', color: accent }}>
                        If Avolve resonates with you, that's already enough.
                    </p>

                    <p className="reveal-item" style={{
                        marginTop: '40px',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.05em'
                    }}>
                        Built carefully. Growing slowly. With people in mind.
                    </p>
                </section>

                {/* Spacer */}
                <div style={{ height: '80px' }}></div>

            </div>
        </main>
    );
};

export default Avolve;
