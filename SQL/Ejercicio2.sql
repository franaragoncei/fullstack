CREATE DATABASE ejercicio2;

use ejercicio2;

CREATE TABLE comercial(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido1 VARCHAR(100),
    apellido2 VARCHAR(100),
    ciudad VARCHAR(100),
    comision FLOAT
);

CREATE TABLE cliente(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido1 VARCHAR(100),
    apellido2 VARCHAR(100),
    ciudad VARCHAR(100),
    categoria INT
);

CREATE TABLE pedido(
	id INT AUTO_INCREMENT PRIMARY KEY,
    cantidad DOUBLE,
    fecha DATE,
    id_cliente INT,
    id_comercial INT,
    FOREIGN KEY (id_cliente) references cliente (id),
	FOREIGN KEY (id_comercial) references comercial (id)
);

INSERT INTO comercial VALUES(1, 'Daniel', 'Sáez', 'Vega', 'Estepona', 0.15);
INSERT INTO comercial VALUES(2, 'Juan', 'Gómez', 'López', 'Estepona', 0.13);
INSERT INTO comercial VALUES(3, 'Diego','Flores', 'Salas', 'Estepona', 0.11);
INSERT INTO comercial VALUES(4, 'Marta','Herrera', 'Gil', 'Estepona', 0.14);
INSERT INTO comercial VALUES(5, 'Antonio','Carretero', 'Ortega', 'Estepona', 0.12);
INSERT INTO comercial VALUES(6, 'Manuel','Domínguez', 'Hernández', 'Estepona', 0.13);
INSERT INTO comercial VALUES(7, 'Antonio','Vega', 'Hernández', 'Estepona', 0.11);
INSERT INTO comercial VALUES(8, 'Alfredo','Ruiz', 'Flores', 'Estepona', 0.05);


INSERT INTO cliente VALUES(1, 'Aarón', 'Rivero', 'Gómez', 'Almería', 100);
INSERT INTO cliente VALUES(2, 'Adela', 'Salas', 'Díaz', 'Granada', 200);
INSERT INTO cliente VALUES(3, 'Adolfo', 'Rubio', 'Flores', 'Sevilla', NULL);
INSERT INTO cliente VALUES(4, 'Adrián', 'Suárez', NULL, 'Jaén', 300);
INSERT INTO cliente VALUES(5, 'Marcos', 'Loyola', 'Méndez', 'Almería', 200);
INSERT INTO cliente VALUES(6, 'María', 'Santana', 'Moreno', 'Cádiz', 100);
INSERT INTO cliente VALUES(7, 'Pilar', 'Ruiz', NULL, 'Sevilla', 300);
INSERT INTO cliente VALUES(8, 'Pepe', 'Ruiz', 'Santana', 'Huelva', 200);
INSERT INTO cliente VALUES(9, 'Guillermo', 'López', 'Gómez', 'Granada', 225);
INSERT INTO cliente VALUES(10, 'Daniel', 'Santana', 'Loyola', 'Sevilla', 125);

INSERT INTO pedido VALUES(1, 150.5, '2017-10-05', 5, 2);
INSERT INTO pedido VALUES(2, 270.65, '2016-09-10', 1, 5);
INSERT INTO pedido VALUES(3, 65.26, '2017-10-05', 2, 1);
INSERT INTO pedido VALUES(4, 110.5, '2016-08-17', 8, 3);
INSERT INTO pedido VALUES(5, 948.5, '2017-09-10', 5, 2);
INSERT INTO pedido VALUES(6, 2400.6, '2016-07-27', 7, 1);
INSERT INTO pedido VALUES(7, 5760, '2015-09-10', 2, 1);
INSERT INTO pedido VALUES(8, 1983.43, '2017-10-10', 4, 6);
INSERT INTO pedido VALUES(9, 2480.4, '2016-10-10', 8, 3);
INSERT INTO pedido VALUES(10, 250.45, '2015-06-27', 8, 2);
INSERT INTO pedido VALUES(11, 75.29, '2016-08-17', 3, 7);
INSERT INTO pedido VALUES(12, 3045.6, '2017-04-25', 2, 1);
INSERT INTO pedido VALUES(13, 545.75, '2019-01-25', 6, 1);
INSERT INTO pedido VALUES(14, 145.82, '2017-02-02', 6, 1);
INSERT INTO pedido VALUES(15, 370.85, '2019-03-11', 1, 5);
INSERT INTO pedido VALUES(16, 2389.23, '2019-03-11', 1, 5);


