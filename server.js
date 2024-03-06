const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path'); // Importa el módulo 'path'

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Lógica para procesar el mensaje y enviar una respuesta
        const response = generarRespuesta(message);
        ws.send(response);
    });
});

function generarRespuesta(message) {
    // Lógica para generar la respuesta del bot
    // ...

    return `Recibí tu mensaje: "${message}"`;
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor WebSocket en http://localhost:${PORT}`);
});
