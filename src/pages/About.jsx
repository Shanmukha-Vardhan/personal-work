import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const profileRef = useRef(null);
    const interestsRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Entrance
            gsap.fromTo(headerRef.current.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            // Profile Section Stagger
            gsap.fromTo(profileRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: profileRef.current,
                        start: 'top 80%',
                    }
                }
            );

            // Interests List items
            const listItems = interestsRef.current.querySelectorAll('li');
            gsap.fromTo(listItems,
                { x: -20, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: interestsRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Stats Banner
            gsap.fromTo(statsRef.current,
                { scale: 0.95, opacity: 0, y: 20 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 90%',
                    }
                }
            );



        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main
            className="about-container"
            ref={containerRef}
            style={{
                padding: '40px 60px',
                minHeight: '100vh',
                paddingTop: '120px',
                maxWidth: '1000px',
                margin: '0 auto',
                color: 'var(--text-primary)'
            }}
        >
            <SEO
                title="About"
                description="I'm Shanmukha Vardhan — a creative developer and designer building digital experiences that actually matter. Currently focused on Avolve, a mental health startup."
                url="https://shanmukhavardhan.com/about"
            />
            {/* Header / Hook */}
            <div ref={headerRef} style={{ marginBottom: '80px' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: '600',
                    lineHeight: '1.1',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em'
                }}>
                    Building digital experiences that <span style={{ color: 'var(--text-primary)' }}>actually matter</span>
                </h1>
                <p style={{
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    opacity: 0.8
                }}>
                    (and don’t crash on the first click)
                </p>
            </div>

            {/* Profile & Journey */}
            <div ref={profileRef} style={{ maxWidth: '750px' }}>
                <p className="bio-text" style={styles.paragraph}>
                    Hey, I’m <strong>Shanmukha Vardhan</strong> 👋
                </p>
                <p style={styles.paragraph}>
                    A developer who likes clean code, thoughtful design, and projects that feel alive instead of lifeless rectangles on a screen.
                </p>
                <p style={styles.paragraph}>
                    I build web applications that don’t just work, but feel good to use. The kind where buttons make sense, pages load fast, and users don’t need a manual to survive.
                </p>

                <div style={{ margin: '60px 0', paddingLeft: '20px', borderLeft: '2px solid var(--text-secondary)' }}>
                    <p style={{ ...styles.paragraph, fontStyle: 'italic', fontSize: '1.1rem' }}>
                        "My journey started the usual way: curiosity, broken things, Googling errors at 2 AM, repeat. Somewhere between my first “Hello World” and my fifteenth bug-induced breakdown, this curiosity turned into a genuine love for building things on the web."
                    </p>
                </div>

                <p style={styles.paragraph}>
                    I work mostly with <strong>React, Node.js, and modern CSS</strong>, translating ideas into interfaces that are simple, intuitive, and occasionally satisfying to click.
                </p>
            </div>

            {/* Interests List */}
            <div style={{ margin: '60px 0' }}>
                <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    marginBottom: '24px',
                    color: 'var(--text-secondary)'
                }}>
                    When I’m not coding, I’m probably:
                </p>
                <ul ref={interestsRef} style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: 0
                }}>
                    {[
                        "tweaking my dev setup for the 17th time",
                        "exploring design trends I may or may not use",
                        "learning about the next big tech thing before it becomes a meme"
                    ].map((item, i) => (
                        <li key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)'
                        }}>
                            <span style={{ color: 'var(--text-secondary)' }}>➔</span> {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Stats Banner */}
            <div
                ref={statsRef}
                style={{
                    background: 'var(--bg-card)',
                    padding: '40px',
                    borderRadius: '20px',
                    margin: '100px 0',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center'
                }}
            >
                <p style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-display)',
                    lineHeight: '1.6',
                    margin: 0
                }}>
                    <strong>15+ projects completed</strong>, countless lessons learned, and still curious.
                </p>
            </div>

            {/* Removed Avolve Section (Moved to /avolve) */}

            {/* Bottom Spacer */}
            <div style={{ height: '100px' }}></div>
        </main>
    );
};

const styles = {
    paragraph: {
        fontSize: '1.15rem',
        lineHeight: '1.8',
        color: 'var(--text-secondary)',
        marginBottom: '24px',
        fontWeight: 400
    },
    gridTwoCol: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center'
    },
    valueCard: {
        padding: '20px 24px',
        background: 'var(--bg-card)',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(0,0,0,0.05)'
    },
    valueTitle: {
        fontFamily: 'var(--font-display)',
        fontWeight: '600',
        fontSize: '1.2rem',
        color: 'var(--text-primary)'
    },
    valueDesc: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    }
};

export default About;
