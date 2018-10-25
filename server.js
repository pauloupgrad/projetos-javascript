const express = require('express');
const port = 8081;


const server = express();

server.get('/', (resq, resp) => {
    resp.send('<h1>Home</h1>');
});

server.get('/sobre', (resq, resp) => {
    resp.send('<h1>Quem sou</h1>');
});



server.listen(port, () => {
    console.log(`Servidor funcionando na porta: http:\\localhost:${port}`);
    console.log('Para sair do servidor digite: Ctrl + c');
});