'use strict';

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

var WebSocket;

if (typeof require === 'function') {
    // In Node.js console...
    WebSocket = require('ws');
} else {
    // Otherwise... use global context!
    WebSocket = window.WebSocket;
}

var ws = new WebSocket('ws://localhost:1234');

ws.addEventListener('open', function () {
    ws.send('Client message... blah blah');
});

ws.addEventListener('message', function (event) {
    console.log('CLIENT RECEIVED: ', event.data);
});
