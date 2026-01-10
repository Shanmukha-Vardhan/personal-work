// Apple-style scroll animations using GSAP + ScrollTrigger + Lenis
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize smooth scrolling with Lenis
export const initSmoothScroll = () => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return lenis;
};

// Reveal elements on scroll - using CSS visibility initially
export const initScrollReveal = () => {
    // Clear any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Fade up animation for general content
    gsap.utils.toArray('.reveal-fade-up').forEach((el) => {
        gsap.fromTo(el,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none' // Don't reverse - stay visible
                }
            }
        );
    });

    // Scale up animation
    gsap.utils.toArray('.reveal-scale').forEach((el) => {
        gsap.fromTo(el,
            {
                opacity: 0,
                scale: 0.9
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
};

// Magnetic effect for buttons/links
export const initMagneticEffect = (elementRef) => {
    if (!elementRef.current) return;

    const el = elementRef.current;

    const handleMouseMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = () => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
    };
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const {
            type = 'fade-up',
            duration = 1,
            delay = 0,
            start = 'top 85%',
        } = options;

        let fromVars = {};
        let toVars = {};

        switch (type) {
            case 'fade-up':
                fromVars = { opacity: 0, y: 60 };
                toVars = { opacity: 1, y: 0 };
                break;
            case 'fade-down':
                fromVars = { opacity: 0, y: -60 };
                toVars = { opacity: 1, y: 0 };
                break;
            case 'fade-left':
                fromVars = { opacity: 0, x: 60 };
                toVars = { opacity: 1, x: 0 };
                break;
            case 'fade-right':
                fromVars = { opacity: 0, x: -60 };
                toVars = { opacity: 1, x: 0 };
                break;
            case 'scale':
                fromVars = { opacity: 0, scale: 0.8 };
                toVars = { opacity: 1, scale: 1 };
                break;
            default:
                fromVars = { opacity: 0 };
                toVars = { opacity: 1 };
        }

        gsap.fromTo(ref.current, fromVars, {
            ...toVars,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ref.current,
                start,
                toggleActions: 'play none none none'
            }
        });
    }, [options]);

    return ref;
};

// Export all utilities
export default {
    initSmoothScroll,
    initScrollReveal,
    initMagneticEffect,
    useScrollAnimation
};
