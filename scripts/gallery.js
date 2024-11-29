document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNext() {
        carouselItems[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].style.opacity = 1;
    }

    setInterval(showNext, 3000);
});
