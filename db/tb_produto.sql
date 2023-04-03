CREATE TABLE tb_produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(255),
    cor VARCHAR (30) NOT NULL,
    quantidade INT NOT NULL,
    referencia INT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    valor VARCHAR(10) NOT NULL,
    tamanho_id INT NOT NULL,
    marca_id INT NOT NULL
);
