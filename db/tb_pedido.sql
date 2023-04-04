CREATE TABLE tb_pedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    cliente_id INT
    valor_pedido VARCHAR (11)
    valor_frete VARCHAR (11)
    cartao VARCHAR (10),
    produto_id INT
)