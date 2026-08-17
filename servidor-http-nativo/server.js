const http = require ('node:http');

const PORTA = 3000 

const server = http.createServer((req, res) => {
    console.log(`Requisicao recebida! ${req.method} ${req.url}`)
    console.log(new Date().toISOString())

    res.statusCode = 201;
    res.setHeader ('application/json', 'text/plain; charset=utf-8');
    return JSON.stringify({ status: "ok" })

    res.end("Recurso criado!");
    // se tirar a linha anterior (res.end) a pagina ficara carregando eternamente.

});

server.listen(PORTA,() => {
    console.log(`Servidor funcionando na porta ${PORTA}`)
});