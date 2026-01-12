import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const statusRef = useRef(null);
    const visualRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/github');
                if (!response.ok) throw new Error('Failed to fetch');
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error('Failed to fetch GitHub data:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // GSAP Animations - use useLayoutEffect to ensure DOM is ready
    useLayoutEffect(() => {
        // Small delay to ensure React has rendered
        const timer = setTimeout(() => {
            if (!heroRef.current) return;

            const ctx = gsap.context(() => {
                // Entrance timeline
                const tl = gsap.timeline();

                tl.fromTo(titleRef.current,
                    { opacity: 0, y: 80 },
                    { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
                )
                    .fromTo(subtitleRef.current,
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
                        '-=0.8'
                    )
                    .fromTo(statusRef.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' },
                        '-=0.6'
                    )
                    .fromTo(visualRef.current,
                        { opacity: 0, x: 100, scale: 0.9 },
                        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power4.out' },
                        '-=1'
                    );

                // Parallax on scroll - title moves up and fades
                gsap.to(titleRef.current, {
                    y: -150,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1.5,
                    }
                });

                // Subtitle parallax (slower)
                gsap.to(subtitleRef.current, {
                    y: -80,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: '80% top',
                        scrub: 1,
                    }
                });

                // Visual parallax (moves up slightly)
                gsap.to(visualRef.current, {
                    y: -60,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1.2,
                    }
                });

            }, heroRef);

            return () => ctx.revert();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Get last 13 weeks (3 months) of data
    const getRecentWeeks = () => {
        if (!data?.calendar) return [];
        return data.calendar.slice(-13);
    };

    const recentWeeks = getRecentWeeks();

    // Calculate stats for last 3 months
    const getRecentStats = () => {
        if (!recentWeeks.length) return { total: 0, streak: 0 };

        let total = 0;
        let currentStreak = 0;

        const allDays = recentWeeks.flatMap(week => week.days);
        allDays.forEach(day => {
            total += day.count;
        });

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

    // Activity status styling
    const getActivityStyle = () => {
        if (!data?.activity) return { color: '#2ecc71', bg: 'rgba(46, 204, 113, 0.1)', dot: '#2ecc71' };

        switch (data.activity.status) {
            case 'active':
                return { color: '#2ecc71', bg: 'rgba(46, 204, 113, 0.1)', dot: '#2ecc71' };
            case 'moderate':
                return { color: '#f39c12', bg: 'rgba(243, 156, 18, 0.1)', dot: '#f39c12' };
            case 'inactive':
                return { color: '#e74c3c', bg: 'rgba(231, 76, 60, 0.1)', dot: '#e74c3c' };
            default:
                return { color: '#2ecc71', bg: 'rgba(46, 204, 113, 0.1)', dot: '#2ecc71' };
        }
    };

    const activityStyle = getActivityStyle();

    return (
        <section className="hero-section" ref={heroRef}>
            <div className="hero-content">
                <h1 ref={titleRef} className="hero-title">
                    Designing the <br />
                    <span className="highlight">Unimagined.</span>
                </h1>

                <p ref={subtitleRef} className="hero-subtitle">
                    Shanmukha Vardhan — Creative Developer & Designer.
                </p>

                {/* Dynamic Activity Status */}
                <div
                    ref={statusRef}
                    className="hero-status"
                    style={{
                        background: activityStyle.bg,
                        border: `1px solid ${activityStyle.color}20`
                    }}
                >
                    <span
                        className="status-dot"
                        style={{ backgroundColor: activityStyle.dot }}
                    ></span>
                    Handling 500+ active users.
                </div>
            </div>

            <div className="hero-visual" ref={visualRef}>
                {/* Contribution Graph - Last 3 Months */}
                <div className="contribution-widget">
                    {/* Stats Row with Tooltips */}
                    <div className="contribution-stats">
                        <Tooltip
                            content={`${data?.contributions?.commits || 0} commits, ${data?.contributions?.pullRequests || 0} PRs & ${data?.contributions?.issues || 0} issues in last 90 days`}
                        >
                            <div className="stat-item">
                                <span className="stat-value">
                                    {loading ? '...' : stats.total}
                                </span>
                                <span className="stat-label">contributions</span>
                            </div>
                        </Tooltip>

                        <Tooltip
                            content={`Longest streak: ${data?.contributions?.longestStreak || 0} days`}
                        >
                            <div className="stat-item">
                                <span className="stat-value">
                                    {loading ? '...' : `${stats.streak}d`}
                                </span>
                                <span className="stat-label">streak</span>
                            </div>
                        </Tooltip>

                        <Tooltip
                            content={`${data?.repos?.active || 0} active, ${data?.repos?.archived || 0} archived`}
                        >
                            <div className="stat-item">
                                <span className="stat-value">
                                    {loading ? '...' : data?.repos?.total || 0}
                                </span>
                                <span className="stat-label">repos</span>
                            </div>
                        </Tooltip>
                    </div>

                    {/* Compact Heatmap Grid */}
                    <div className="contribution-grid">
                        {loading ? (
                            Array.from({ length: 91 }).map((_, i) => (
                                <div key={i} className="contribution-cell skeleton" />
                            ))
                        ) : (
                            recentWeeks.flatMap((week, weekIndex) =>
                                week.days.map((day, dayIndex) => (
                                    <div
                                        key={`${weekIndex}-${dayIndex}`}
                                        className="contribution-cell"
                                        style={{
                                            background: day.color || '#161b22',
                                            animationDelay: `${weekIndex * 0.03 + dayIndex * 0.01}s`
                                        }}
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
            </div>
        </section>
    );
};

// Tooltip Component
const Tooltip = ({ content, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className="tooltip">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Hero;
