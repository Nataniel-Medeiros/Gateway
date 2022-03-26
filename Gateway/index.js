const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
var logger = require('morgan');
 
app.use(logger('dev'));
 
function selectProxyHost(req) {
    if (req.path.startsWith('/serviceA'))
        return 'http://localhost:8091/';
    else if (req.path.startsWith('/serviceB'))
        return 'http://localhost:8092/';
}
 
app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});
 
app.listen(3000, () => {
    console.log('API Gateway running!');
});