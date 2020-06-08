var express = require('express');
var app = express();

// Rota simples
app.get("/",(req, res)=>{
    res.send("Bem vindo!");
});

// Outra rota
app.get("/contatos", (req, res)=>{
    res.send("Tela de contatos!");
})

//Rota com parametros
app.get("/editar/:id", (req, res)=>{
    res.send("Edite o usuario "+req.params.id);
})

app.get("/arquivo", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

//Servidor ligado
app.listen(8085,(req, res)=>{
    console.log('Server on!');
})