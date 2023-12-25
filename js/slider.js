let slideIndex = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

function showSlides() {
    slideIndex++;
    if (slideIndex >= images.length) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showSlides, 3000); // Change image every 3 seconds (3000ms)
