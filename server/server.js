const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicpath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from :'server',
    text: 'You have joined the chatroom',
    createdAt: 'now'
  });

  socket.on('createMessage', (message) => {
    console.log('Message:', message.text);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  });
});

server.listen(port, () => {
  console.log(`Server is up and running on port ${port}`)
});
