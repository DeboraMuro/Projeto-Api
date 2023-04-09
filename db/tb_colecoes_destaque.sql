CREATE TABLE tb_colecoes_destaque(
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (50) NOT NULL,
    desconto VARCHAR(10) NOT NULL,
    imagem VARCHAR (255) NOT NULL
);

INSERT INTO tb_colecoes_destaque (titulo, desconto, imagem) VALUES ('Coleção Adidas' , '30%OFF', 'imagem');

INSERT INTO tb_colecoes_destaque (titulo, desconto, imagem) VALUES ('Novo Drop Supreme' , '30%OFF', 'imagem');

INSERT INTO tb_colecoes_destaque (titulo, desconto, imagem) VALUES ('Novo Beats Bass' , '30%OFF', 'imagem');