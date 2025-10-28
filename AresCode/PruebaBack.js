async function probarConexion() {
    try {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        console.log("Datos del backend:", data);
        document.getElementById("resultado").textContent = JSON.stringify(data);
    } catch (error) {
        console.error("Error al conectar con el backend:", error);
        document.getElementById("resultado").textContent = "Error al conectar con el backend";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnProbarBack");
    if (btn) btn.addEventListener("click", probarConexion);
});