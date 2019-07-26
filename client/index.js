'use strict';

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

let WebSocket;

if (typeof require === 'function') {
    // In Node.js environment...
    WebSocket = require('ws');
} else {
    // Otherwise... use global in Browser environment!
    WebSocket = window.WebSocket;
}

const ws = new WebSocket('ws://localhost:1234');

ws.addEventListener('open', function () {
    ws.send('Client message... blah blah');
});

ws.addEventListener('message', function (event) {
    console.log('CLIENT RECEIVED: ', event.data);
});
