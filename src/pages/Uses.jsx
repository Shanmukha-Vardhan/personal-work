import React from 'react';

const Uses = () => {
    return (
        <main className="page-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
            <h1 className="section-title">Uses</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                A curated list of the tools and software I use daily.
            </p>

            <div className="uses-section" style={{ marginBottom: '40px' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Hardware</h3>
                <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', lineHeight: '1.8' }}>
                    <li>MacBook Air M2</li>
                </ul>
            </div>

            <div className="uses-section" style={{ marginBottom: '40px' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Software</h3>
                <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', lineHeight: '1.8' }}>
                    <li>Safari</li>
                    <li>Arc Browser</li>
                    <li>Figma</li>
                    <li>Notion</li>
                </ul>
            </div>
        </main>
    );
};

export default Uses;
