const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
    nome: String,
    nif: Number,
    data: String,
    viatura: {
      marca: String,
      modelo: String,
      matricula: String
    },
    nr_intervencoes: Number,
    intervencoes: [
      {
        codigo: String,
        nome: String,
        descricao: String
      }
    ]
});

module.exports = mongoose.model('repair', repairSchema);