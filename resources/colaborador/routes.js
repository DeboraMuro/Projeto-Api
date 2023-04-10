const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'colaborador';
const BASE_URL = '/colaborador';

// Rota GET
app.get(BASE_URL, async (req, res) => {
  let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

  res.send(dados);
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
  let dados = await database.execute(`
  SELECT * FROM ${TABLE_NAME} WHERE id= '${req.params.id}
  `);

  res.send(dados[0]);
});

// Rota POST
app.post(BASE_URL, async (req, res) => {
  let corpo = req.body;

  let sql = await database.execute(`
      INSERT INTO ${TABLE_NAME} (nome, email, senha, ultimo login, situacao)
      VALUES ('${corpo.nome}', '${corpo.email}', '${corpo.senha}', '${corpo.ultimologin}', '${corpo.situacao}')
  `);

  corpo.id = sql.insertId;
  
  res.send(corpo);
});

// Rota PUT
app.put(`${BASE_URL}/:id`, (req, res) => {
  const id = req.params.id;
  const { nome, email } = req.body;
  res.send(`Colaborador atualizado: ${id}, ${nome}, ${email}`);
});

// Rota DELETE
app.delete(`${BASE_URL}/:id`, async (req, res) => {
  await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}`);
    
  res.sendStatus(204);
});




module.exports = app;