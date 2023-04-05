const app = require('express').Router();
const database = require('../../connection/database');

app.get('/marca', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_marca`);

    res.send(dados);
});

app.get('/marca/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_marca WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/marca', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
       INSERT INTO tb_marca (nome, imagem)
       VALUES ('${corpo.nome}', '${corpo.imagem}')
    `);

    corpo.id = sql.insertId;

    res.send(corpo);
});

app.patch('/marca/:id', async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_marca WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE tb_marca SET
            nome='${req.body.nome || jaExiste[0].nome}',
            imagem='${req.body.imagem || jaExiste[0].imagem}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete('/marca/:id', async (req, res) => {
    await database.execute(`DELETE FROM tb_marca WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});

module.exports = app;