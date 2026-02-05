const card = document.querySelector('.card');
const audio = document.getElementById('robot-sound');

card.addEventListener('click', () => {
    card.classList.toggle('open');
    if (card.classList.contains('open')) {
        audio.play();
    }
});

// Gallery hover effects
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('mouseenter', () => {
        photo.style.transform = 'scale(1.1) rotate(2deg)';
    });
    photo.addEventListener('mouseleave', () => {
        photo.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Generate more falling hearts dynamically
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.textContent = ['❤️', '💖', '💕', '💘', '💓'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 10 + 's';
    document.querySelector('.falling-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createFallingHeart, 2000);
