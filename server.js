const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Interacción 1
  socket.on('interaccion1', (data) => {
    console.log('Interacción 1:', data);
    // Respuesta del bot para la Interacción 1
    socket.emit('respuesta', '¿Cómo estás hoy?');
  });

  // Interacción 2
  socket.on('interaccion2', (data) => {
    console.log('Interacción 2:', data);
    // Respuesta del bot para la Interacción 2
    socket.emit('respuesta', '¿Qué estás haciendo en este momento?');
  });

  // Interacción 3
  socket.on('interaccion3', (data) => {
    console.log('Interacción 3:', data);
    // Respuesta del bot para la Interacción 3
    socket.emit('respuesta', 'Cuéntame más sobre ti.');
  });

  // Interacción 4
  socket.on('interaccion4', (data) => {
    console.log('Interacción 4:', data);
    // Respuesta del bot para la Interacción 4
    socket.emit('respuesta', '¿Tienes algún pasatiempo favorito?');
  });

  // Interacción 5
  socket.on('interaccion5', (data) => {
    console.log('Interacción 5:', data);
    // Respuesta del bot para la Interacción 5
    socket.emit('respuesta', '¿Has visitado algún lugar interesante recientemente?');
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
