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
        <section className="hero-section" ref={heroRef}>
            <div className="hero-content">
                <h1 ref={titleRef} className="hero-title" style={{
                    marginBottom: '24px',
                    lineHeight: 1.05
                }}>
                    Designing Products That <br />
                    <span className="highlight">Actually Ship.</span>
                </h1>

                <div ref={subtitleRef} className="hero-intro" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '520px'
                }}>
                    <p style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        margin: 0,
                        marginBottom: '16px',
                        lineHeight: 1.6
                    }}>
                        Shanmukha Vardhan <span style={{ color: 'var(--text-secondary)', fontWeight: '400' }}>— Creative Developer & Freelancer</span>
                    </p>

                    <p style={{
                        fontSize: '1.15rem',
                        fontWeight: '400',
                        color: 'var(--text-secondary)',
                        margin: 0,
                        marginBottom: '28px',
                        lineHeight: 1.6
                    }}>
                        I design and build fast, conversion-focused digital products for startups.<br />
                        From idea to shipped product, I focus on clarity, speed, and real user impact.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '32px'
                    }}>
                        {/* Status Badge */}
                        <a href="#contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 18px',
                            background: 'rgba(39, 174, 96, 0.08)',
                            border: '1px solid rgba(39, 174, 96, 0.2)',
                            borderRadius: '50px',
                            color: '#27ae60',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease'
                        }}>
                            <span style={{ fontSize: '1.1em' }}>🟢</span>
                            Available for freelance & early-stage startups
                        </a>

                        {/* Secondary Badge */}
                        <a href="/avolve" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 18px',
                            background: 'rgba(100, 100, 100, 0.08)',
                            border: '1px solid rgba(100, 100, 100, 0.2)',
                            borderRadius: '50px',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease'
                        }}>
                            <span style={{ fontSize: '1.1em' }}>🚀</span>
                            Building AVOLVE
                        </a>
                    </div>

                    {/* Primary CTA */}
                    <div style={{ marginTop: '16px' }}>
                        <a href="#work" className="primary-cta" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '14px 28px',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            transition: 'transform 0.2s ease, opacity 0.2s ease'
                        }}>
                            View My Work →
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-visual" ref={visualRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Reserved for something exciting */}
            </div>
        </section>
    );
};

export default Hero;
