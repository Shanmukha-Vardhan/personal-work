
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const CommandPalette = ({ isZenMode, setIsZenMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Toggle with Cmd+K or Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Actions
    const actions = [
        { id: 'home', title: 'Go to Home', type: 'Navigation', action: () => navigate('/') },
        { id: 'samples', title: 'Go to Samples', type: 'Navigation', action: () => navigate('/samples') },
        { id: 'tools', title: 'Go to Tools', type: 'Navigation', action: () => navigate('/tools') },
        { id: 'personal', title: 'Go to Personal Projects', type: 'Navigation', action: () => navigate('/personal-projects') },
        {
            id: 'email',
            title: 'Copy Email Address',
            type: 'Action',
            action: () => {
                navigator.clipboard.writeText('salapuvardhan4@gmail.com');
                alert('Email copied to clipboard!');
            }
        },
        {
            id: 'scratchpad',
            title: 'Open Scratchpad (Cmd+Shift+S)',
            type: 'Tool',
            action: () => {
                window.dispatchEvent(new KeyboardEvent('keydown', {
                    key: 's',
                    metaKey: true,
                    shiftKey: true
                }));
            }
        },
        {
            id: 'taskboard',
            title: 'Open Task Board (Cmd+Shift+T)',
            type: 'Tool',
            action: () => {
                window.dispatchEvent(new CustomEvent('open-taskboard'));
            }
        },
        {
            id: 'zen',
            title: isZenMode ? 'Exit Zen Mode' : 'Enter Zen Mode (Shift+Z)',
            type: 'View',
            action: () => {
                setIsZenMode(!isZenMode);
            }
        }
    ];

    // Filter items
    const filteredItems = [
        ...actions.filter(item => item.title.toLowerCase().includes(query.toLowerCase())),
        ...projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase())).map(p => ({
            id: p.id,
            title: p.title,
            type: 'Project',
            action: () => {
                // Navigate to home and scroll to project or open link? 
                // For now, let's open the link if it exists, or just navigate to the category
                if (p.link && p.link !== '#') window.open(p.link, '_blank');
                else navigate(`/ ${p.category === 'sample' ? 'samples' : p.category === 'tool' ? 'tools' : 'personal-projects'} `);
            }
        }))
    ];

    // Handle selection
    const handleSelect = (item) => {
        item.action();
        setIsOpen(false);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredItems[selectedIndex]) {
                    handleSelect(filteredItems[selectedIndex]);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredItems, selectedIndex]);

    if (!isOpen) return null;

    return (
        <div className="cmd-overlay" onClick={() => setIsOpen(false)}>
            <div className="cmd-modal" onClick={e => e.stopPropagation()}>
                <div className="cmd-header">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type a command or search..."
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value);
                            setSelectedIndex(0);
                        }}
                        className="cmd-input"
                    />
                    <span className="cmd-badge">ESC</span>
                </div>
                <div className="cmd-list">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`cmd - item ${index === selectedIndex ? 'selected' : ''} `}
                                onClick={() => handleSelect(item)}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <span className="cmd-item-title">{item.title}</span>
                                <span className="cmd-item-type">{item.type}</span>
                            </div>
                        ))
                    ) : (
                        <div className="cmd-empty">No results found.</div>
                    )}
                </div>
                <div className="cmd-footer">
                    <span>Use <strong>↑↓</strong> to navigate</span>
                    <span><strong>↵</strong> to select</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
