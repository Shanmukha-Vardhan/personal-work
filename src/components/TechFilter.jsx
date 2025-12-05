import React from 'react';

const TechFilter = ({ selectedTech, onSelectTech }) => {
    const techOptions = [
        "React", "Full Stack", "MERN", "Design", "Education", "Utility"
    ];

    return (
        <div className="tech-filter-container">
            <div className="tech-filter-scroll">
                <button
                    className={`tech-chip ${selectedTech === null ? 'active' : ''}`}
                    onClick={() => onSelectTech(null)}
                >
                    All
                </button>
                {techOptions.map(tech => (
                    <button
                        key={tech}
                        className={`tech-chip ${selectedTech === tech ? 'active' : ''}`}
                        onClick={() => onSelectTech(tech === selectedTech ? null : tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TechFilter;
