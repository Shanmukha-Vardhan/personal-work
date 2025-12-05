import React, { useState, useEffect } from 'react';

const Scratchpad = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [note, setNote] = useState('');

    // Load note from local storage
    useEffect(() => {
        const savedNote = localStorage.getItem('portfolio-scratchpad');
        if (savedNote) setNote(savedNote);
    }, []);

    // Save note to local storage
    useEffect(() => {
        localStorage.setItem('portfolio-scratchpad', note);
    }, [note]);

    // Toggle with Cmd+Shift+S
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 's') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="scratchpad-overlay" onClick={() => setIsOpen(false)}>
            <div className="scratchpad-container" onClick={e => e.stopPropagation()}>
                <div className="scratchpad-header">
                    <h3>Scratchpad</h3>
                    <span className="scratchpad-hint">Auto-saves to browser</span>
                </div>
                <textarea
                    className="scratchpad-area"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Jot down quick ideas, todo lists, or reminders..."
                    autoFocus
                />
                <div className="scratchpad-footer">
                    <button onClick={() => setNote('')} className="scratchpad-btn clear">Clear</button>
                    <button onClick={() => setIsOpen(false)} className="scratchpad-btn close">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Scratchpad;
