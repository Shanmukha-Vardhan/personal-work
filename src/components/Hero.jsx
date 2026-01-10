import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [contributionData, setContributionData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/github');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setContributionData(data);
            } catch (err) {
                console.error('Failed to fetch GitHub data:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Get last 13 weeks (3 months) of data
    const getRecentWeeks = () => {
        if (!contributionData?.calendar) return [];
        const allWeeks = contributionData.calendar;
        // Take only the last 13 weeks
        return allWeeks.slice(-13);
    };

    const recentWeeks = getRecentWeeks();

    // Calculate stats for last 3 months
    const getRecentStats = () => {
        if (!recentWeeks.length) return { total: 0, streak: 0 };

        let total = 0;
        let currentStreak = 0;
        let tempStreak = 0;

        // Flatten days and count
        const allDays = recentWeeks.flatMap(week => week.days);
        allDays.forEach(day => {
            total += day.count;
        });

        // Current streak (from end)
        const reversed = [...allDays].reverse();
        const today = new Date().toISOString().split('T')[0];
        for (const day of reversed) {
            if (day.date > today) continue;
            if (day.count > 0) {
                currentStreak++;
            } else {
                if (day.date === today) continue;
                break;
            }
        }

        return { total, streak: currentStreak };
    };

    const stats = getRecentStats();

    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-title"
                >
                    Designing the <br />
                    <span className="highlight">Unimagined.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hero-subtitle"
                >
                    Shanmukha Vardhan — Creative Developer & Designer.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-status"
                >
                    <span className="status-dot"></span>
                    Available for new projects
                </motion.div>
            </div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {/* Contribution Graph - Last 3 Months */}
                <div className="contribution-widget">
                    {/* Stats Row */}
                    <div className="contribution-stats">
                        <div className="stat-item">
                            <span className="stat-value">
                                {loading ? '...' : stats.total}
                            </span>
                            <span className="stat-label">contributions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">
                                {loading ? '...' : `${stats.streak}d`}
                            </span>
                            <span className="stat-label">streak</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">
                                {loading ? '...' : contributionData?.user?.publicRepos || 0}
                            </span>
                            <span className="stat-label">repos</span>
                        </div>
                    </div>

                    {/* Compact Heatmap Grid */}
                    <div className="contribution-grid">
                        {loading ? (
                            // Skeleton
                            Array.from({ length: 91 }).map((_, i) => (
                                <div key={i} className="contribution-cell skeleton" />
                            ))
                        ) : (
                            recentWeeks.flatMap((week, weekIndex) =>
                                week.days.map((day, dayIndex) => (
                                    <motion.div
                                        key={`${weekIndex}-${dayIndex}`}
                                        className="contribution-cell"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: weekIndex * 0.03 + dayIndex * 0.01 }}
                                        style={{ background: day.color || '#161b22' }}
                                        title={`${day.count} contributions on ${day.date}`}
                                    />
                                ))
                            )
                        )}
                    </div>

                    {/* GitHub Link */}
                    <a
                        href="https://github.com/Shanmukha-Vardhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        @Shanmukha-Vardhan
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
