CREATE TABLE fabricante (
	codigo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE producto(
	codigo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DOUBLE,
    codigo_fabricante INT,
    FOREIGN KEY (codigo_fabricante) REFERENCES fabricante (codigo)
);