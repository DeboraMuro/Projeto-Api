const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require('./resources/banner/routes');
const carrinhoRoutes = require('./resources/carrinho/routes');
const marcaRouts = require('./resources/marca/routes');


const app = express();

app.use(express.json()); //a comunicação toda vai ser feita em json, ta ligado!?
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(carrinhoRoutes);
app.use(marcaRouts);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
