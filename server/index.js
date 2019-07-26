'use strict';

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 1234 });

wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        console.log('SERVER RECEIVED: %s', msg);
        ws.send('Thanks for message.');
    });
});

console.log('WebSocket Server was started');
