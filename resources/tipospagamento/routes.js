const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'db_digital_store'
});

// Conexão com o banco de dados
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Habilita o CORS
app.use(cors());

// Rota para retornar todos os tipos de pagamento ativos
app.get('/tipos_pagamento', (req, res) => {
    const sql = 'SELECT * FROM tipos_pagamento WHERE ativo = true';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

// Inicia o servidor na porta 8000
app.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000');
});

module.exports = app;