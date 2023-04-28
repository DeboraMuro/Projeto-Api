const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'tb_cliente';
const BASE_URL = '/clientes';

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

app.post(BASE_URL, async (req, res) => {
  let corpo = req.body;

  let sql = await database.execute(`
      INSERT INTO ${TABLE_NAME} (nome, email, telefone, endereco, cidade, estado, cep, data_cadastro)
      VALUES ('${corpo.nome}', '${corpo.email}', '${corpo.telefone}', '${corpo.endereco}', '${corpo.cidade}', '${corpo.estado}', '${corpo.cep}', '${corpo.data_cadastro}')
  `);

  corpo.id = sql.insertId;
  
  res.send(corpo);
});

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
      telefone='${req.body.telefone || jaExiste[0].telefone}'
      endereco='${req.body.endereco || jaExiste[0].endereco}'
      cidade='${req.body.cidade || jaExiste[0].cidade}'
      estado='${req.body.estado || jaExiste[0].estado}'
      cep='${req.body.cep || jaExiste[0].cep}'
      data_cadastro='${req.body.data_cadastro || jaExiste[0].data_cadastro}'
    WHERE id='${req.params.id}'
  `);

  dados.id = req.params.id;

  res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
  await database.execute(`
  DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}
  `);
    
  res.sendStatus(204);
});

module.exports = app;