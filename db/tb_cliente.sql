CREATE TABLE clientes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(255),
    cidade VARCHAR(100),
    estado CHAR(2),
    cep VARCHAR(10),
    data_cadastro DATETIME NOT NULL,
    PRIMARY KEY (id)
);



INSERT INTO clientes (nome, email, telefone, endereco, cidade, estado, cep, data_cadastro)
VALUES ('Luiza Oliveira', 'luizaoliveira@email.com', '(85) 99123-4567', 
        'Rua Cônego de Castro - bairro Parque Santa Maria', 'Fortaleza', 'Ce', '12345-678', '2022-03-14 15:02:00'),
        ('Rafael Santos', 'rafaelsantos@email.com', '(85) 98123-4567', 
        'Rua Mirasselva - bairro Bom Jardim', 'Fortaleza', 'Ce', '12345-678', '2022-05-12 18:15:00'),
        ('Juliana Pereira', 'julianapereira@email.com', '(85) 97123-4567', 
        'Rua Arapari - bairro Conjunto Palmeiras', 'Fortaleza', 'Ce', '12345-678', '2022-10-31 11:27:00'),
        ('Pedro Silva', 'pedrosilva@email.com', '(85) 96123-4567', 
        'Rua Professor Jacinto Botelho - bairro Granja Portugal', 'Fortaleza', 'Ce', '12345-678', '2022-03-12 07:56:00'),
        ('Bianca Costa', 'biancacosta@email.com', '(85) 94123-4567', 
        'Rua dos Carcarás - bairro Jardim Iracema', 'Fortaleza', 'Ce', '12345-678', '2022-06-03 21:45:00');


SELECT * FROM tb_cliente;

UPDATE tb_cliente SET idade =  WHERE nome = '';

DELETE FROM tb_cliente WHERE nome = '';
