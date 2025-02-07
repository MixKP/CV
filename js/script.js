document.querySelector('.send-message').addEventListener('mouseenter', function () {
    this.style.background = '#2A4D6D';
    this.style.color = '#fff';
});

document.querySelector('.send-message').addEventListener('mouseleave', function () {
    this.style.background = '#B3C8CF';
    this.style.color = '#fff';
});

// Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
        }
    });
});

document.querySelectorAll('.experience-item, .skill-bar-container, .hobby-tag').forEach((el) => {
    el.classList.add('animate__animated');
    observer.observe(el);
});

// Update button animation
document.querySelector('.send-message').addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.05)';
});

document.querySelector('.send-message').addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
});

document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.005)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

function expClick(){
    document.getElementById('exp').style.backgroundColor = black;
}

