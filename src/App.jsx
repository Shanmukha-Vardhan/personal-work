import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CommandPalette from './components/CommandPalette';
import Scratchpad from './components/Scratchpad';
import TaskBoard from './components/TaskBoard';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Uses from './pages/Uses';
import Projects from './pages/Projects';
import About from './pages/About';
import ScrollProgress from './components/ScrollProgress';
import NoiseOverlay from './components/NoiseOverlay';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

// GSAP Animations
import { initSmoothScroll, initScrollReveal } from './utils/animations';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function AppContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [isZenMode, setIsZenMode] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  // Initialize smooth scrolling (Lenis) + GSAP ScrollTrigger
  useEffect(() => {
    const lenis = initSmoothScroll();

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initScrollReveal();
    }, 100);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  // Re-initialize scroll reveals on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollReveal();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    // Update Document Title based on path
    const path = pathname;
    let title = 'Shanmukha Vardhan | Portfolio';

    if (path === '/samples') title = 'Samples | Shanmukha Vardhan';
    else if (path === '/tools') title = 'Tools | Shanmukha Vardhan';
    else if (path === '/personal-projects') title = 'Personal Projects | Shanmukha Vardhan';

    document.title = title;
  }, [pathname]);

  // Handle search updates
  const handleSearch = (query) => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  // Console Signature
  useEffect(() => {
    const signature = `
    %c🚀 Built by Shanmukha Vardhan
    %cTurn ideas into reality with code.
    `;
    console.log(
      signature,
      'color: #ffffff; background: #000000; padding: 8px 16px; border-radius: 4px; font-weight: bold; font-size: 14px;',
      'color: #a1a1a6; font-size: 12px; margin-top: 4px;'
    );
  }, []);

  // Toggle Zen Mode with Shift+Z
  useEffect(() => {
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
    <div className={`app-container ${isZenMode ? 'zen-mode' : ''} ${isMobileSidebarOpen ? 'mobile-sidebar-open' : ''}`}>
      <ScrollProgress />
      <NoiseOverlay />
      <CommandPalette isZenMode={isZenMode} setIsZenMode={setIsZenMode} />
      <Scratchpad />
      <TaskBoard />
      <Sidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
      <div className="main-content-wrapper" onClick={() => isMobileSidebarOpen && setIsMobileSidebarOpen(false)}>
        <Header
          searchQuery={searchQuery}
          onSearch={handleSearch}
          onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />
        <AnimatePresence mode="wait">
          <Routes location={useLocation()} key={useLocation().pathname}>
            <Route path="/" element={<PageWrapper><Home searchQuery={searchQuery} /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects searchQuery={searchQuery} /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/uses" element={<PageWrapper><Uses /></PageWrapper>} />
            {/* redirects for old links if clicked from elsewhere */}
            <Route path="/samples" element={<PageWrapper><Projects searchQuery={searchQuery} /></PageWrapper>} />
            <Route path="/personal-projects" element={<PageWrapper><Projects searchQuery={searchQuery} /></PageWrapper>} />
            <Route path="/tools" element={<PageWrapper><Projects searchQuery={searchQuery} /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
      {isZenMode && (
        <div className="zen-toast">Zen Mode Active (Press ESC to exit)</div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Analytics />
    </Router>
  );
}

export default App;
