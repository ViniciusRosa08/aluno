require('./db');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Alunos = new Schema({
    
nome: {
    type: String,
    required: true
},
idade: {
    type: DOUBLE,
    required: true
}
});
mongoose.model("alunos", Alunos);