import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef(null);
    const learningRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Massive heading entrance
            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 100, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power4.out',
                    delay: 0.2
                }
            );

            // Content paragraphs stagger
            const paragraphs = contentRef.current.querySelectorAll('p');
            gsap.fromTo(paragraphs,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.4
                }
            );

            // Stats counter animation
            const statItems = statsRef.current.querySelectorAll('.stat-item');
            statItems.forEach((item, index) => {
                gsap.fromTo(item,
                    { opacity: 0, y: 60, scale: 0.9 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: 'back.out(1.5)',
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                        delay: index * 0.1
                    }
                );
            });

            // Learning section
            gsap.fromTo(learningRef.current,
                { opacity: 0, x: -60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: learningRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Skills tags with stagger
            const skillTags = skillsRef.current.querySelectorAll('.skill-tag');
            gsap.fromTo(skillTags,
                { opacity: 0, scale: 0.8, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'back.out(2)',
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
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
                paddingTop: '100px',
                maxWidth: '1000px',
                margin: '0 auto'
            }}
        >
            {/* Big Statement Heading */}
            <h1
                ref={headingRef}
                style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    fontWeight: '300',
                    marginBottom: '60px',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                    lineHeight: '1.1'
                }}
            >
                Building digital<br />
                <span style={{
                    fontStyle: 'italic',
                    fontWeight: '400',
                    color: 'var(--text-secondary)'
                }}>experiences</span> that<br />
                matter.
            </h1>

            {/* Content */}
            <div
                className="about-content"
                ref={contentRef}
                style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.9',
                    color: 'var(--text-secondary)',
                    maxWidth: '700px'
                }}
            >
                <p style={{ marginBottom: '28px' }}>
                    Hello! I'm Shanmukha Vardhan, a passionate developer and designer who loves building things for the web.
                    I specialize in creating high-quality web applications that not only work great but look amazing too.
                </p>

                <p style={{ marginBottom: '28px' }}>
                    My journey began with a curiosity for how things work on the internet, which quickly turned into a career
                    fueled by coffee and code. I enjoy working with the latest technologies like React, Node.js, and modern CSS
                    to bring ideas to life.
                </p>

                <p style={{ marginBottom: '28px' }}>
                    When I'm not coding, you can find me exploring new design trends, tweaking my developer setup, or
                    learning about the next big thing in tech.
                </p>
            </div>

            {/* Stats Grid */}
            <div
                className="stats-grid"
                ref={statsRef}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '40px',
                    margin: '80px 0',
                    textAlign: 'left',
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    padding: '60px 0'
                }}
            >
                <div className="stat-item">
                    <span style={{
                        display: 'block',
                        fontSize: '4rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-display)',
                        lineHeight: '1'
                    }}>15+</span>
                    <span style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginTop: '8px',
                        display: 'block'
                    }}>Projects Completed</span>
                </div>
                <div className="stat-item">
                    <span style={{
                        display: 'block',
                        fontSize: '4rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-display)',
                        lineHeight: '1'
                    }}>3+</span>
                    <span style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginTop: '8px',
                        display: 'block'
                    }}>Years Experience</span>
                </div>
                <div className="stat-item">
                    <span style={{
                        display: 'block',
                        fontSize: '4rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-display)',
                        lineHeight: '1'
                    }}>100%</span>
                    <span style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginTop: '8px',
                        display: 'block'
                    }}>Client Satisfaction</span>
                </div>
            </div>

            {/* Currently Exploring */}
            <div
                className="learning-section"
                ref={learningRef}
                style={{ marginBottom: '80px' }}
            >
                <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '400',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}>Currently Exploring</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    background: 'rgba(0,0,0,0.02)',
                    padding: '32px',
                    borderRadius: '16px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{ fontSize: '3rem' }}>📐</div>
                    <div>
                        <h4 style={{
                            margin: 0,
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            fontSize: '1.3rem'
                        }}>Advanced Three.js & WebGL</h4>
                        <p style={{
                            margin: '8px 0 0',
                            fontSize: '1rem',
                            color: 'var(--text-secondary)'
                        }}>Pushing the boundaries of 3D web experiences.</p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="skills-section" ref={skillsRef}>
                <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '400',
                    marginBottom: '24px',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}>Expertise</h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                    {['JavaScript (ES6+)', 'React', 'Node.js', 'CSS/SCSS', 'UI/UX Design', 'Git', 'Figma', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js'].map(skill => (
                        <span
                            key={skill}
                            className="skill-tag"
                            style={{
                                padding: '12px 24px',
                                background: 'rgba(0,0,0,0.03)',
                                borderRadius: '50px',
                                fontSize: '0.95rem',
                                color: 'var(--text-primary)',
                                border: '1px solid rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: '100px' }}></div>
        </main>
    );
};

export default About;
