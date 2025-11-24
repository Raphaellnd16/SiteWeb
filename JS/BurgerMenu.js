const burgerIcon = document.querySelector('.burger-icon');
const burgerLinks = document.querySelector('.burger-links');

function toggleMenu() {
    burgerIcon.classList.toggle('open');
    burgerLinks.classList.toggle('active');
}

burgerIcon.addEventListener('click', toggleMenu);

document.querySelectorAll('.burger-links .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        burgerIcon.classList.remove('open');
        burgerLinks.classList.remove('active');
    });
});

document.addEventListener('click', function(event) {
    if (!burgerIcon.contains(event.target) && !burgerLinks.contains(event.target)) {
        burgerIcon.classList.remove('open');
        burgerLinks.classList.remove('active');
    }
});