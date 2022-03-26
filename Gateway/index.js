// Importação das libs
import gateway from "./src/gateway.js";

// Preparando porta.
const port = process.env.PORT || 3000;

// Subindo seviço.
gateway.listen(port, () => {
    console.log('Servidor executando em http://localhost:'+port);
});
