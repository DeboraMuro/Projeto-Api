CREATE TABLE tb_produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(255),
    cor VARCHAR (30) NOT NULL,
    quantidade INT NOT NULL,
    referencia INT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    valor VARCHAR(10) NOT NULL
);

ALTER TABLE tb_produto ADD tamanho_id INT NOT NULL;

ALTER TABLE tb_produto ADD marca_id INT NOT NULL;

ALTER TABLE tb_produto ADD CONSTRAINT tamanho_id FOREIGN KEY (tamanho_id) REFERENCES tb_tamanho(id);

ALTER TABLE tb_produto ADD CONSTRAINT marca_id FOREIGN KEY (marca_id) REFERENCES tb_marca(id);
