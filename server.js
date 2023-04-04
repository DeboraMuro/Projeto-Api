const express = require ('express');
const categoryRoutes = require ("./resources/category/routes");
const bannerRoutes = require ("./resources/banner/routes");
const colecoesRoutes = require ( "./resources/colecoes_destaque/routes")
const app = express();
const cors= require ('cors');

app.use (cors());

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(colecoesRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('----PRONTO----');
    console.log('--------------');
});