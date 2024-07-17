document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    // Função para mostrar o slide atual
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.left = "0";
            } else if (i < index) {
                slide.style.left = "-100%";
            } else {
                slide.style.left = "100%";
            }
        });
    };

    // Função para mostrar o próximo slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    // Função para mostrar o slide anterior
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    // Adiciona evento de clique aos botões
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Mostra o slide inicial
    showSlide(currentIndex);
});