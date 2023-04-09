const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'tb_colecoes_destaque';
const BASE_URL = '/colecoes_destaques';

app.get (`${BASE_URL}`, async (req, res) =>{
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    res.send(dados);
});

app.get(`${BASE_URL}/:id`, async (req, res) =>{
    let dados = await database.execute(`
        SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    // res.send ('ok')
    res.send(dados[0]);
});

app.post(`${BASE_URL}`, async (req, res) =>{
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO ${TABLE_NAME} (titulo, desconto, imagem)
        VALUES ('${corpo.titulo}', '${corpo.desconto}', '${corpo.imagem}')
    `);

    corpo.id = sql.insertId;
    
    // res.send ('ok')
    res.send(corpo);

});

app.patch(`${BASE_URL}/:id`, async (req, res) =>{
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    //testando se realmente se existe algumA Colecao com aquele id
    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${TABLE_NAME} SET
            titulo='${req.body.titulo || jaExiste[0].titulo}',
            desconto='${req.body.desconto || jaExiste[0].desconto}',
            imagem='${req.body.imagem || jaExiste[0].imagem}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}'`)

    // res.send ('ok')
    res.sendStatus(204);
});



module.exports = app;