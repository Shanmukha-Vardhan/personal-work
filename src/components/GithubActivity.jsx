
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaHistory } from 'react-icons/fa';

const GithubActivity = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ repos: 0, followers: 0, following: 0 });

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const [eventsResponse, profileResponse] = await Promise.all([
                    fetch('https://api.github.com/users/Shanmukha-Vardhan/events/public'),
                    fetch('https://api.github.com/users/Shanmukha-Vardhan')
                ]);

                const eventsData = await eventsResponse.json();
                const profileData = await profileResponse.json();

                // Filter for PushEvents and extract relevant data
                const pushEvents = eventsData
                    .filter(event => event.type === 'PushEvent')
                    .slice(0, 4) // Get last 4 pushes
                    .map(event => ({
                        id: event.id,
                        repo: event.repo.name.split('/')[1], // Remove username from repo name
                        message: (event.payload.commits && event.payload.commits.length > 0) ? event.payload.commits[0].message : 'Repository update',
                        date: new Date(event.created_at).toLocaleDateString(),
                        time: new Date(event.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        url: `https://github.com/${event.repo.name}`
                    }));

                setEvents(pushEvents);
                setStats({
                    repos: profileData.public_repos,
                    followers: profileData.followers,
                    following: profileData.following
                });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    const containervariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="github-activity">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '400',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)'
                }}>Recent Code</h2>

                <a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    opacity: 0.7,
                    transition: 'opacity 0.2s'
                }}>
                    <FaGithub /> @Shanmukha-Vardhan
                </a>
            </div>

            <motion.div
                className="activity-grid"
                variants={containervariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px'
                }}
            >
                {loading ? (
                    // Skeleton loading state
                    [1, 2, 3, 4].map(i => (
                        <div key={i} style={{
                            height: '140px',
                            background: '#f5f5f5',
                            borderRadius: '12px',
                            animation: 'pulse 1.5s infinite'
                        }} />
                    ))
                ) : (
                    events.map(event => (
                        <motion.a
                            key={event.id}
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                background: 'var(--bg-card)', // You might need to define this or use a color
                                border: '1px solid rgba(0,0,0,0.05)',
                                padding: '24px',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '180px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                                transition: 'box-shadow 0.3s ease'
                            }}
                        >
                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '12px',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <FaCodeBranch size={12} />
                                        {event.repo}
                                    </span>
                                    <span>{event.date}</span>
                                </div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    color: 'var(--text-primary)',
                                    marginBottom: '8px',
                                    lineHeight: '1.4',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {event.message}
                                </h3>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '0.8rem',
                                color: 'var(--accent-primary)', // Assuming you have an accent color
                                fontWeight: '500'
                            }}>
                                <span>View Commit</span>
                                <span>→</span>
                            </div>
                        </motion.a>
                    ))
                )}
            </motion.div>

            {/* Data-driven Stats Row */}
            <div style={{
                marginTop: '60px',
                display: 'flex',
                gap: '60px',
                borderTop: '1px solid rgba(0,0,0,0.05)',
                paddingTop: '40px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>{stats.repos}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Repositories</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>{stats.followers}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Followers</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>{stats.following}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Following</span>
                </div>
            </div>
        </section>
    );
};

export default GithubActivity;
