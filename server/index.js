'use strict';

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 1234 });

wss.on('connection', function (ws) {
    ws.on('message', function (msg) {
        console.log('SERVER RECEIVED: %s', msg);
        ws.send('Thanks for message.');
    });
});
