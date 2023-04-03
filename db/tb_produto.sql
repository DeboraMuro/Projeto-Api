CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    descricao VARCHAR(255),
    cor VARCHAR (30),
    quantidade INT,
    referencia INT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    valor VARCHAR(10),
    tamanho_id INT,
    marca_id INT
    -- titulo VARCHAR (50) NOT NULL,
    -- descricao VARCHAR (255),
    -- imagem VARCHAR(255) NOT NULL
);

COMPLETAR TABELA