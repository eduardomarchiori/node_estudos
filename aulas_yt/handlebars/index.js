var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Conexao com o banco de dados
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('sistemadecadastro', 'root', 'minhasenha', {
        host: 'localhost',
        dialect: 'mysql'
    });

    sequelize.authenticate().then(()=>{
        console.log('Conectado com sucesso!');
    }).catch((error)=>{
        console.log('Falha ao se conectar:'+error);    
    });

//Rota
app.get("/cadastro",(req, res)=>{
    res.render('formulario');
});

app.post('/add', (req, res)=>{
    res.send('Formulario recebido.')
});

//Servidor ligado
app.listen(8085,(req, res)=>{
    console.log('Server on!');
})