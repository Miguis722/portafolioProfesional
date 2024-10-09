document.addEventListener('DOMContentLoaded', function () {
    const buttonContainer = document.querySelector('.button_container');

    setTimeout(() => {
        buttonContainer.classList.add('show-button');
    }, 1000);
});
