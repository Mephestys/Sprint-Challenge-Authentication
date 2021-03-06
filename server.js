const express = require('express');
const cors = require('cors');

const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: 'GET, POST',
};

server.use(express.json());
server.use(cors(corsOptions));

routes(server);

module.exports = {
  server
};
