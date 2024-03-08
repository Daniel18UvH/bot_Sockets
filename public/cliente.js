const socket = io();

function enviarMensaje(interaccion) {
  // Obtiene el mensaje del input
  const mensaje = document.getElementById('mensajeInput').value;

  // Muestra el mensaje enviado en la consola de la página
  mostrarMensaje(`Tú: ${mensaje}`);

  // Envia el mensaje al servidor
  socket.emit(interaccion, mensaje);

  // Limpia el input después de enviar el mensaje
  document.getElementById('mensajeInput').value = '';
}

socket.on('respuesta', (mensaje) => {
  // Muestra la respuesta del bot en la consola de la página
  mostrarMensaje(`Bot: ${mensaje}`);
});

function mostrarMensaje(mensaje) {
  // Agrega el mensaje al registro de la consola
  const logDiv = document.getElementById('log');
  const mensajeDiv = document.createElement('div');
  mensajeDiv.textContent = mensaje;
  logDiv.appendChild(mensajeDiv);

  // Desplaza automáticamente hacia abajo para mostrar el último mensaje
  logDiv.scrollTop = logDiv.scrollHeight;
}
