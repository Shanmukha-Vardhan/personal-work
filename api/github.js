// Vercel Serverless Function - GitHub GraphQL API
// This keeps your PAT secure on the server side

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const USERNAME = 'Shanmukha-Vardhan';

    if (!GITHUB_TOKEN) {
        return res.status(500).json({ error: 'GitHub token not configured' });
    }

    // GraphQL query for contribution data + repository details
    const query = `
        query($username: String!) {
            user(login: $username) {
                login
                name
                avatarUrl
                bio
                followers { totalCount }
                following { totalCount }
                repositories(first: 100, privacy: PUBLIC, orderBy: {field: PUSHED_AT, direction: DESC}) {
                    totalCount
                    nodes {
                        name
                        pushedAt
                        isArchived
                        updatedAt
                    }
                }
                contributionsCollection {
                    totalCommitContributions
                    totalPullRequestContributions
                    totalIssueContributions
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                contributionCount
                                date
                                color
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { username: USERNAME }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('GitHub API Error:', errorText);
            return res.status(response.status).json({ error: 'GitHub API request failed' });
        }

        const data = await response.json();

        if (data.errors) {
            console.error('GraphQL Errors:', data.errors);
            return res.status(400).json({ error: data.errors[0].message });
        }

        const user = data.data.user;
        const calendar = user.contributionsCollection.contributionCalendar;
        const repos = user.repositories.nodes || [];

        // Calculate streaks from the calendar data
        const allDays = calendar.weeks.flatMap(week => week.contributionDays);

        // Current streak (counting backwards from today)
        let currentStreak = 0;
        const today = new Date().toISOString().split('T')[0];
        const sortedDays = [...allDays].sort((a, b) => new Date(b.date) - new Date(a.date));

        for (const day of sortedDays) {
            // Skip future dates
            if (day.date > today) continue;

            if (day.contributionCount > 0) {
                currentStreak++;
            } else {
                // Allow today to be 0 (haven't committed yet today)
                if (day.date === today) continue;
                break;
            }
        }

        // Longest streak
        let longestStreak = 0;
        let tempStreak = 0;
        for (const day of allDays) {
            if (day.contributionCount > 0) {
                tempStreak++;
                longestStreak = Math.max(longestStreak, tempStreak);
            } else {
                tempStreak = 0;
            }
        }

        // Calculate repo stats (active vs archived)
        const archivedRepos = repos.filter(r => r.isArchived).length;
        const activeRepos = repos.length - archivedRepos;

        // Get latest push time for activity status
        const latestPush = repos.length > 0 ? repos[0].pushedAt : null;

        // Calculate activity status
        let activityStatus = 'inactive';
        let activityMessage = 'Currently taking a break';

        if (latestPush) {
            const pushDate = new Date(latestPush);
            const now = new Date();
            const hoursSinceLastPush = (now - pushDate) / (1000 * 60 * 60);

            if (hoursSinceLastPush <= 48) {
                activityStatus = 'active';
                activityMessage = 'Actively coding';
            } else if (hoursSinceLastPush <= 168) { // 7 days
                activityStatus = 'moderate';
                activityMessage = 'Light activity this week';
            } else {
                activityStatus = 'inactive';
                activityMessage = 'Currently taking a break';
            }
        }

        // Format response
        const result = {
            user: {
                login: user.login,
                name: user.name,
                avatarUrl: user.avatarUrl,
                bio: user.bio,
                followers: user.followers.totalCount,
                following: user.following.totalCount,
                publicRepos: user.repositories.totalCount,
            },
            contributions: {
                total: calendar.totalContributions,
                commits: user.contributionsCollection.totalCommitContributions,
                pullRequests: user.contributionsCollection.totalPullRequestContributions,
                issues: user.contributionsCollection.totalIssueContributions,
                currentStreak,
                longestStreak,
            },
            repos: {
                total: user.repositories.totalCount,
                active: activeRepos,
                archived: archivedRepos,
            },
            activity: {
                status: activityStatus,
                message: activityMessage,
                lastPush: latestPush,
            },
            calendar: calendar.weeks.map(week => ({
                days: week.contributionDays.map(day => ({
                    date: day.date,
                    count: day.contributionCount,
                    color: day.color
                }))
            }))
        };

        // Cache for 1 hour
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).json(result);

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
