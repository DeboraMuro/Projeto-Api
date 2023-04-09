const express = require('express');
const app = express();
const port = 8000;

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Rota GET para listar todos os itens
app.get('/itens', (req, res) => {
  res.send('Listagem de todos os itens');
});

// Rota GET para buscar um item específico pelo ID
app.get('/itens/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Item com ID ${id}`);
});

// Rota POST para inserir um novo item
app.post('/itens', (req, res) => {
  const { nome, preco } = req.body;
  res.send(`Novo item ${nome} adicionado com preço ${preco}`);
});

// Rota PUT para atualizar um item pelo ID
app.put('/itens/:id', (req, res) => {
  const id = req.params.id;
  const { nome, preco } = req.body;
  res.send(`Item com ID ${id} atualizado para ${nome} com preço ${preco}`);
});

// Rota DELETE para remover um item pelo ID
app.delete('/itens/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Item com ID ${id} removido`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


module.exports = app;
