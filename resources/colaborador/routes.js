const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'tb_colaborador';
const BASE_URL = '/colaboradores';

// Rota GET
app.get(BASE_URL, async (req, res) => {
  let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

  res.send(dados);
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
  let dados = await database.execute(`
  SELECT * FROM ${TABLE_NAME} WHERE id= '${req.params.id}'
  `);

  res.send(dados[0]);
});

// Rota POST
app.post(BASE_URL, async (req, res) => {
  let corpo = req.body;

  let sql = await database.execute(`
      INSERT INTO ${TABLE_NAME} (nome, email, senha, ultimo_login, ativo)
      VALUES ('${corpo.nome}', '${corpo.email}', '${corpo.senha}', '${corpo.ultimo_login}', '${corpo.ativo}')
  `);

  corpo.id = sql.insertId;
  
  res.send(corpo);
});

// Rota PATCH
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
      nome='${req.body.nome || jaExiste[0].nome}'
      email='${req.body.email || jaExiste[0].email}'
      senha='${req.body.senha || jaExiste[0].senha}'
      ultimo_login='${req.body.ultimo_login || jaExiste[0].ultimo_login}'
      ativo='${req.body.ativo || jaExiste[0].ativo}'
    WHERE id='${req.params.id}'
    `);

  dados.id = req.params.id;

  res.send(dados);
});

// Rota DELETE
app.delete(`${BASE_URL}/:id`, async (req, res) => {
  await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}`);
    
  res.sendStatus(204);
});

module.exports = app;