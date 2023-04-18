const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_carrinho';
const BASE_URL = '/carrinhos';

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
       INSERT INTO ${TABLE_NAME} (produto_id, marca_id, cor, tamanho, quantidade, valor, total)
       VALUES ('${corpo.produto_id}', '${corpo.marca_id}', '${corpo.cor}', '${corpo.tamanho}', '${corpo.quantidade}', '${corpo.valor}', '${corpo.total}')
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
            produto_id='${req.body.produto_id || jaExiste[0].produto_id}',
            marca_id='${req.body.marca_id || jaExiste[0].marca_id}',
            cor='${req.body.cor || jaExiste[0].cor}',
            tamanho='${req.body.tamanho || jaExiste[0].tamanho}',
            quantidade='${req.body.quantidade || jaExiste[0].quantidade}',
            valor='${req.body.valor || jaExiste[0].valor}',
            total='${req.body.total || jaExiste[0].total}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}'`);

    res.sendStatus(204);
});

module.exports = app;