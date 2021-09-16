// Our initial setup (package requires, port number setup)
const express = require('express');
const path = require('path');
// const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost:3000

const app = express();

const http = require('http');

const routes = require('./prove01-routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
