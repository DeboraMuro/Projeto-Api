const app = require('express').Router();
const database = require('../../connection/database');

app.get('/carrinho', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_carrinho`);

    res.send(dados);
  });

app.get('/carrinho/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_carrinho WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/carrinho', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
       INSERT INTO tb_carrinho (produto_id, marca_id, cor, tamanho, quantidade, valor, total)
       VALUES ('${corpo.produto_id}', '${corpo.marca_id}', '${corpo.cor}', '${corpo.tamanho}', '${corpo.quantidade}', '${corpo.valor}', '${corpo.total}')
    `);

    corpo.id = sql.insertId;

    res.send(corpo);
});

app.patch('/carrinho/:id', async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_carrinho WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE tb_carrinho SET
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

app.delete('/carrinho/:id', async (req, res) => {
    await database.execute(`DELETE FROM tb_carrinho WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});

module.exports = app;