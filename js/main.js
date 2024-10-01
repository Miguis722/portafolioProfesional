const scrollToTopButton = document.getElementById('scrollToTopButton');

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});