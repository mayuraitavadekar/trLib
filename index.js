/**
 * nodejs imports
 */
var http = require('http');
var fs = require('fs');

/**
 * core configs
 */
const PORT = 8080;

/**
 * get templateData obj
 */
var TemplateData = require('./TemplateUtility')

/**
 * server
 */
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write(TemplateData.TemplateData.trLibHTML);
    res.end();
})
.listen(PORT,() => {
    console.log(`template is rendering on port ${PORT}`);
});