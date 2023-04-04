CREATE TABLE tb_carrinho (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    produto_id VARCHAR (255) NOT NULL,
    marca_id VARCHAR (255) NOT NULL,
    cor VARCHAR (20) NOT NULL,
    tamanho VARCHAR (20) NOT NULL,
    quantidade VARCHAR (255) NOT NULL,
    valor VARCHAR (255) NOT NULL,
    total VARCHAR (255) NOT NULL
);