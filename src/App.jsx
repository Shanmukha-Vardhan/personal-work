import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CommandPalette from './components/CommandPalette';
import Scratchpad from './components/Scratchpad';
import TaskBoard from './components/TaskBoard';
import Home from './pages/Home';
import Tools from './pages/Tools';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isZenMode, setIsZenMode] = React.useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  // Toggle Zen Mode with Shift+Z
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === 'Z') {
        setIsZenMode(prev => !prev);
      }
      if (e.key === 'Escape') {
        if (isZenMode) setIsZenMode(false);
        if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZenMode, isMobileSidebarOpen]);

  return (
    <Router>
      <div className={`app-container ${isZenMode ? 'zen-mode' : ''} ${isMobileSidebarOpen ? 'mobile-sidebar-open' : ''}`}>
        <CommandPalette isZenMode={isZenMode} setIsZenMode={setIsZenMode} />
        <Scratchpad />
        <TaskBoard />
        <Sidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
        <div className="main-content-wrapper" onClick={() => isMobileSidebarOpen && setIsMobileSidebarOpen(false)}>
          <Header onSearch={setSearchQuery} onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} />
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/samples" element={<Home category="sample" searchQuery={searchQuery} />} />
            <Route path="/personal-projects" element={<Home category="personal" searchQuery={searchQuery} />} />
            <Route path="/tools" element={<Home category="tool" searchQuery={searchQuery} />} />
          </Routes>
        </div>
        {isZenMode && (
          <div className="zen-toast">Zen Mode Active (Press ESC to exit)</div>
        )}
      </div>
    </Router>
  );
}

export default App;
