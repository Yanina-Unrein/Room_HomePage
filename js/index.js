const heroSection = document.querySelector('.main__hero');
const images = [
  "../assets/desktop-image-hero-1.webp",
  "../assets/desktop-image-hero-2.webp",
  "../assets/desktop-image-hero-3.webp"
];
let currentImageIndex = 0;

document.querySelector('.main__controls .main__arrows:nth-child(1)').addEventListener('click', () => {
  // Flecha izquierda
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
  heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});

document.querySelector('.main__controls .main__arrows:nth-child(2)').addEventListener('click', () => {
  // Flecha derecha
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
  heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});


const hamburger = document.querySelector('.main__hamburguer');
const navLinks = document.querySelector('.main__links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  if (menuOpen) {
    hamburger.src = "./assets/icons/icon-hamburger.svg";
  } else {
    hamburger.src = "./assets/icons/icon-close.svg";
  }
  
  menuOpen = !menuOpen;
});