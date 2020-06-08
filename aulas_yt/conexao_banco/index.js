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

//Postagem
const postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING,
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

postagem.create({
    titulo: 'Era uma vez...',
    conteudo: 'Era uma vez um cachorro.'
});

postagem.sync({froce: true});
