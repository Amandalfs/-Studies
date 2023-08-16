const axios = require("axios")

const api = axios.create({
    baseURL: 'http://desafio-backend-03-dindin.pedagogico.cubos.academy',
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json'
    }
});

module.exports = api;