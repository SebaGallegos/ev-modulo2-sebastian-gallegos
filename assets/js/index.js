// Validación del formulario de contacto
// Se obtiene el formulario por su id
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Se añade un evento al enviar el formulario
    contactForm.addEventListener('submit', function(e) {
        // Prevenir el envío del formulario por defecto
        e.preventDefault();

        // Se define una variable que simboliza si el formulario es válido
        let valid = true;

        // Se valida cada campo del formulario
        ['nombre', 'email', 'mensaje'].forEach(id => {
            // Se obtiene el elemento del formulario por su id
            // Se comprueba si el campo está vacío o si el email no es válido
            // este último se comprueba con una expresión regular
            const input = document.getElementById(id);
            if (!input.value.trim() || (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
                // Si el campo no es válido, se añade la clase 'is-invalid' para mostrar un mensaje de error
                // Y se establece valid como false
                input.classList.add('is-invalid');
                valid = false;
            } else {
                // Si el campo es válido, se elimina la clase 'is-invalid'
                input.classList.remove('is-invalid');
            }
        });

        // Si todos los campos son válidos, se muestra un mensaje de éxito
        if (valid) {
            document.getElementById('formSuccess').classList.remove('d-none');
            contactForm.reset();
            setTimeout(() => {
                document.getElementById('formSuccess').classList.add('d-none');
            }, 3000);
        }
    });
}

// Lógica del test de seguridad
// Se obtiene el formulario del test por su id
const testForm = document.getElementById('testForm');
if (testForm) {
    // Se añade un evento al enviar el formulario del test
    testForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Se obtienen las respuestas del formulario y se comparan con las correctas
        const respuestas = [
            testForm.elements['pregunta1'].value,
            testForm.elements['pregunta2'].value,
            testForm.elements['pregunta3'].value
        ];
        const correctas = ['c', 'b', 'a'];
        const puntaje = respuestas.filter((respuesta, i) => respuesta === correctas[i]).length;
        let feedback = '';

        // Se muestra el puntaje obtenido y un mensaje de retroalimentación
        if (puntaje === 3) {
            feedback = '<div class="alert alert-success">¡Excelente! Has respondido correctamente todas las preguntas.</div>';
        } else if (puntaje === 2) {
            feedback = '<div class="alert alert-warning">¡Bien! Pero revisa las respuestas incorrectas para mejorar tu seguridad.</div>';
        } else {
            feedback = '<div class="alert alert-danger">Te recomendamos repasar las buenas prácticas de seguridad.</div>';
        }
        document.getElementById('testFeedback').innerHTML = feedback;
    });
}