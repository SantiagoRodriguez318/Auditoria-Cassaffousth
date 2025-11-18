document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    // Popup
    const popup = document.getElementById("login-popup");
    const popupMessage = document.getElementById("popup-message");
    const popupClose = document.getElementById("popup-close");

    let redirectionOnClose = true;

    // Mostrar popup
    function showPopup(message, type = "success") {
        popup.style.display = "flex";
        popupMessage.textContent = message;
        popup.querySelector(".popup-content").className = `popup-content ${type}`;
    }

    // Cerrar popup
    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
        
        if (redirectionOnClose) {
            window.location.href = "UserPage.html";
        } else {
            window.location.href = "Login.html";
        }
    });

    // Submit del form
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        console.log("Evento submit hecho");

        const Email = document.getElementById("email").value;
        const Contraseña = document.getElementById("password").value;

        console.log("Enviando petición al servidor...");

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Email, Contraseña }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login correcto ✅");

                showPopup("Inicio de sesión correcto ✅", "success");

                redirectionOnClose = true;

                if (data.token) {
                    localStorage.setItem("token", data.token);
                }

            } else {
                console.log("❌ Error en el login:", data.message);

                showPopup(data.message || "Error al iniciar sesión ❌", "error");

                redirectionOnClose = false;
            }

        } catch (error) {

            console.error("Error en la conexión:", error);

            showPopup("Error en la conexión con el servidor ❌", "error");

            redirectionOnClose = false;
        }
    });
});
