// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
// Usamos el puerto 3000 para que tu frontend (puerto 5500) pueda hablar con él
const PORT = 3000;

// 1. Habilitar CORS: Permite que el navegador acceda a este servidor proxy
// Es la clave para que no salte el error CORB.
app.use(cors());

// 2. Ruta de Proxy: /api/circuitos es la ruta que tu frontend va a pedir.
app.get("/api/circuitos", async (req, res) => {
  // Aquí es donde deberías poner la URL externa que causa el problema CORB.
  // Como estamos usando datos de Wikimedia para las imágenes,
  // puedes intentar poner la URL de una de tus imágenes SVG o PNG que fallan.
  // **Nota:** Para que este proxy funcione con tus datos de F1,
  // necesitarías un API externo real (ej. un servicio de datos) o subir tus
  // imágenes a un servidor con CORS configurado.

  // Por ahora, usamos un ejemplo para probar que el proxy funciona:
  const API_URL_EXTERNA = "https://jsonplaceholder.typicode.com/todos/1";

  try {
    // El SERVIDOR hace la petición, evitando la restricción del navegador.
    const response = await fetch(API_URL_EXTERNA);
    const data = await response.json();

    // El servidor devuelve el JSON al frontend.
    res.json(data);
  } catch (error) {
    console.error("Error al solicitar la API externa:", error);
    res.status(500).send("Error interno del servidor proxy.");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor Proxy corriendo en http://localhost:${PORT}`);
  console.log(`Ruta de prueba: http://localhost:${PORT}/api/circuitos`);
});
