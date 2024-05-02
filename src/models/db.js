const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url = "mongodb://127.0.0.1/tarefa";
mongoose.connect(url).then(() => {
    console.log("MongoDB Conectado..");
}).catch((err) => {
    console.log("Erro ao conectar: " + err);
});