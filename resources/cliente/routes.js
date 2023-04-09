const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'clientes';
const BASE_URL = '/clientes';

// Rota GET
app.get(BASE_URL, async (req, res) => {
  let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

  res.send(dados);
});

// Rota POST
app.post(BASE_URL, async (req, res) => {
  let corpo = req.body;

  let sql = await database.execute(`
      INSERT INTO ${TABLE_NAME} (nome, email, telefone, endereco, cidade, estado, cep, data_cadastro)
      VALUES ('${corpo.nome}', '${corpo.email}', '${corpo.telefone}', '${corpo.endereco}', '${corpo.cidade}', '${corpo.estado}', '${corpo.cep}', '${corpo.data_cadastro}')
  `);

  corpo.id = sql.insertId;
  
  res.send(corpo);
});

// Rota PUT
app.put(`${BASE_URL}/:id`, (req, res) => {
  const id = req.params.id;
  const { nome, email } = req.body;
  res.send(`Cliente atualizado: ${id}, ${nome}, ${email}`);
});

// Rota DELETE
app.delete(`${BASE_URL}/:id`, async (req, res) => {
  await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}`);
    
  res.sendStatus(204);
});




module.exports = app;