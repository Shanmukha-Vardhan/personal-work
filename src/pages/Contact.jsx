import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const containerRef = useRef(null);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-title',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );

            gsap.fromTo('.contact-card-anim',
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
            );

            gsap.fromTo('.contact-info-anim',
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <main className="page-container" ref={containerRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 60px' }}>
            <h1 className="hero-title contact-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '60px', textAlign: 'center' }}>
                Let's <span className="highlight">Connect</span>
            </h1>

            <div className="contact-wrapper">
                {/* Contact Form */}
                <div className="contact-card contact-card-anim">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', fontFamily: 'var(--font-display)' }}>Send a Message</h3>

                    {isSent ? (
                        <div style={{
                            padding: '40px',
                            textAlign: 'center',
                            background: 'rgba(46, 204, 113, 0.1)',
                            borderRadius: '16px',
                            color: '#27ae60'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✨</div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Message Sent!</h4>
                            <p>Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="contact-form-group">
                                <label className="contact-label" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="contact-input"
                                    placeholder="Your Name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact-form-group">
                                <label className="contact-label" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="contact-input"
                                    placeholder="your@email.com"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact-form-group">
                                <label className="contact-label" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="contact-textarea"
                                    placeholder="Tell me about your project..."
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="project-link-btn"
                                style={{ width: '100%', justifyContent: 'center' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>

                {/* Contact Info & Socials */}
                <div className="contact-info-anim">
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Contact Details</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6' }}>
                            Currently available for freelance work and open to full-time opportunities. If you have any questions or just want to see some cool stuff, get in touch!
                        </p>

                        <a href="mailto:salapuvardhan4@gmail.com" className="contact-social-link">
                            <div style={{ background: 'rgba(0,0,0,0.05)', padding: '12px', borderRadius: '50%' }}>
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Email</div>
                                <div style={{ fontWeight: '500' }}>salapuvardhan4@gmail.com</div>
                            </div>
                        </a>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Socials</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                                <FaGithub className="contact-social-icon" />
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/shanmukha-vardhan/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                                <FaLinkedin className="contact-social-icon" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
