const express = require('express');
const routes = express.Router();

const ReceitaController = require('./controllers/ReceitaController');

routes.get('/receitas', ReceitaController.index);
routes.post('/receitas', ReceitaController.create);
routes.get('/receitas/:id', ReceitaController.show);
routes.put('/receitas/:id', ReceitaController.update);
routes.delete('/receitas/:id', ReceitaController.delete);

module.exports = routes;