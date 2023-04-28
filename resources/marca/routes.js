const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_marca';
const BASE_URL = '/marcas';

app.get(BASE_URL, async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    res.send(dados);
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post(BASE_URL, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
       INSERT INTO tb_marca (nome, imagem)
       VALUES ('${corpo.nome}', '${corpo.imagem}')
    `);

    corpo.id = sql.insertId;

    res.send(corpo);
});

app.patch(`${BASE_URL}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${TABLE_NAME} SET
            nome='${req.body.nome || jaExiste[0].nome}',
            imagem='${req.body.imagem || jaExiste[0].imagem}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`
    DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});


module.exports = app;