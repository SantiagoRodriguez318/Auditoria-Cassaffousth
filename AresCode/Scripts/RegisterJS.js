function VerificarContraseña() {
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("Confirm").value;
    const mensaje = document.getElementById("Mensaje");
    if (pass !== confirm) {mensaje.textContent = "Las contraseñas no coinciden ❌";
        mensaje.style.color = "red";
    return false;}
    mensaje.textContent = "";
    alert("¡Registro exitoso! ✅")
    return true;
}