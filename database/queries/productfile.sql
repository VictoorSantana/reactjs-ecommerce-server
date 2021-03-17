CREATE TABLE tb_productfiles ( 
id INT NOT NULL AUTO_INCREMENT, 
id_product INT NOT NULL 
, id_file INT NOT NULL 
, PRIMARY KEY (id));

/* ALTER TABLE */ 

ALTER TABLE tb_productfiles 
ADD COLUMN id_product INT NOT NULL 
, ADD COLUMN id_file INT NOT NULL 
,