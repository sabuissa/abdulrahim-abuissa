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
