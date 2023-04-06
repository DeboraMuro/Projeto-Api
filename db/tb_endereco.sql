CREATE TABLE tb_endereco (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(60),
    bairro VARCHAR(20) NOT NULL,
    cidade VARCHAR(20) NOT NULL,
    cep INT NOT NULL,
    estado VARCHAR(20) NOT NULL,
    cliente_id  INT
    FOREIGN KEY (cliente_id) REFERENCES tb_cliente(id),
);

-- INSERT INTO tb_endereco (logradouro, numero, complemento, bairro, cidade, cep, estado)
-- VALUES ('av Rua Padre Roma', 1150, 'casa', 'fatima', 'fortaleza', 60040360, 'CE')

-- acrescentar no insomnia