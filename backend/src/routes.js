const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();


// COMENT
// Requisição e resposta
//routes.get('/', (req, res) => {
 //   return res.json({ message: `Olá ${req.query.name}` });
 // });
 // COMENT

routes.get('/devs', DevController.index);

//POST é sempre criar, NÃO RECEBER
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;