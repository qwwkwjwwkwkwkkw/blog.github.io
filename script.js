// script.js
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.5
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.querySelector('.dismiss-btn').addEventListener('click', function() {
    const announcement = document.querySelector('.announcement');
    announcement.style.display = 'none';
});