/* CONSULTAS SOBRE UNA TABLA*/
-- 1. Devuelve un listado con todos los pedidos que se han realizado. Los pedidos deben estar ordenados por la fecha de realización, mostrando en primer lugar los pedidos más recientes.
select * from pedido order by fecha desc;
-- 2. Devuelve todos los datos de los dos pedidos de mayor valor.
select * from pedido order by cantidad desc limit 2;
-- 3. Devuelve un listado con los identificadores de los clientes que han realizado
-- algún pedido. Tenga en cuenta que no debe mostrar identificadores que estén
-- repetidos.
select distinct(id_cliente) from pedido;
-- 4. Devuelve un listado de todos los pedidos que se realizaron durante el año
-- 2017, cuya cantidad total sea superior a 500€.
select * from pedido where fecha between '2017-01-01' AND '2017-12-31' AND cantidad > 500;
select * from pedido where year(fecha) = 2017 AND cantidad > 500;
-- 5. Devuelve un listado con el nombre y los apellidos de los comerciales que
-- tienen una comisión entre 0.05 y 0.11.
select nombre, apellido1, apellido2
from comercial
where comision between 0.05 and 0.11;
-- 6. Devuelve el valor de la comisión de mayor valor que existe en la tabla
-- comercial.
select comision from comercial order by comision DESC limit 1;
select max(comision) from comercial;
-- 7. Devuelve el identificador, nombre y primer apellido de aquellos clientes cuyo
-- segundo apellido no es NULL. El listado deberá estar ordenado
-- alfabéticamente por nombre.
select id, nombre, apellido1, apellido2 from cliente where apellido2 is not null order by nombre;
select id, nombre, apellido1, apellido2 from cliente where apellido2 != 'null' order by nombre;
-- 8. Devuelve un listado de los nombres de los clientes que empiezan por A y
-- terminan por n. El listado deberá estar ordenado alfabéticamente.
select nombre from cliente where nombre LIKE 'a%n' order by nombre;
-- 9. Devuelve un listado de los nombres de los clientes que no empiezan por A. El
-- listado deberá estar ordenado alfabéticamente.
select nombre from cliente where nombre NOT LIKE 'a%' order by nombre;
-- 10.Devuelve un listado con los nombres de los comerciales que terminan por 'el' U 'o'. Tenga en cuenta que se deberán eliminar los nombres repetidos.
select distinct(nombre) from comercial where nombre LIKE '%el' OR nombre like '%o';


