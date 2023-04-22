const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_tamanho';
const BASE_URL = '/tamanhos';

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
        INSERT INTO ${TABLE_NAME} (tamanho)
        VALUES ('${corpo.tamanho}')
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
            tamanho='${req.body.tamanho || jaExiste[0].tamanho}'
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