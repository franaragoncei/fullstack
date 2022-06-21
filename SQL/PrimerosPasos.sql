CREATE DATABASE fullstack;

USE fullstack;

SHOW TABLES;
/*
COMENTARIO DE 
MUCHAS
LINEAS
*/

-- COMENTARIO DE UNA LÍNEA


CREATE TABLE alumnos (
	id_alumno INT auto_increment PRIMARY KEY,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    id_alumno_asignatura int,
    FOREIGN KEY (id_alumno_asignatura) REFERENCES asignaturas (id_asignatura)
);

SELECT * FROM alumnos where id_alumno = 4;

CREATE TABLE asignaturas(
	id_asignatura INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30)
);


INSERT INTO asignaturas (nombre) VALUES ('Desarrollo Fullstack');
INSERT INTO asignaturas (nombre) VALUES ('Diseño Web');
INSERT INTO asignaturas (nombre) VALUES ('UX/UI');
INSERT INTO asignaturas (nombre) VALUES ('Marketing Digital');

SELECT * from asignaturas;

INSERT INTO alumnos (nombre, apellido, id_alumno_asignatura) VALUES ('Eduardo', 'Albalat', 1);
INSERT INTO alumnos (nombre, apellido, id_alumno_asignatura) VALUES ('Victor', 'Jácome', 2);
INSERT INTO alumnos (nombre, apellido, id_alumno_asignatura) VALUES ('Alberto', 'Barba', 1);
INSERT INTO alumnos (nombre, apellido, id_alumno_asignatura) VALUES ('Laura', 'Cote', 1);
INSERT INTO alumnos (apellido, nombre, id_alumno_asignatura) VALUES ('aragón', 'Fran', 1);
INSERT INTO alumnos (apellido, nombre, id_alumno_asignatura) VALUES ('Mónica', 'Pérez', 2);

UPDATE alumnos SET nombre='Fran', apellido='Aragon', id_alumno_asignatura= 1 WHERE id_alumno = 3;

DELETE from alumnos WHERE id_alumno = 3;


SELECT alumnos.nombre
FROM alumnos RIGHT JOIN asignaturas
ON alumnos.id_alumno_asignatura = asignaturas.id_asignatura;
