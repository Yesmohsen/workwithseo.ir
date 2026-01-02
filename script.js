// ========================================
// SEO Portfolio - Interactive Scripts
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
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add fade-in class to elements
        const animatedElements = document.querySelectorAll(
            '.service-card, .portfolio-item, .stat-item, .about-text'
        );

        animatedElements.forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.transitionDelay = `${index * 100}ms`;
            observer.observe(element);
        });
    }

    // ========================================
    // Counter Animation for Stats
    // ========================================
    function initCounterAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
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

        const observer = new IntersectionObserver((entries) => {
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
    // Parallax Effect for Hero Section
    // ========================================
    function initParallaxEffect() {
        const hero = document.querySelector('.hero');
        const floatingElements = document.querySelectorAll('.floating-element');
        
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            if (scrolled < window.innerHeight) {
                floatingElements.forEach((element, index) => {
                    const speed = (index + 1) * 0.1;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            }
        });
    }

    // ========================================
    // Typing Effect for Hero Title
    // ========================================
    function initTypingEffect() {
        const heroTitleText = document.querySelector('.hero-title-text');
        
        if (!heroTitleText) return;

        const originalText = heroTitleText.textContent;
        heroTitleText.textContent = '';
        
        let charIndex = 0;
        const typingSpeed = 100;

        function typeChar() {
            if (charIndex < originalText.length) {
                heroTitleText.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            }
        }

        // Start typing after a short delay
        setTimeout(typeChar, 500);
    }

    // ========================================
    // Active Section Highlighting
    // ========================================
    function initActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
        });
    }

    // ========================================
    // Floating Telegram Button Animation
    // ========================================
    function initFloatingButton() {
        const floatingButton = document.querySelector('.floating-telegram');
        
        if (!floatingButton) return;

        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 500) {
                floatingButton.style.opacity = '1';
                floatingButton.style.visibility = 'visible';
            } else {
                floatingButton.style.opacity = '0';
                floatingButton.style.visibility = 'hidden';
            }
            
            lastScrollTop = scrollTop;
        });

        // Initially hide the button
        floatingButton.style.opacity = '0';
        floatingButton.style.visibility = 'hidden';
        floatingButton.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }

    // ========================================
    // Service Cards Hover Effect
    // ========================================
    function initServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // ========================================
    // Portfolio Item Hover Effect
    // ========================================
    function initPortfolioItems() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const image = this.querySelector('.portfolio-image');
                if (image) {
                    image.style.transform = 'scale(1.05)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const image = this.querySelector('.portfolio-image');
                if (image) {
                    image.style.transform = 'scale(1)';
                }
            });
        });
    }

    // ========================================
    // Button Ripple Effect
    // ========================================
    function initRippleEffect() {
        const buttons = document.querySelectorAll('.cta-button, .telegram-button');
        
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
    }

    // ========================================
    // Preloader
    // ========================================
    function initPreloader() {
        const preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        `;
        
        preloader.innerHTML = `
            <div style="width: 50px; height: 50px; border: 3px solid #2a2a2a; border-top-color: #00d26a; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        `;
        
        document.body.appendChild(preloader);
        
        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Hide preloader when page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                setTimeout(() => preloader.remove(), 500);
            }, 500);
        });
    }

    // ========================================
    // Initialize All Features
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            initPreloader();
            initParallaxEffect();
            initTypingEffect();
        }
        
        initSmoothScroll();
        initScrollAnimations();
        initCounterAnimation();
        initActiveSection();
        initFloatingButton();
        initServiceCards();
        initPortfolioItems();
        initRippleEffect();
        
        console.log('🚀 SEO Portfolio initialized successfully!');
    });

    // ========================================
    // Performance: Debounce Scroll Events
    // ========================================
    function debounce(func, wait = 10) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

})();
