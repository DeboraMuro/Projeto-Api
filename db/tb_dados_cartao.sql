CREATE TABLE tb_dados_cartao (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    numero_cartao INT NOT NULL,
    validade VARCHAR (7) NOT NULL,
    CVV CHAR (3),
    titular VARCHAR (50) NOT NULL,
    cliente_id INT 
);

ALTER TABLE tb_dados_cartao MODIFY COLUMN numero_cartao VARCHAR (20) NOT NULL;

INSERT INTO tb_dados_cartao (numero_cartao , validade, CVV, titular, cliente_id) VALUES ('1234 1234 1234 1234', '12/26', '123', 
'MARIA DAS GRAÇAS','1');

INSERT INTO tb_dados_cartao (numero_cartao , validade, CVV, titular, cliente_id) VALUES ('2345 1234 7895 1234', '02/26', '321', 
 'JOSE LUIZ OLIVEIRA', '3');

INSERT INTO tb_dados_cartao (numero_cartao , validade, CVV, titular, cliente_id) VALUES ('4321 4321 4321 4321', '05/24', '546', 
 'PEDRO PAULO GOMES', '2');

ALTER TABLE tb_dados_cartao MODIFY COLUMN validade VARCHAR (20) NOT NULL;

ALTER TABLE tb_dados_cartao MODIFY COLUMN CVV INT NOT NULL;
