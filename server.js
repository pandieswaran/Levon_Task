const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*"
    }
});

// Serve static files from the "public" directory
app.use(express.static('public'));

let likes = 0;

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('likeupdate', likes);
    
    socket.on('liked', () => {
        likes++;
        socket.emit('likeupdate', likes);
        socket.broadcast.emit('likeupdate', likes);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server on port 8000 for HTTP requests and WebSocket connections
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
