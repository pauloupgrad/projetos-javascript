const express = require('express');
const port = 8081;


const server = express();

const logado = true;

const COLLABS = [     
    {    
        nome: "paulo",
        qtd: 400      
    },
    {
        nome: "Amanda",
        gtd: 300
    },
    {
        nome: "Bruno",
        gtd: 170
    }    
];

server.use((req, res, next) => {
    if (logado){
        next();
    }else{
        res.send('<h2> Você não esta logado no sistema!</h2>');
    }
});

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

server.get('/collabs', (req, res) => {
    res.send(COLLABS);
});

server.get('/sobre', (req, res) => {
    res.send('<h1>Quem sou</h1>');
});

server.use((req, res)=>{
    res.send(`<h2>Está rota ${req.url} não existe!</h2>`);
});



server.listen(port, () => {
    console.log(`Servidor funcionando na porta: http:\\localhost:${port}`);
    console.log('Para sair do servidor digite: Ctrl + c');
});