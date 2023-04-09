const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'tb_dados_cartao';
const BASE_URL = '/dados_cartao';

app.get (`${BASE_URL}`, async (req, res) =>{
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    res.send (dados);
});


app.get(`${BASE_URL}/:id`, async (req, res) =>{
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'`);

    res.send (dados);
});


app.post(`${BASE_URL}`, async (req, res) =>{
    let corpo = req.body;

    let sql = await database.execute(`INSERT INTO ${TABLE_NAME} (numero_cartao , validade, CVV, titular, cliente_id) 
    VALUES ('${corpo.numero_cartao}', '${corpo.validade}', '${corpo.CVV}', '${corpo.titular}', '${corpo.cliente_id}')
    `);

    corpo.id = sql.insertId;
    
    // res.send ('ok')
    res.send(corpo);
});



app.patch(`${BASE_URL}/:id`, async (req, res) =>{
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${TABLE_NAME} SET
            numero_cartao='${req.body.numero_cartao || jaExiste[0].numero_cartao}',
            validade='${req.body.validade || jaExiste[0].validade}',
            CVV='${req.body.CVV || jaExiste[0].CVV}',
            titular='${req.body.titular || jaExiste[0].titular}',
            cliente_id='${req.body.cliente_id || jaExiste[0].cliente_id}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    // res.send ('ok')
    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}'`)

    // res.send ('ok')
    res.sendStatus(204);
});



module.exports = app;