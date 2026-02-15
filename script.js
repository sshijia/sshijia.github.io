const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-hidden');
    observer.observe(section);
});

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.borderColor = '#00d4ff';
    });
    item.addEventListener('mouseout', () => {
        item.style.borderColor = '#333';
    });
});