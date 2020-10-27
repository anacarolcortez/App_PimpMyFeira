const mongoose = require('mongoose');
const Receita = mongoose.model('Receita');

module.exports = {
    async index(req, res) {
        const receitas = await Receita.find();
        return res.json(receitas);
    },
    async create(req, res) {
        const receita = await Receita.create(req.body);
        return res.json(receita);
    },
    async show(req, res) {
        const receita = await Receita.findById(req.params.id);
        return res.json(receita);

    },
    async update(req, res) {
        const receita =  await Receita.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(receita);
    },
    async delete(req, res){
        await Receita.findByIdAndRemove(req.params.id, { useFindAndModify: false });
        return res.send();
    }
};