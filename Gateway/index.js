//Preparação das libs.
const httpProxy = require('express-http-proxy');
const express = require('express');
var logger = require('morgan');

//Iniciando app.
const app = express();

//Log para depuração em nível de desenvolvimento.
app.use(logger('dev'));
 
//Selecação do micro serviço.
function selectProxyHost(req) {
    if (req.path.startsWith('/serviceA'))
        return 'http://localhost:8091/';
    else if (req.path.startsWith('/serviceB'))
        return 'http://localhost:8092/';
}
 
//Requisição do microserviço.
app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});

//Subindo seviço.
app.listen(3000, () => {
    console.log('API Gateway running!');
});