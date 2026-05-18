let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
const currentScroll = window.scrollY;

if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll ke bawah → sembunyikan navbar
    navbar.classList.add('-translate-y-full');
} else {
    // Scroll ke atas → tampilkan navbar
    navbar.classList.remove('-translate-y-full');
}

lastScroll = currentScroll;
});
