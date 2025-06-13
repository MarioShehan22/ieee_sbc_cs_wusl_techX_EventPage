// Counter animation
function animateCounter(id, target, duration) {
    let elem = document.getElementById(id);
    let start = 0;
    let increment = target / (duration / 16);
    function updateCounter() {
        start += increment;
        if (start < target) {
            elem.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            elem.textContent = target + (id === 'prizes-count' ? 'K+' : '+');
        }
    }
    updateCounter();
}
window.onload = function() {
    animateCounter('teams-count', 50, 1200);
    animateCounter('participants-count', 130, 1200);
    animateCounter('prizes-count', 50, 1200);
};

// Countdown timer
const eventDate = new Date('2025-07-19T09:00:00').getTime();
const countdown = document.getElementById('countdown-timer');
setInterval(() => {
    const now = new Date().getTime();
    let distance = eventDate - now;
    if (distance < 0) distance = 0;
    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2,'0');
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,'0');
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,'0');
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2,'0');
    countdown.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
}, 1000);

// FAQ accordion toggle
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        const item = btn.parentElement;
        const openItem = document.querySelector('.faq-item.open');
        if (openItem && openItem !== item) openItem.classList.remove('open');
        item.classList.toggle('open');
    });
});