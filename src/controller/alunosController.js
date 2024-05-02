/*1°) Importações*/
const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

//vamos carregar nosso modelo

require("../models/alunos");
const Alunos = mongoose.model("alunos");

/*2°) Abre e carrega todas informações de tarefas no formulário
tarefas.handlebars */
router.get('/alunos', (req, res) => {
    Alunos.find().lean().then((alunos) => {
        res.render("admin/alunos/alunos", { alunos: alunos });
    });
});


/*3°) Abre o Formulário addtarefas.handlebars */
router.get('/alunos/add', (req, res) => {
    res.render("admin/alunos/addalunos");
});


/*4°) Recebe as informações do botão que está no addtarefas.handlebar
e efetua o cadastro no banco de dados, depois ele volta para a listagem
das tarefas */
router.post('/alunos/nova', (req, res) => {
    var Alunos = new Alunos();
    alunos.nome = req.body.nome;
    alunos.idade = req.body.idade;
    alunos.save().then(() => {
        res.redirect("/rota_alunos/alunos/nova");
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro);
    });
});

/*5°) Abre e preenche o formulário edittarefas.handlebars com informações
do id passado */
router.get('/editar_alunos/:id', (req, res) => {
    Alunos.findOne({ _id: req.params.id }).lean().then((alunos) => {
        res.render("admin/alunos/editalunos", { faculdade: alunos });
    });
});


/*6°) Recebe as informações do botão que está no edittarefa.handlebar
e efetua a alteração no banco de dados. Volta para listagem das tarefas*/
router.post('/alunos/editar_alunos', (req, res) => {
    Alunos.updateOne({ _id: req.body._id },
        {
            $set: {
                nome: req.body.nome, idade: req.body.idade
            }
        }).then(() => {
            res.redirect("/rota_alunos/alunos");
        });
}); 


/*7°) No form turma.handlebars que lista as turmas possui um botão para
deletar
Ele deleta informação e refaz a lista no turma.handlebars*/
router.get('/deletar_alunos/:id', (req, res) => {
    Alunos.deleteMany({_id:req.params.id}).then(() => {
    res.redirect("/rota_alunos/alunos");
    });
});
    /*______ Fim das rotas das tarefas ___________ */
    module.exports = router;