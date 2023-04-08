CREATE TABLE tb_category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (30),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL
);

ALTER TABLE tb_category
MODIFY COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

INSERT INTO tb_category (nome) 
VALUES ("Camisetas");

INSERT INTO tb_category (nome) 
VALUES ("Calças");

INSERT INTO tb_category (nome) 
VALUES ("Bonés");

INSERT INTO tb_category (nome) 
VALUES ("Headphones");

SELECT * FROM tb_category;
