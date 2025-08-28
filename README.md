# Procedimientos a realizar

1. Crear la BD y tabla

```sql
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
```
2. Abrir VSCode y seleccionar una carpeta (proyecto)
3. Ejecutar el siguiente comando (debe tener instalado NodeJS):
```
npm init -y
```
Ahora ya tenemos un proyecto para el entorno NodeJS

4. Instalar las dependencias
```
npm install express mysql2 dotenv
```

5. Crear un archivo .env en la raiz del proyecto y agregar:
```
DB_HOST = localhost
DB_USER = root
DB_PASSWORD =
DB_DATABASE =
DB_PORT = 3306
PORT = 3000
```

6. Desarrollo db.js > app.js
7. Instalaremos un módulo adicional "nodemon" para actualización automatica
```
node install nodemon -g
```

8. Ejecuta el proyecto escribiendo
```
nodemon app.js
```