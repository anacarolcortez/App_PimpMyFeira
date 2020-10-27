const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/pimpmyfeira', { useNewUrlParser: true, useUnifiedTopology: true })
require('./src/models/Receita');

app.use('/api', require('./src/routes'));
app.use(express.json());
app.use(cors());

/*
const Receita = mongoose.model('Receita');

app.get("/", (req, res) => {
    Receita.create({
        nome: "Torta com talos de acelga e champignons",
        ingredientes: [
            "talos de acelga",
            "champignons",
            "queijo muçarela",
            "2 lâminas de massa folhada",
            "1 ovo batido",
            "azeite e temperos a gosto",
        ],
        preparo: "Cozinhe os talos com água e um pouco de sal. Deixe-os esfriar e escorra-as bem. Lave bem os champignons e corte-os em lâminas finas. Refogue-os em um pouco de azeite. Misture os champignons com os talos de acelga cortadas e tempere com sal e pimenta a gosto. Unte com azeite uma forma para torta e abra uma lâmina de massa folhada. Coloque sobre ela o preparado de acelga e champignons. Corte o queijo em pedaços e coloque-os por cima, antes de tampar a torta com a segunda lâmina de massa. Pincele com ovo batido a massa e cozinhe a torta por 30 minutos no forno até que esteja dourada.",
        tipo: "refeição",
        fonte: "GreenMe",
        imagem: "https://i.imgur.com/MGWfk0F.jpg"
    });
    return res.send('Salvo')
}); 
Código para testar criação do BD
*/


app.listen(3001);
