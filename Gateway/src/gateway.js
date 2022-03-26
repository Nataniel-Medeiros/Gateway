// Preparação das libs.
import express from "express";
import httpProxy from "express-http-proxy";
import logger from "morgan";

// Iniciando server.
const gateway = express();

// Log para depuração em nível de desenvolvimento.
gateway.use(logger('dev'));
 
// Selecação do micro serviço.
function selectProxyHost(req) {
    if (req.path.startsWith('/serviceA')){
        return 'http://localhost:8091/';
    }
    if (req.path.startsWith('/serviceB')){
        return 'http://localhost:8092/';
    } 
}

// Resposta local
gateway.get('/', (req, res) => {
    return res.json({message: 'Gateway executando'});
})
 
// Requisição do microserviço.
gateway.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});

// Exportação do módulo.
export default gateway;
