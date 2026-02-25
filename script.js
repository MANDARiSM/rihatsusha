/* ===================================================================
   理髪社 — Premium Interactions
   ================================================================ */

(function () {
    'use strict';

    // ───────────── Navbar scroll ─────────────
    const navbar = document.querySelector('.navbar');
    const handleNavScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // ───────────── Hamburger ─────────────
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ───────────── Smooth scroll ─────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = target.offsetTop - 80;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    // ───────────── Scroll progress bar ─────────────
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    const updateProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        progressBar.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    // ───────────── Cursor glow ─────────────
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        let glowX = 0, glowY = 0;
        let targetX = 0, targetY = 0;
        let glowVisible = false;

        document.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            if (!glowVisible) {
                glowVisible = true;
                cursorGlow.style.opacity = '1';
            }
        });

        document.addEventListener('mouseleave', () => {
            glowVisible = false;
            cursorGlow.style.opacity = '0';
        });

        function animateGlow() {
            glowX += (targetX - glowX) * 0.08;
            glowY += (targetY - glowY) * 0.08;
            cursorGlow.style.transform = `translate(${glowX - 300}px, ${glowY - 300}px)`;
            requestAnimationFrame(animateGlow);
        }
        animateGlow();
    }

    // ───────────── Scroll reveal (IntersectionObserver) ─────────────
    const revealElements = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const selectors = [
            '.section-header',
            '.lead-text',
            '.asset-card',
            '.mission-statement',
            '.service-card',
            '.value-item',
            '.cycle-step',
            '.cycle-description',
            '.cycle-loop-badge',
            '.contact-info',
            '.contact-form',
            '.contact-text'
        ];

        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach((el, idx) => {
                el.classList.add('reveal');
                el.style.transitionDelay = `${idx * 0.08}s`;
                observer.observe(el);
            });
        });
    };

    // ───────────── Card tilt on hover ─────────────
    const initCardTilt = () => {
        const cards = document.querySelectorAll('.service-card, .asset-card, .cycle-step');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `translateY(-4px) perspective(600px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    };

    // ───────────── Form submit ─────────────
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-button');
            btn.style.transform = 'scale(0.97)';
            setTimeout(() => {
                btn.style.transform = '';
                alert('お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。');
                contactForm.reset();
            }, 200);
        });
    }

    // ───────────── Init on DOM ready ─────────────
    document.addEventListener('DOMContentLoaded', () => {
        revealElements();
        initCardTilt();
    });

    // ───────────── Page load fade-in ─────────────
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

})();
