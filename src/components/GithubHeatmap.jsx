import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GithubHeatmap = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use our secure serverless API
                const response = await fetch('/api/github');

                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub data');
                }

                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch GitHub data:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return (
            <div style={{
                padding: '40px',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                background: 'var(--bg-secondary)',
                borderRadius: '12px'
            }}>
                <p>Unable to load GitHub contributions</p>
            </div>
        );
    }

    return (
        <div style={{ width: '100%' }}>
            {/* Stats Row */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    display: 'flex',
                    gap: '48px',
                    marginBottom: '24px',
                    flexWrap: 'wrap'
                }}
            >
                <StatItem
                    value={loading ? '...' : data?.contributions?.total || 0}
                    label="Contributions This Year"
                />
                <StatItem
                    value={loading ? '...' : `${data?.contributions?.longestStreak || 0} days`}
                    label="Longest Streak"
                />
                <StatItem
                    value={loading ? '...' : `${data?.contributions?.currentStreak || 0} days`}
                    label="Current Streak"
                />
                <StatItem
                    value={loading ? '...' : data?.user?.publicRepos || 0}
                    label="Public Repos"
                />
            </motion.div>

            {/* Heatmap Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(7, 12px)',
                    gridAutoFlow: 'column',
                    gap: '3px',
                    overflowX: 'auto',
                    paddingBottom: '16px'
                }}
            >
                {loading ? (
                    // Skeleton loader
                    Array.from({ length: 364 }).map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: '12px',
                                height: '12px',
                                background: 'var(--bg-secondary)',
                                borderRadius: '2px',
                                animation: 'pulse 1.5s ease-in-out infinite'
                            }}
                        />
                    ))
                ) : (
                    data?.calendar?.flatMap((week, weekIndex) =>
                        week.days.map((day, dayIndex) => (
                            <motion.div
                                key={`${weekIndex}-${dayIndex}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: weekIndex * 0.01,
                                    duration: 0.2
                                }}
                                title={`${day.count} contributions on ${day.date}`}
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    background: day.color || 'var(--bg-secondary)',
                                    borderRadius: '2px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.1s ease'
                                }}
                                whileHover={{ scale: 1.3 }}
                            />
                        ))
                    )
                )}
            </motion.div>

            {/* Legend */}
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                marginTop: '8px'
            }}>
                <span>Less</span>
                <div style={{ display: 'flex', gap: '3px' }}>
                    {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map((color, i) => (
                        <div
                            key={i}
                            style={{
                                width: '12px',
                                height: '12px',
                                background: color,
                                borderRadius: '2px'
                            }}
                        />
                    ))}
                </div>
                <span>More</span>
            </div>
        </div>
    );
};

// Stat item component
const StatItem = ({ value, label }) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)'
        }}>
            {value}
        </span>
        <span style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginTop: '2px'
        }}>
            {label}
        </span>
    </div>
);

export default GithubHeatmap;
