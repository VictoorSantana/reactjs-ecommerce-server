



-- 11
-- tb_x(id_tb_y)
-- tb_y
-- Criar um combo box selecionando a chave da outra tabela
SELECT tb_x.*, tb_y.* FROM tb_x 
LEFT JOIN tb_y ON tb_y.id = tb_x.id_tb_y;

-- 1N
-- tb_x
-- tb_y (id_tb_x)
-- Criar uma grid que faz select na tabela filha
SELECT tb_y.* FROM tb_y 
WHERE tb_y.id_tb_x = 1;

-- NN
-- tb_x
-- tb_y(id_tb_x)(id_tb_z)
-- tb_z
-- Criar uma grid que faz select e lista na tabela de interseção
-- Lembrando que a tabela de interseção deve aparecer em nenhum momento
SELECT tb_z.* FROM tb_y 
LEFT JOIN tb_z ON tb_z.id = tb_y.id_tb_z
WHERE tb_y.id_tb_x = 1;


-- Fonte: https://www.devmedia.com.br/modelagem-1-n-ou-n-n/38894

