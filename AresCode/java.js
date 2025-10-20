document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validación del correo
    if (!email.includes('@') || password.length < 6) {
        alert('Por favor, ingresa un correo electrónico válido y una contraseña/código.');
        return;
    }
    
   
});