CREATE TABLE tb_folders ( 
id INT NOT NULL AUTO_INCREMENT, 
title VARCHAR(40) NOT NULL 
,description VARCHAR(100) NULL 
,id_folder INT NOT NULL 
, PRIMARY KEY (id));ALTER TABLE tb_folders 
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE tb_folders 
ADD COLUMN title VARCHAR(40) NOT NULL 
,ADD COLUMN description VARCHAR(100) NULL 
,ADD COLUMN id_folder INT NOT NULL 
,