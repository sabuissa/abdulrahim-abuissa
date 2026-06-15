// Theme toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    toggle.textContent = current === 'light' ? 'Dark' : 'Light';

    toggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        toggle.textContent = next === 'light' ? 'Dark' : 'Light';
    });
}

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.contact-panel').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});

document.querySelectorAll('.card').forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(el);
});
