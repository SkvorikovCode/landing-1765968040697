document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();

    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuBtn.querySelector('i');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            // Change icon to X using Lucide attr approach or simple replacement
            menuBtn.innerHTML = '<i data-lucide="x" class="w-8 h-8"></i>';
            lucide.createIcons();
            mobileMenu.classList.add('animate-in', 'slide-in-from-top-5', 'fade-in');
        } else {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = '<i data-lucide="menu" class="w-8 h-8"></i>';
            lucide.createIcons();
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = '<i data-lucide="menu" class="w-8 h-8"></i>';
            lucide.createIcons();
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-zinc-900/95', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-zinc-900/95', 'shadow-lg');
            navbar.classList.add('bg-zinc-900/0'); // Make it transparent at top if desired, but code keeps consistent bg for readability
        }
    });

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));
});