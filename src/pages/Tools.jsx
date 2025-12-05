import React from 'react';
import { motion } from 'framer-motion';

const toolsData = [
    {
        category: "Development",
        items: [
            { name: "React", icon: "⚛️" },
            { name: "JavaScript", icon: "⚡" },
            { name: "HTML5", icon: "🌐" },
            { name: "CSS3", icon: "🎨" },
            { name: "Node.js", icon: "🟢" },
            { name: "Git", icon: "📦" }
        ]
    },
    {
        category: "Design",
        items: [
            { name: "Figma", icon: "🖌️" },
            { name: "UI/UX", icon: "✨" },
            { name: "Prototyping", icon: "📐" }
        ]
    },
    {
        category: "Productivity",
        items: [
            { name: "VS Code", icon: "💻" },
            { name: "Notion", icon: "📝" },
            { name: "Mac", icon: "🍎" }
        ]
    }
];

const Tools = () => {
    return (
        <main className="tools-page">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Tools & Technologies
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    The software and hardware I use to create.
                </motion.p>
            </div>

            <div className="tools-content">
                {toolsData.map((category, index) => (
                    <div key={index} className="tool-category">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {category.category}
                        </motion.h3>
                        <div className="tools-grid">
                            {category.items.map((tool, toolIndex) => (
                                <motion.div
                                    key={toolIndex}
                                    className="tool-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                                >
                                    <span className="tool-icon">{tool.icon}</span>
                                    <span className="tool-name">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Tools;
