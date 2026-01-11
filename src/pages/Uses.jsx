import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const tools = [
    {
        category: "Workstation",
        items: [
            { name: "MacBook Air M2", desc: "Midnight, 16GB RAM. Silent, fast, and perfect for development on the go." },
            { name: "LG 27\" 4K Monitor", desc: "Pixel-perfect display for interface design and coding." },
            { name: "Keychron K2", desc: "Mechanical keyboard (Gateron Brown) for that tactile feel." },
            { name: "Logitech MX Master 3S", desc: "The productivity mouse standard for a reason." }
        ]
    },
    {
        category: "Development",
        items: [
            { name: "VS Code", desc: "My editor of choice, heavily customized with extensions." },
            { name: "Arc Browser", desc: "A browser that actually feels like a modern operating system." },
            { name: "iTerm2 + Oh My Zsh", desc: "Terminal workflow power with autosuggestions." },
            { name: "Figma", desc: "Where all designs start before a single line of code is written." },
            { name: "GitHub Desktop", desc: "Clean interface for managing version control." }
        ]
    },
    {
        category: "Productivity",
        items: [
            { name: "Notion", desc: "My second brain. Organization for life and work." },
            { name: "Raycast", desc: "Spotlight replacement. I use it for literally everything." },
            { name: "Linear", desc: "Issue tracking and project management done right." },
            { name: "Cron", desc: "The best calendar experience, hands down." }
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
