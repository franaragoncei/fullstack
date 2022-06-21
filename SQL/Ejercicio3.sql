create database ejercicio3;
use ejercicio3;

create table fabricante(
	codigo INT auto_increment PRIMARY KEY,
    nombre VARCHAR (100)
);

INSERT INTO fabricante VALUES(1, 'Asus');
INSERT INTO fabricante VALUES(2, 'Lenovo');
INSERT INTO fabricante VALUES(3, 'Hewlett-Packard');
INSERT INTO fabricante VALUES(4, 'Samsung');
INSERT INTO fabricante VALUES(5, 'Seagate');
INSERT INTO fabricante VALUES(6, 'Crucial');
INSERT INTO fabricante VALUES(7, 'Gigabyte');
INSERT INTO fabricante VALUES(8, 'Huawei');
INSERT INTO fabricante VALUES(9, 'Xiaomi');

create table producto(
	codigo INT auto_increment PRIMARY KEY,
    nombre VARCHAR(100),
    precio DOUBLE,
    codigo_fabricante INT,
    foreign key (codigo_fabricante) references fabricante(codigo)
);

INSERT INTO producto VALUES(1, 'Disco duro SATA3 1TB', 86.99, 5);
INSERT INTO producto VALUES(12, 'Disco duro SATA3 1TB', 86.99, null);
INSERT INTO producto VALUES(2, 'Memoria RAM DDR4 8GB', 120, 6);
INSERT INTO producto VALUES(3, 'Disco SSD 1 TB', 150.99, 4);
INSERT INTO producto VALUES(4, 'GeForce GTX 1050Ti', 185, 7);
INSERT INTO producto VALUES(5, 'GeForce GTX 1080 Xtreme', 755, 6);
INSERT INTO producto VALUES(6, 'Monitor 24 LED Full HD', 202, 1);
INSERT INTO producto VALUES(7, 'Monitor 27 LED Full HD', 245.99, 1);
INSERT INTO producto VALUES(8, 'Portátil Yoga 520', 559, 2);
INSERT INTO producto VALUES(9, 'Portátil Ideapd 320', 444, 2);
INSERT INTO producto VALUES(10, 'Impresora HP Deskjet 3720', 59.99, 3);
INSERT INTO producto VALUES(11, 'Impresora HP Laserjet Pro M26nw', 180, 3);

