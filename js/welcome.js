document.addEventListener('DOMContentLoaded', function () {
    const buttonContainer = document.querySelector('.button_container');

    if (buttonContainer) {
        // Después de 1 segundo, cambia el id a 'Miguis722'
        setTimeout(() => {
            buttonContainer.id = 'Miguis722';
        }, 1000);
    }
});