-- CONSULTAS SOBRE VARIAS TABLAS
-- 1. Devuelve un listado con el identificador, nombre y los apellidos de todos los clientes que han realizado algún pedido. El listado debe estar ordenado alfabéticamente y se deben eliminar los elementos repetidos.
select distinct(cliente.id), cliente.nombre, cliente.apellido1, cliente.apellido2
from cliente join pedido
on cliente.id = pedido.id_cliente
order by cliente.nombre;
-- 2. Devuelve un listado que muestre todos los pedidos que ha realizado cada cliente. El resultado debe mostrar todos los datos de los pedidos y del cliente. El listado debe mostrar los datos de los clientes ordenados alfabéticamente.
select * 
from pedido join cliente 
on pedido.id_cliente = cliente.id
order by cliente.nombre;
-- 3. Devuelve un listado que muestre todos los pedidos en los que ha participado un comercial. El resultado debe mostrar todos los datos de los pedidos y de los comerciales. El listado debe mostrar los datos de los comerciales ordenados alfabéticamente.
select *
from pedido join comercial
on pedido.id_comercial = comercial.id
order by comercial.nombre;
-- 4. Devuelve un listado que muestre todos los clientes, con todos los pedidos que han realizado y con los datos de los comerciales asociados a cada pedido.
select * 
from cliente join pedido
on cliente.id = pedido.id_cliente
join comercial
on pedido.id_comercial = comercial.id;
-- 5. Devuelve un listado de todos los clientes que realizaron un pedido durante el año 2017, cuya cantidad esté entre 300 € y 1000 €.
select * 
from cliente join pedido
on cliente.id = pedido.id_cliente
where year(fecha) = 2017 and pedido.cantidad BETWEEN 300 and 1000;
-- 6. Devuelve el nombre y los apellidos de todos los comerciales que han participado en algún pedido realizado por María Santana Moreno.
select comercial.nombre, comercial.apellido1, comercial.apellido2
from comercial join pedido
on comercial.id = pedido.id_comercial
join cliente
on pedido.id_cliente = cliente.id
where cliente.nombre = 'Maria' and cliente.apellido1 = 'Santana' and cliente.apellido2 = 'Moreno';
-- 7. Devuelve el nombre de todos los clientes que han realizado algún pedido con el comercial Daniel Sáez Vega.
select cliente.nombre
from cliente join pedido
on cliente.id = pedido.id_cliente
join comercial on pedido.id_comercial = comercial.id
where comercial.nombre = 'Daniel' and comercial.apellido1 = 'Saez' and comercial.apellido2 = 'Vega';
-- MULTITABLA. Resuelva todas las consultas utilizando las cláusulas LEFT JOIN y RIGHT JOIN.
-- 1. Devuelve un listado con todos los clientes junto con los datos de los pedidos que han realizado. Este listado también debe incluir los clientes que no han realizado ningún pedido. El listado debe estar ordenado alfabéticamente por el primer apellido.
select *
from cliente left join pedido
on cliente.id = pedido.id_cliente
order by cliente.apellido1;
-- 2. Devuelve un listado con todos los comerciales junto con los datos de los pedidos que han realizado. Este listado también debe incluir los comerciales que no han realizado ningún pedido. El listado debe estar ordenado alfabéticamente por el primer apellido, segundo apellido y nombre de los comerciales.
select *
from pedido right join comercial
on pedido.id_comercial = comercial.id
order by comercial.apellido1;
-- 3. Devuelve un listado que solamente muestre los clientes que no han realizado ningún pedido.
select * 
from cliente left join pedido
on cliente.id = pedido.id_cliente
where pedido.id_cliente is null;
-- 4. Devuelve un listado que solamente muestre los comerciales que no han realizado ningún pedido.
select * 
from pedido right join comercial
on pedido.id_comercial = comercial.id
where pedido.id_comercial is null;
-- CONSULTAS RESUMEN
-- 1. Calcula la cantidad total que suman todos los pedidos que aparecen en la tabla pedido.
select sum(cantidad)
from pedido;
-- 2. Calcula la cantidad media de todos los pedidos que aparecen en la tabla pedido.
select avg(cantidad)
from pedido;
-- 3. Calcula el número total de comerciales distintos que aparecen en la tabla pedido.
select count(distinct(id_comercial))
from pedido;
-- 4. Calcula el número total de clientes que aparecen en la tabla cliente.
select count(id)
from cliente;
-- 5. Calcula cuál es la mayor cantidad que aparece en la tabla pedido.
select cantidad 
from pedido
order by cantidad desc limit 1;

select max(cantidad) 
from pedido;
-- 6. Calcula cuál es la menor cantidad que aparece en la tabla pedido.
select min(cantidad)
from pedido;
-- 7. Calcula cuál es el máximo valor de los pedidos realizados durante el mismo
-- día para cada uno de los clientes, teniendo en cuenta que sólo queremos mostrar aquellos pedidos que superen la cantidad de 2000 €.
select max(cantidad), fecha
from pedido
where cantidad > 2000
group by fecha
order by fecha;










