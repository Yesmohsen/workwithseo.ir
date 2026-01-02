// ========================================
// Interactive Scripts for SEO Portfolio
// ========================================

(function() {
    'use strict';

    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ========================================
    // Scroll-Triggered Animations (Intersection Observer)
    // ========================================
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add fade-in class to elements
        const animatedElements = document.querySelectorAll('section, .skill-card');
        
        animatedElements.forEach((element, index) => {
            element.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
            element.style.transitionDelay = `${index * 100}ms`;
            observer.observe(element);
        });
    }

    // ========================================
    // Counter Animation for Stats
    // ========================================
    function initCounterAnimation() {
        const statNumbers = document.querySelectorAll('.text-xl.font-bold');
        
        const animateCounter = (element) => {
            const target = element.textContent;
            const hasPercent = target.includes('%');
            const hasPlus = target.includes('+');
            const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
            
            let current = 0;
            const duration = 2000;
            const increment = numericValue / (duration / 16);
            
            const updateCounter = () => {
                current += increment;
                if (current < numericValue) {
                    let displayValue = Math.floor(current);
                    if (hasPlus) displayValue = '+' + displayValue;
                    if (hasPercent) displayValue = displayValue + '%';
                    element.textContent = displayValue;
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            };
            
            updateCounter();
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        statNumbers.forEach(stat => observer.observe(stat));
    }

    // ========================================
    // Button Ripple Effect
    // ========================================
    function initRippleEffect() {
        const buttons = document.querySelectorAll('button, a');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    width: 100px;
                    height: 100px;
                    left: ${x - 50}px;
                    top: ${y - 50}px;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Mobile Menu Toggle
    // ========================================
    function initMobileMenu() {
        const menuButton = document.querySelector('button span.material-symbols-outled:contains("menu")')?.parentElement;
        const nav = document.querySelector('nav');
        
        if (!menuButton || !nav) return;
        
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
        });
    }

    // ========================================
    // Active Section Highlighting
    // ========================================
    function initActiveSection() {
        const sections = document.querySelectorAll('section');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id') || '';
                }
            });
        });
    }

    // ========================================
    // Initialize All Features
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            initSmoothScroll();
            initScrollAnimations();
            initCounterAnimation();
            initRippleEffect();
        }
        
        initMobileMenu();
        initActiveSection();
        
        console.log('🚀 SEO Portfolio initialized successfully!');
    });

})();
