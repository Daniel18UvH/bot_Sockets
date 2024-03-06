const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('message', (event) => {
    const chatBox = document.getElementById('chat-box');
    const coloredMessage = formatMessage(event.data);
    chatBox.innerHTML += `<p>${coloredMessage}</p>`;
    
    // Imprimir mensaje en la consola del navegador
    console.log(coloredMessage);
});

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        socket.send(message);
        messageInput.value = '';
    }
});

function formatMessage(message) {
    // Puedes personalizar las funciones de formato según tus preferencias
    const colors = {
        welcome: 'green',
        userMessage: 'blue',
        botResponse: 'red'
    };

    // Detectar si es un mensaje de bienvenida o de usuario
    if (message.includes('Bienvenido')) {
        return `<span style="color: ${colors.welcome};">${message}</span>`;
    } else {
        return `<span style="color: ${colors.userMessage};">${message}</span>`;
    }
}
