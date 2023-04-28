const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'tb_tipos_pagamento';
const BASE_URL = '/tipos_pagamentos';

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
      INSERT INTO ${TABLE_NAME} (nome, descricao, ativo, desconto, prazo_processamento, informacoes_adicionais)
      VALUES ('${corpo.nome}', '${corpo.descricao}', '${corpo.ativo}', '${corpo.desconto}', '${corpo.prazo_processamento}', '${corpo.informacoes_adicionais}')
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
      descricao='${req.body.descricao || jaExiste[0].descricao}'
      ativo='${req.body.ativo || jaExiste[0].ativo}'
      desconto='${req.body.desconto || jaExiste[0].desconto}'
      prazo_processamento='${req.body.prazo_processamento || jaExiste[0].prazo_processamento}'
      informacoes_adicionais='${req.body.informacoes_adicionais || jaExiste[0].informacoes_adicionais}'
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