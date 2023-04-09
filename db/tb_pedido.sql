CREATE TABLE tb_pedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cliente_id INT,
    valor_pedido VARCHAR (11),
    valor_frete VARCHAR (11),
    cartao VARCHAR (11),
    produto_id INT NOT NULL
);

INSERT INTO tb_pedido (cliente_id, valor_pedido, valor_frete, cartao, produto_id) VALUES ('1', 'R$200,00', 'R$14,90','Mastecard', '2');

INSERT INTO tb_pedido (cliente_id, valor_pedido, valor_frete, cartao, produto_id) VALUES ('2', 'R$499,99', 'R$25,90','Credcard', '1');

INSERT INTO tb_pedido (cliente_id, valor_pedido, valor_frete, cartao, produto_id) VALUES ('3', 'R$599,90', 'R$19,90','Elo', '3');