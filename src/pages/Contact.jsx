import React from 'react';

const Contact = () => {
    return (
        <main className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
            <h1 className="section-title">Get in Touch</h1>
            <div className="content-block">
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                    Have a project in mind or just want to say hi? Feel free to send me an email.
                </p>

                <a
                    href="mailto:salapuvardhan4@gmail.com"
                    className="project-link-btn"
                    style={{ fontSize: '18px', padding: '16px 32px' }}
                >
                    Say Hello 👋
                </a>

                <div style={{ marginTop: '60px' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Socials</h3>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="https://www.linkedin.com/in/shanmukha-vardhan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Contact;
