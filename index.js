document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Mensaje enviado correctamente');
        })
        .catch(error => {
            alert('Error al enviar el mensaje');
        });
    });

    // ...existing code...
});
