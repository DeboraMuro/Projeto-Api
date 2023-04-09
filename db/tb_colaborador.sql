CREATE TABLE tb_colaboradores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  ultimo_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ativo BOOLEAN DEFAULT true
);

-- Insere um registro de colaborador
INSERT INTO colaboradores (nome, email, senha) 
VALUES 
  ('João Pedro', 'joaopedro@gmail.com', 'senha123'),
  ('Ariane Maria', 'arianemaria@gmail.com', 'senha456'),
  ('Paulo Coelho', 'paulocoelho@gmail.com', 'senha789');

-- Seleciona todos os colaboradores na tabela
SELECT * FROM colaboradores;

-- Seleciona o nome e o email de todos os colaboradores ativos
SELECT nome, email FROM colaboradores WHERE ativo = true;

-- Atualiza o email e a senha de um colaborador específico
UPDATE colaboradores SET email = 'novoemail@gmail.com', senha = 'novasenha123' WHERE id = 1;

-- Exclui um colaborador específico
DELETE FROM colaboradores WHERE id = 3;

-- Exclui todos os colaboradores inativos
DELETE FROM colaboradores WHERE ativo = false;

-- Adiciona uma nova coluna "cargo" à tabela
ALTER TABLE colaboradores ADD COLUMN cargo VARCHAR(50);

-- Modifica o tipo de dados da coluna "email" para VARCHAR(100)
ALTER TABLE colaboradores ALTER COLUMN email TYPE VARCHAR(100);

-- Exclui a coluna "cargo" da tabela
ALTER TABLE colaboradores DROP COLUMN cargo;


