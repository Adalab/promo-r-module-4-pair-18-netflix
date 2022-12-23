const express = require('express');
const cors = require('cors');
const Database = require("better-sqlite3")
// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/movie/:movieId', (req, res) => { 
  console.log('URL  params:', req.params);
  console.log('URL param movieId:', req.params.movieId)
  
const movie = movie.find(movie => movie.id === req.params.movieId)
  console.log('movie', movie)});

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

const db = new Database('./src/db/database.db', { ... });

