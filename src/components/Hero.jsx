import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const statusRef = useRef(null);
    const visualRef = useRef(null);

    // GSAP Animations - use useLayoutEffect to ensure DOM is ready
    // GSAP Animations - use useLayoutEffect to ensure DOM is ready
    useLayoutEffect(() => {
        let ctx;

        // Small delay to ensure React has rendered
        const timer = setTimeout(() => {
            if (!heroRef.current) return;

            ctx = gsap.context(() => {
                // Entrance timeline
                const tl = gsap.timeline();

                tl.fromTo(titleRef.current,
                    { opacity: 0, y: 80 },
                    { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
                )
                    .fromTo(subtitleRef.current,
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
                        '-=0.8'
                    )
                    .fromTo(statusRef.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' },
                        '-=0.6'
                    )
                    .fromTo(visualRef.current,
                        { opacity: 0, x: 100, scale: 0.9 },
                        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power4.out' },
                        '-=1'
                    );

                // Parallax on scroll - title moves up and fades
                gsap.to(titleRef.current, {
                    y: -150,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1.5,
                    }
                });

                // Subtitle parallax (slower)
                gsap.to(subtitleRef.current, {
                    y: -80,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: '80% top',
                        scrub: 1,
                    }
                });

                // Visual parallax (moves up slightly)
                gsap.to(visualRef.current, {
                    y: -60,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1.2,
                    }
                });

            }, heroRef);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (ctx) ctx.revert();
        };
    }, []);

    return (
        <section className="hero-section" ref={heroRef} style={{
            paddingTop: '120px',
            paddingBottom: '100px',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
        }}>
            <div className="hero-content">
                <h1 ref={titleRef} className="hero-title" style={{
                    fontSize: '64px',
                    lineHeight: 1.05,
                    maxWidth: '520px',
                    marginBottom: '24px',
                    fontWeight: '700',
                    color: 'var(--text-primary)'
                }}>
                    Turning Ideas Into Real Products.
                </h1>

                <div ref={subtitleRef} className="hero-intro" style={{
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
                            color: 'var(--bg-primary)',
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

            <div className="hero-visual" ref={visualRef} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                <div style={{
                    width: '100%',
                    maxWidth: '420px',
                    padding: '32px',
                    borderRadius: '18px',
                    background: '#f6f6f6',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    color: '#111',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666', marginBottom: '16px' }}>
                        Featured Project (Best)
                    </div>

                    <img src="/images/ProjectA.png" alt="AVOLVE App UI Preview" style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        marginBottom: '24px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }} />

                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px 0', color: '#111' }}>
                        AVOLVE
                    </h3>

                    <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                        Mental health platform focused on helping people manage loneliness, emotional stress, and self-reflection.
                    </p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                        {['Next.js', 'Supabase', 'Product Design'].map(tag => (
                            <span key={tag} style={{
                                padding: '6px 12px',
                                background: 'rgba(0,0,0,0.05)',
                                borderRadius: '50px',
                                fontSize: '0.8rem',
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
                        gap: '8px',
                        fontWeight: '600',
                        color: '#111',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
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
