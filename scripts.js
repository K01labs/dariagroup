document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.block');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    blocks.forEach(block => {
        observer.observe(block);
    });
});

function toggleMenu() {
    var navList = document.getElementById('nav-list');
    console.log('toggleMenu called, navList:', navList);
    navList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('studio-button').addEventListener('click', function() {
    document.getElementById('studio').scrollIntoView({ behavior: 'smooth' });
});
});

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('capital-button').addEventListener('click', function() {
    document.getElementById('capital').scrollIntoView({ behavior: 'smooth' });
});
});

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('fabrics-button').addEventListener('click', function() {
    document.getElementById('fabrics').scrollIntoView({ behavior: 'smooth' });
});
});