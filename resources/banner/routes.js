// const express = require('express');
// const app = express.Router();

const app = require('express').Router();
const database = require('../../connection/database');

const BASE_URL = '/banners';


app.get('/banners', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_banner`);

    
    res.send(dados);
});

app.get('/banners/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `);

    // res.send ('ok')
    res.send(dados[0]);
});

app.post('/banners', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_banner (titulo, descricao, imagem)
        VALUES ('${corpo.titulo}', '${corpo.descricao}', '${corpo.imagem}')
    `);

    corpo.id = sql.insertId;
    
    // res.send ('ok')
    res.send(corpo);
});

app.patch(`${BASE_URL}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `);

    //testando se realmente se existe algum banner com aquele id
    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE tb_banner SET
            titulo='${req.body.titulo || jaExiste[0].titulo}',
            descricao='${req.body.descricao || jaExiste[0].descricao}',
            imagem='${req.body.imagem || jaExiste[0].imagem}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    // res.send ('ok')
    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM tb_banner WHERE id='${req.params.id}'`)

    // res.send ('ok')
    res.sendStatus(204);
});



module.exports = app;
