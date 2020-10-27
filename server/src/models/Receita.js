const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    ingredientes: {
        type: String,
        required: true,
    },
    preparo: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    fonte: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    }
});

mongoose.model('Receita', ReceitaSchema);