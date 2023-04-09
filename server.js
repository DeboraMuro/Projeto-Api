
const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require('./resources/banner/routes');
const enderecoRoutes = require('./resources/endereco/routes');
const produtoRoutes = require('./resources/produto/routes');
const tamanhoRoutes = require('./resources/tamanho/routes');
const colecoesRoutes = require ( "./resources/colecoes_destaque/routes");
const carrinhoRoutes = require('./resources/carrinho/routes');
const marcaRoutes = require('./resources/marca/routes');
const cupomRoutes = require('./resources/cupom/routes');
const clienteRoutes = require('./resources/cliente/routes')

const app = express();
const cors = require ('cors');
const swagger = require('swagger-ui-express');
const docs = require('./docs.json');

app.use (cors());
app.use('/documentacao', swagger.serve, swagger.setup(docs));

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(enderecoRoutes);
app.use(produtoRoutes);
app.use(tamanhoRoutes);
app.use(colecoesRoutes);
app.use(carrinhoRoutes);
app.use(marcaRoutes);
app.use(cupomRoutes);
app.use(clienteRoutes)

app.listen(8000, () => {
    console.log('--------------');
    console.log('----PRONTO----');
    console.log('--------------');
});
