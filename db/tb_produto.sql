CREATE TABLE tb_produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(255),
    cor VARCHAR (30) NOT NULL,
    quantidade INT NOT NULL,
    referencia INT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    valor VARCHAR(10) NOT NULL,
    tamanho_id  INT
    FOREIGN KEY (tamanho_id) REFERENCES tb_tamanho(id),
    marca_id INT
    FOREIGN KEY (marca_id) REFERENCES tb_tamanho(id)
);
