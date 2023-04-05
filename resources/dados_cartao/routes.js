const app = require('express').Router();
const database = require("../../connection/database");

const TABLE_NAME = 'tb_dados_cartao';
const BASE_URL = '/dados_cartao';

app.get (`${BASE_URL}`, async (req, res) =>{

    res.send ('ok')
});

app.get(`${BASE_URL}/:id`, async (req, res) =>{
    res.send ('ok')
});

app.post(`${BASE_URL}`, async (req, res) =>{
    res.send('ok')
});

app.patch(`${BASE_URL}/:id`, async (req, res) =>{
    res.send('ok')
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    res.send('ok');
});



module.exports = app;