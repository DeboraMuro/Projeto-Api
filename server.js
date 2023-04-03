const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require('./resources/banner/routes');
const enderecoRoutes = require('./resources/endereco/routes');
const produtoRoutes = require('./resources/produto/routes');
const tamanhoRoutes = require('./resources/tamanho/routes');


const app = express();

app.use(express.json()); //a comunicação toda vai ser feita em json, ta ligado!?
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(enderecoRoutes);
app.use(produtoRoutes);
app.use(tamanhoRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
