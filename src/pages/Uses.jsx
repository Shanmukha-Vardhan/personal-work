import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const tools = [
    {
        category: "💻 Workstation",
        items: [
            { name: "MacBook Air (Apple Silicon)", desc: "Primary development machine." },
            { name: "iPad Air (M1)", desc: "Secondary device for design reviews, testing layouts, reading docs, and sketching ideas when a keyboard feels like too much." }
        ]
    },
    {
        category: "👨‍💻 Development Tools",
        items: [
            { name: "VS Code", desc: "Main editor for frontend and backend work." },
            { name: "Terminal (macOS / iTerm)", desc: "For running projects, managing packages, and Git." },
            { name: "Git & GitHub", desc: "Version control, collaboration, and activity tracking." },
            { name: "Next.js", desc: "React Framework for production." },
            { name: "React", desc: "Core frontend library." },
            { name: "Node.js", desc: "Backend logic and APIs." },
            { name: "Firebase", desc: "Backend-as-a-Service for realtime apps." },
            { name: "npm", desc: "Package management." }
        ]
    },
    {
        category: "🎨 Design Tools",
        items: [
            { name: "Figma", desc: "UI design, layout planning, and component thinking before implementation." }
        ]
    },
    {
        category: "🚀 Deployment",
        items: [
            { name: "Vercel", desc: "Hosting and deployment for personal projects and experiments." }
        ]
    },
    {
        category: "📱 Productivity & Daily Apps",
        items: [
            { name: "Notion", desc: "Planning, notes, ideas, and project structure." },
            { name: "Safari", desc: "Primary browser for development and research." },
            { name: "Spotify", desc: "Background music while coding." }
        ]
    }
];

const Uses = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.uses-header',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );

            gsap.fromTo('.uses-category',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            gsap.fromTo('.uses-card',
                { opacity: 0, scale: 0.95, y: 10 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'back.out(1.2)',
                    delay: 0.4
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="page-container" ref={containerRef} style={{ maxWidth: '1000px', margin: '0 auto', padding: '120px 20px 60px' }}>
            <header className="uses-header" style={{ marginBottom: '80px' }}>
                <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '20px' }}>Uses</h1>
                <p className="hero-subtitle" style={{ maxWidth: '600px' }}>
                    A curated list of the hardware, software, and tools I use to build, design, and maintain my workflow.
                </p>
            </header>

            {tools.map((section, index) => (
                <section key={index} className="uses-category">
                    <h2>{section.category}</h2>
                    <div className="uses-grid">
                        {section.items.map((item, i) => (
                            <div key={i} className="uses-card">
                                <div className="uses-item-title">{item.name}</div>
                                <div className="uses-item-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
};

export default Uses;
