const app = require('express').Router();
const database = require('../../connection/database'); 

const TABLE_NAME = 'tb_endereco'
const BASE_URL = '/enderecos'

app.get(BASE_URL, async (req, res) => {
    // let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    // res.send(dados);
    res.send('ok');
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
    // let dados = await database.execute(`
    //     SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    // `);

    // res.send(dados[0]);
    res.send('ok');
});

app.post(BASE_URL, async (req, res) => {
    // let corpo = req.body;

    // let sql = await database.execute(`
    //     INSERT INTO ${TABLE_NAME} (logradouro, numero, complemento, bairro, cidade, cep, estado, cliente_id)
    //     VALUES ('${corpo.logradouro}', '${corpo.numero}', '${corpo.complemento}', '${corpo.bairro}', '${corpo.cidade}', '${corpo.cep}', '${corpo.estado}', '${corpo.cliente_id}')
    // `);

    // corpo.id = sql.insertId;
    
    // res.send(corpo);
    res.send('ok');
});

app.patch(`${BASE_URL}/:id`, async (req, res) => {
    // let dados = req.body;

    // let jaExiste = await database.execute(`
    //     SELECT FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    // `);
    // if (undefined === jaExiste[0]) {
    //     res.sendStatus(404);
    //     return;
    // }

    // await database.execute(`
    //     UPDATE ${TABLE_NAME} SET
    //         logradouro='${req.body.logradouro || jaExiste[0].logradouro}',
    //         numero='${req.body.numero || jaExiste[0].numero}',
    //         complemento='${req.body.complemento || jaExiste[0].complemento}'
    //         bairro='${req.body.bairro || jaExiste[0].bairro}'
    //         cidade='${req.body.cidade || jaExiste[0].cidade}'
    //         cep='${req.body.cep || jaExiste[0].cep}'
    //         estado='${req.body.estado || jaExiste[0].estado}'
    //         cliente_id='${req.body.cliente_id || jaExiste[0].cliente_id}'
    //     WHERE id='${req.params.id}'
    // `);

    // dados.id = req.params.id;

    // res.send(dados);
    res.send('ok');
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    // await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}`);
    
    // res.sendStatus(204);
    res.send('ok');
});


module.exports = app;