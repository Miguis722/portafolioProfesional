const buttons = document.querySelectorAll('.button_container');
const contentContainer = document.querySelectorAll('.text_information_container');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        // Solo funciona para dispositivos móviles, solo permite seleccionar un botón a la vez.
        if (window.innerWidth < 768) {
            const isSelected = this.id === 'selected';

            buttons.forEach((btn, btnIndex) => {
                btn.removeAttribute('id');
                if (contentContainer[btnIndex]) {
                    contentContainer[btnIndex].id = 'hidden';
                }
            });

            if (!isSelected) {
                this.id = 'selected';
                if (contentContainer[index]) {
                    contentContainer[index].id = 'Miguis722';
                }
            }
        }
    });
});