-- Lista el nombre de todos los productos que hay en la tabla producto.
select nombre
from producto;
-- Lista los nombres y los precios de todos los productos de la tabla producto.
select nombre, precio
from producto;
-- Lista todas las columnas de la tabla producto.
select *
from producto;
-- Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD).
select nombre as nombre_producto, precio as precio_euros, precio*1.07 as precio_dolares
from producto;
-- Lista el nombre de los productos, el precio en euros y el precio en dólares estadounidenses (USD). Utiliza los siguientes alias para las columnas: nombre de producto, euros, dólares.
select nombre as 'Nombre de Producto', precio as precio_euros, precio*1.07 as precio_dolares
from producto;
-- Lista los nombres y los precios de todos los productos de la tabla producto, convirtiendo los nombres a mayúscula.
select upper(nombre), precio
from producto;
-- Lista los nombres y los precios de todos los productos de la tabla producto, convirtiendo los nombres a minúscula.
select lower(nombre), precio
from producto;
-- Lista el nombre de todos los fabricantes en una columna, y en otra columna obtenga en mayúsculas los dos primeros caracteres del nombre del fabricante.
select nombre, upper(substring(nombre, 1, 2))
from fabricante;
-- Lista los nombres y los precios de todos los productos de la tabla producto, redondeando el valor del precio.
select nombre, round(precio, 0)
from producto;
-- Lista los nombres y los precios de todos los productos de la tabla producto, truncando el valor del precio para mostrarlo sin ninguna cifra decimal.
select nombre, truncate(precio, 0)
from producto;
-- Lista el código de los fabricantes que tienen productos en la tabla producto.
select codigo_fabricante
from producto;
-- Lista el código de los fabricantes que tienen productos en la tabla producto, eliminando los códigos que aparecen repetidos.
select distinct(codigo_fabricante)
from producto;
-- Lista los nombres de los fabricantes ordenados de forma ascendente.
select nombre
from fabricante 
order by nombre;
-- Lista los nombres de los fabricantes ordenados de forma descendente.
select nombre
from fabricante 
order by nombre desc;
-- Lista los nombres de los productos ordenados en primer lugar por el nombre de forma ascendente y en segundo lugar por el precio de forma descendente.
select nombre, precio
from producto
order by nombre asc, precio desc;
-- Devuelve una lista con las 5 primeras filas de la tabla fabricante.
select * 
from fabricante
limit 5;
-- Devuelve una lista con 2 filas a partir de la cuarta fila de la tabla fabricante. La cuarta fila también se debe incluir en la respuesta.
select *
from fabricante
where codigo between 4 and 5;
-- Lista el nombre y el precio del producto más barato. (Utilice solamente las cláusulas ORDER BY y LIMIT)
select nombre, precio
from producto
order by precio
limit 1;
-- Lista el nombre y el precio del producto más caro. (Utilice solamente las cláusulas ORDER BY y LIMIT)
select nombre, precio
from producto
order by precio desc
limit 1;
-- Lista el nombre de todos los productos del fabricante cuyo código de fabricante es igual a 2.
select nombre
from producto
where codigo_fabricante = 2;
-- Lista el nombre de los productos que tienen un precio menor o igual a 120€.
select nombre
from producto
where precio <= 120;
-- Lista el nombre de los productos que tienen un precio mayor o igual a 400€.
select nombre
from producto
where precio <= 400;
-- Lista el nombre de los productos que no tienen un precio mayor o igual a 400€.
select nombre
from producto
where precio < 400;
-- Lista todos los productos que tengan un precio entre 80€ y 300€. Sin utilizar el operador BETWEEN.
select nombre
from producto
where precio > 80 and precio < 300;
-- Lista todos los productos que tengan un precio entre 60€ y 200€. Utilizando el operador BETWEEN.
select nombre
from producto
where precio between 60 and 200;
-- Lista todos los productos que tengan un precio mayor que 200€ y que el código de fabricante sea igual a 6.
select nombre
from producto
where precio > 200 and codigo_fabricante = 6;
-- Lista todos los productos donde el código de fabricante sea 1, 3 o 5. Sin utilizar el operador IN.
select *
from producto
where codigo_fabricante = 1 OR codigo_fabricante = 3 OR codigo_fabricante = 5;
-- Lista todos los productos donde el código de fabricante sea 1, 3 o 5. Utilizando el operador IN.
select *
from producto
where codigo_fabricante IN (1, 3, 5);
-- Lista el nombre y el precio de los productos en céntimos (Habrá que multiplicar por 100 el valor del precio). Cree un alias para la columna que contiene el precio que se llame céntimos.
select nombre, precio * 100 as 'centimos'
from producto;
-- Lista los nombres de los fabricantes cuyo nombre empiece por la letra S.
select nombre
from fabricante
where nombre LIKE 's%';
-- Lista los nombres de los fabricantes cuyo nombre termine por la vocal e.
select nombre
from fabricante
where nombre LIKE '%e';
-- Lista los nombres de los fabricantes cuyo nombre contenga el carácter w.
select nombre
from fabricante
where nombre LIKE '%w%';
-- Lista los nombres de los fabricantes cuyo nombre sea de 4 caracteres.
select nombre
from fabricante
where length(nombre) = 4;
-- Devuelve una lista con el nombre de todos los productos que contienen la cadena 'Portátil' en el nombre.
select nombre
from producto
where nombre LIKE '%portatil%';
-- Devuelve una lista con el nombre de todos los productos que contienen la cadena Monitor en el nombre y tienen un precio inferior a 215 €.
select nombre, precio
from producto
where nombre LIKE '%monitor%' and precio < 215; 
-- Lista el nombre y el precio de todos los productos que tengan un precio mayor o igual a 180€. Ordene el resultado en primer lugar por el precio (en orden descendente) y en segundo lugar por el nombre (en orden ascendente).
select nombre, precio
from producto
where precio >= 180
order by precio desc, nombre asc;
-- MULTITABLA
-- Devuelve una lista con el nombre del producto, precio y nombre de fabricante de todos los productos de la base de datos.
select producto.nombre, producto.precio, fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo;
-- Devuelve una lista con el nombre del producto, precio y nombre de fabricante de todos los productos de la base de datos. Ordene el resultado por el nombre del fabricante, por orden alfabético.
select producto.nombre, producto.precio, fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
order by fabricante.nombre;
-- Devuelve una lista con el código del producto, nombre del producto, código del fabricante y nombre del fabricante, de todos los productos de la base de datos.
select producto.codigo, producto.nombre, fabricante.codigo, fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo;
-- Devuelve el nombre del producto, su precio y el nombre de su fabricante, del producto más barato.
select producto.nombre, producto.precio, fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
order by producto.precio 
limit 1;
-- Devuelve el nombre del producto, su precio y el nombre de su fabricante, del producto más caro.
select producto.nombre, producto.precio, fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
order by producto.precio desc
limit 1;
-- Devuelve una lista de todos los productos del fabricante Lenovo.
select producto.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
where fabricante.nombre = 'lenovo';
-- Devuelve una lista de todos los productos del fabricante Crucial que tengan un precio mayor que 200€.
select producto.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
where fabricante.nombre = 'crucial' and producto.precio > 200;
-- Devuelve un listado con todos los productos de los fabricantes Asus, Hewlett-Packard y Seagate. Sin utilizar el operador IN.
select producto.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
where fabricante.nombre = 'asus' or fabricante.nombre = 'Hewlett-Packard' or fabricante.nombre = 'seagate';
-- Devuelve un listado con todos los productos de los fabricantes Asus, Hewlett-Packard y Seagate. Utilizando el operador IN.
select producto.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
where fabricante.nombre IN ('asus', 'Hewlett-Packard', 'seagate');
-- Devuelve un listado con el nombre y el precio de todos los productos de los fabricantes cuyo nombre termine por la vocal e.
select producto.nombre, producto.precio , fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
where fabricante.nombre LIKE '%e';
-- Devuelve un listado con el nombre y el precio de todos los productos cuyo nombre de fabricante contenga el carácter w en su nombre.
select producto.nombre, producto.precio , fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
where fabricante.nombre LIKE '%w%';
-- Devuelve un listado con el nombre de producto, precio y nombre de fabricante, de todos los productos que tengan un precio mayor o igual a 180€. Ordene el resultado en primer lugar por el precio (en orden descendente) y en segundo lugar por el nombre (en orden ascendente)
select producto.nombre, producto.precio , fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo
where producto.precio >= 180
order by precio desc, producto.nombre asc;
-- Devuelve un listado con el código y el nombre de fabricante, solamente de aquellos fabricantes que tienen productos asociados en la base de datos.
select fabricante.codigo, fabricante.nombre
from producto join fabricante
on producto.codigo_fabricante = fabricante.codigo;
-- Devuelve un listado de todos los fabricantes que existen en la base de datos, junto con los productos que tiene cada uno de ellos. El listado deberá mostrar también aquellos fabricantes que no tienen productos asociados.
select fabricante.nombre, producto.nombre
from fabricante left join producto
on fabricante.codigo = producto.codigo_fabricante;
-- Devuelve un listado donde sólo aparezcan aquellos fabricantes que no tienen ningún producto asociado.
select fabricante.nombre, producto.nombre
from fabricante left join producto
on fabricante.codigo = producto.codigo_fabricante
where producto.codigo_fabricante is null;
-- ¿Pueden existir productos que no estén relacionados con un fabricante? Justifique su respuesta.
