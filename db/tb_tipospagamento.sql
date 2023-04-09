CREATE TABLE tipos_pagamento (
  id INT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  descricao VARCHAR(255),
  ativo BOOLEAN NOT NULL,
  desconto DECIMAL(10,2),
  prazo_processamento INT,
  informacoes_adicionais TEXT
);

INSERT INTO tipos_pagamento (id, nome, descricao, ativo, desconto, prazo_processamento, informacoes_adicionais)
VALUES
(1, 'Cartão de Crédito', 'Pagamento por cartão de crédito', true, 0.0, 1, 'Aceitamos os cartões Visa, Mastercard e American Express. O pagamento é processado imediatamente.'),
(2, 'Boleto Bancário', 'Pagamento por boleto bancário', true, 0.0, 2, 'O boleto é gerado automaticamente e deve ser pago até a data de vencimento. O pagamento pode levar até 2 dias úteis para ser processado.'),
(3, 'Transferência Bancária', 'Pagamento por transferência bancária', false, 0.0, 3, 'Entre em contato com nosso suporte para obter as informações da conta bancária para a transferência. O pagamento pode levar até 3 dias úteis para ser processado.'),
(4, 'Pix', 'Pagamento por Pix', true, 10.0, 0, 'O código Pix será gerado automaticamente após a finalização da compra. O desconto de 10% será aplicado automaticamente ao valor total da compra. O pagamento é processado imediatamente.')

SELECT * FROM tipos_pagamento;

-- Para selecionar apenas os tipos de pagamento ativos:
SELECT * FROM tipos_pagamento WHERE ativo = true;

-- Para selecionar apenas os tipos de pagamento que oferecem desconto:
SELECT * FROM tipos_pagamento WHERE desconto > 0;

-- Para atualizar as informações de um tipo de pagamento existente, por exemplo, alterando sua descrição:
UPDATE tipos_pagamento SET descricao = 'Pagamento por boleto bancário (vencimento em 5 dias)' WHERE id = 2;

-- Para excluir um tipo de pagamento existente:
DELETE FROM tipos_pagamento WHERE id = 3;
