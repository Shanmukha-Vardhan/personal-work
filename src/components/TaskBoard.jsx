import React, { useState, useEffect } from 'react';

const TaskBoard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Load tasks from local storage
    useEffect(() => {
        const savedTasks = localStorage.getItem('portfolio-tasks');
        if (savedTasks) setTasks(JSON.parse(savedTasks));
    }, []);

    // Save tasks to local storage
    useEffect(() => {
        localStorage.setItem('portfolio-tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Toggle with Cmd+Shift+T
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 't') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Listen for custom open event
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-taskboard', handleOpen);
        return () => window.removeEventListener('open-taskboard', handleOpen);
    }, []);

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    if (!isOpen) return null;

    return (
        <div className="taskboard-overlay" onClick={() => setIsOpen(false)}>
            <div className="taskboard-container" onClick={e => e.stopPropagation()}>
                <div className="taskboard-header">
                    <h3>Task Board</h3>
                    <span className="taskboard-count">{tasks.filter(t => !t.completed).length} pending</span>
                </div>

                <form onSubmit={addTask} className="taskboard-input-form">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task..."
                        className="taskboard-input"
                        autoFocus
                    />
                    <button type="submit" className="taskboard-add-btn">+</button>
                </form>

                <div className="taskboard-list">
                    {tasks.length > 0 ? (
                        tasks.map(task => (
                            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                                <div className="task-checkbox" onClick={() => toggleTask(task.id)}>
                                    {task.completed && <span>✓</span>}
                                </div>
                                <span className="task-text" onClick={() => toggleTask(task.id)}>{task.text}</span>
                                <button className="task-delete-btn" onClick={() => deleteTask(task.id)}>&times;</button>
                            </div>
                        ))
                    ) : (
                        <div className="taskboard-empty">
                            <p>No tasks yet. Stay focused!</p>
                        </div>
                    )}
                </div>

                <div className="taskboard-footer">
                    <span className="taskboard-hint">Cmd+Shift+T to toggle</span>
                </div>
            </div>
        </div>
    );
};

export default TaskBoard;
