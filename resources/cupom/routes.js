const app = require('express').Router();
const database = require('../../connection/database');

app.get('/cupom', (req, res) => {

    res.send('ok');
  });

app.get('/cupom/:id', (req, res) => {

    res.send('ok');
  });

app.post('/cupom', (req, res) => {

    res.send('ok');
  });

app.patch('/cupom/:id', (req, res) => {

    res.send('ok');
  });

app.delete('/cupom/:id', (req, res) => {

    res.send('ok');
  });

module.exports = app;