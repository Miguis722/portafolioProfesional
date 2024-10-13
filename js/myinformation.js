const buttons = document.querySelectorAll('.button_container');
const contentContainer = document.querySelectorAll('.text_information_container');
const contentContainerComplete = document.querySelectorAll('.text_information_container_complete');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        // Solo funciona para dispositivos móviles, solo permite seleccionar un botón a la vez.
        if (window.innerWidth <= 768) {
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

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        // Solo funciona para dispositivos que NO sean moviles
        if (window.innerWidth > 768) {
            const isSelected = this.id === 'selected';

            buttons.forEach((btn, btnIndex) => {
                btn.removeAttribute('id');
                if (contentContainerComplete[btnIndex]) {
                    contentContainerComplete[btnIndex].id = 'hidden';
                }
            });

            if (!isSelected) {
                this.id = 'selected';
                if (contentContainerComplete[index]) {
                    contentContainerComplete[index].id = 'ThePestBlack';
                }
            }
        }
    });
});