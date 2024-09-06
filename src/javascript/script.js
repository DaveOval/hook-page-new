// Espera a que el contenido esté completamente cargado
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header'); // Selecciona el header

    // Escucha el evento de scroll
    window.addEventListener('scroll', () => {
        // Comprueba si la página ha hecho scroll hacia abajo (más de 50px)
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Añade la clase cuando haya scroll
        } else {
            header.classList.remove('scrolled'); // Quita la clase cuando vuelva al tope
        }
    });
});

document.querySelectorAll('.ventaja_card').forEach(card => {
    card.addEventListener('click', function() {
        // Elimina la clase 'active' de todas las tarjetas
        document.querySelectorAll('.ventaja_card').forEach(c => c.classList.remove('active'));
        
        // Agrega la clase 'active' a la tarjeta seleccionada
        this.classList.add('active');

        // Cambia la imagen en 'ventaja_picture'
        const newImage = this.getAttribute('data-image');
        document.getElementById('ventajaPictureImage').src = newImage;
    });
});