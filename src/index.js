const express = require('express');
const cors = require('cors');
//const movies = require('./data/movies.json');
const Database = require('better-sqlite3');
const db = new Database('./src/db/database.db', { verbose: console.log });
// create and config server
const server = express(); //creamos servidor, inicia el proceso de escuchar
server.use(cors()); // configuramos el servidor para que sea una API pública, si quitamos cors será API privada
server.use(express.json()); //configuramos el servidor le decimos q vamos a trabajar con Json

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
//Buscar película por id
server.get('/movie/:movieId', (req, res) => {
  console.log(req.query);
  res.json({
    success: 'true',
    movies: { movies },
  });
});

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

server.get('/movies', (req, res) => {
  const query = db.prepare('SELECT * FROM movies'); //Preparar la query
  const movies = query.all(); //ejecutar la query, devuelve un array con todos los datos que devuelve query
  const response = {
    success: true,
    movies: movies,
  };

  res.json(response);
});
