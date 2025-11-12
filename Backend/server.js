import app from "./src/app.js"; // o app.ts compilado

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});