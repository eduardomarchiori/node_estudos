var http = require('http');

http.createServer((req, res)=>{
    res.end('Bem vindo!');
}).listen(8085);

console.log('Server on!');
