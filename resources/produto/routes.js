const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_produtos'
const BASE_URL = '/produtos'

app.get(BASE_URL, async (req, res) => {
    // let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    // res.send(dados);
    res.send('ok');
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
//     let dados = await database.execute(`
//     SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
// `);

// res.send(dados[0]);
// });

// app.post(BASE_URL, async (req, res) => {
//     let corpo = req.body;

//     let sql = await database.execute(`
//         INSERT INTO ${TABLE_NAME} (nome, descricao, cor, quantidade, referencia, imagem, valor, tamanho_id, marca_id)
//         VALUES ('${corpo.nome}', '${corpo.descricao}', '${corpo.cor}', '${corpo.quantidade}', '${corpo.referencia}', '${corpo.imagem}', '${corpo.valor}', '${corpo.tamanho_id}', '${corpo.marca_id}')
//     `);

//     corpo.id = sql.insertId;
    
//     res.send(corpo);
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
    res.send('ok')
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
    //         nome='${req.body.nome || jaExiste[0].nome}',
    //         descricao='${req.body.descricao || jaExiste[0].descricao}',
    //         cor='${req.body.cor || jaExiste[0].cor}',
    //         quantidade='${req.body.quantidade || jaExiste[0].quantidade}',
    //         referencia='${req.body.referencia || jaExiste[0].referencia}',
    //         imagem='${req.body.imagem || jaExiste[0].imagem}',
    //         valor='${req.body.valor || jaExiste[0].valor}',
    //         tamanho_id='${req.body.tamanho_id || jaExiste[0].tamanho_id}',
    //         marca_id='${req.body.marca_id || jaExiste[0].marca_id}'
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
