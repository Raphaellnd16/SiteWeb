const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1, 
            spaceBetween: 16,
        },
        620: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

const boutonPlus = document.getElementById('voir-plus');
const boutonMoins = document.getElementById('voir-moins');
const cardsCachees = document.querySelectorAll('.card-project-mob.hidden');
boutonPlus.addEventListener('click', function() {
    cardsCachees.forEach(function(card) {
        card.classList.remove('hidden');
        });
        boutonPlus.style.display = 'none';
        boutonMoins.style.display = 'block';
    });
    boutonMoins.addEventListener('click', function() {
    cardsCachees.forEach(function(card) {
        card.classList.add('hidden');
        });
    boutonPlus.style.display = 'block';
    boutonMoins.style.display = 'none';
});