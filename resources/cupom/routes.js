const app = require('express').Router();
const database = require('../../connection/database');

app.get('/cupom', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_cupom`);

    res.send(dados);
  });

app.get('/cupom/:id', async (req, res) => {
    let dados = await database.execute(`
      SELECT * FROM tb_cupom WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
  });

app.post('/cupom', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
      INSERT INTO tb_cupom (codigo, descricao)
      VALUES ('${corpo.codigo}', '${corpo.descricao}');
    `);

    corpo.id = sql.insertId;

    res.send(corpo);
  });

app.patch('/cupom/:id', async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_cupom WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE tb_cupom SET
            codigo='${req.body.codigo || jaExiste[0].codigo}',
            descricao='${req.body.descricao || jaExiste[0].descricao}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
  });

app.delete('/cupom/:id', async (req, res) => {
    await database.execute(`DELETE FROM tb_cupom WHERE id='${req.params.id}'`)

    res.sendStatus(204);
  });

module.exports = app;