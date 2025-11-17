document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("register-popup");
    const popupMessage = document.getElementById("popup-message");
    const popupClose = document.getElementById("popup-close");
    const form = document.getElementById("registerForm");

    let redirectionOnClose = true;

    function showPopup(message, type = "success") {
        popup.style.display = "flex";
        popupMessage.textContent = message;
        popup.querySelector(".popup-content").className = `popup-content ${type}`;
    }

    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
        if (redirectionOnClose) {
        window.location.href = "AresCode.html";
    } else {
        window.location.href = "Register.html";
    }
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Evento submit hecho");

        const Nombre = document.getElementById("name").value;
        const Apellido = document.getElementById("surname").value;
        const Email = document.getElementById("email").value;
        const Contraseña = document.getElementById("password").value;
        const Confirm = document.getElementById("Confirm").value;
        const mensaje = document.getElementById("Mensaje");

        if (Contraseña !== Confirm) {
            mensaje.style.color = "red";
            console.log("Contraseñas diferentes, no se envía la petición.");
            showPopup("Las contraseñas no coinciden ❌", "error");
            redirectionOnClose = false;
            return;
    } else {
        mensaje.textContent = "";
    }

    console.log("Enviando petición al servidor...");

    try {
        const response = await fetch("http://localhost:3000/registro", {
            method: "POST",
            headers: {
            "Content-type": "application/json",
            },
        body: JSON.stringify({ Nombre, Apellido, Email, Contraseña }),
        });

        const data = await response.json();
        console.log("Respuesta recibida:", data);

    if (response.ok) {
        console.log("Registro correcto ✅");
        showPopup(
            "Se ha registrado correctamente ✅. Revise su correo para verificar su cuenta.",
            "success"
        );
        redirectionOnClose = true;
    } else {
            console.log("❌ Error en el registro", data.message);
            showPopup(data.message || "Error al registrarse ❌", "error");
            redirectionOnClose = false;
        }
    } catch (error) {
        console.error("Error en el bloque principal:", error);
        showPopup("Error en la conexión con el servidor ❌", "error");
        redirectionOnClose = false;
    }
    });
});
