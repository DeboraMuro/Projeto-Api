const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_pedido';
const BASE_URL = '/pedido';

app.get (`${BASE_URL}`, async (req, res) =>{
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`)
    res.send (dados)
});

app.get(`${BASE_URL}/:id`, async (req, res) =>{
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `)
    res.send (dados[0]);
});

app.post(`${BASE_URL}`, async (req, res) =>{
    let corpo = req.body;
    
    let sql= await database.execute(`INSERT INTO ${TABLE_NAME} (cliente_id, valor_pedido, valor_frete, cartao, produto_id) VALUES ('${corpo.cliente_id}',
    '${corpo.valor_pedido}', '${corpo.valor_frete}', '${corpo.cartao}','${corpo.produto_id}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});


app.patch(`${BASE_URL}/:id`, async (req, res) =>{

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
            cliente_id='${req.body.cliente_id || jaExiste[0].cliente_id}',
            valor_pedido='${req.body.valor_pedido || jaExiste[0].valor_pedido}',
            valor_frete='${req.body.valor_frete || jaExiste[0].valor_frete}',
            cartao='${req.body.cartao || jaExiste[0].cartao}',
            produto_id='${req.body.produto_id || jaExiste[0].produto_id}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});



module.exports = app;