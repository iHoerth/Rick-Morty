const express = require('express');
const server = express();
const router = require('../src/routes/index')
const PORT = 3001;

// esta responsabilidad la tendria que hacer otro archivo, pero no el tiempo apremia XD
server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

server.use(express.json());
server.use(router);

module.exports = server;