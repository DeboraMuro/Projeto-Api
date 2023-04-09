CREATE TABLE tb_endereco (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(50) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(60),
    bairro VARCHAR(20) NOT NULL,
    cidade VARCHAR(20) NOT NULL,
    cep INT NOT NULL,
    estado VARCHAR(20) NOT NULL
);

ALTER TABLE tb_endereco ADD cliente_id INT NOT NULL;

ALTER TABLE tb_endereco ADD CONSTRAINT cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(id);
