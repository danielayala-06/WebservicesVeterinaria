CREATE DATABASE veterinaria;

USE veterinaria;

CREATE TABLE mascotas(
id INT primary KEY	auto_increment NOT null,
nombre VARCHAR(40) NOT NULL,
tipo ENUM('PERRO', 'GATO') NOT NULL,
raza VARCHAR(40) NOT NULL,
color VARCHAR(40) NOT NULL,
peso DOUBLE(5,2) NOT NULL,
genero ENUM('H','M') NOT NULL
)ENGINE = INNODB;

INSERT INTO mascotas(nombre, tipo, raza, color, peso, genero) VALUES(
'Ruffus','PERRO', 'salchicha', 'marron', 31.02, 'M'
);


SELECT * FROM mascotas;
