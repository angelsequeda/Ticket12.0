CREATE DATABASE PRESUPUESTOS
USE PRESUPUESTOS
CREATE TABLE USUARIOS(ID INT IDENTITY(1,1) NOT NULL, NOMBRE1 VARCHAR(50) NOT NULL,
NOMBRE2 VARCHAR(50) NULL, APELLIDO1 VARCHAR(50) NOT NULL, APELLIDO2 VARCHAR(50) NOT NULL, MAIL VARCHAR(50) NOT NULL,
PASS_WORD VARCHAR(50) NOT NULL, USERNAME VARCHAR(50) NOT NULL, ACTIVO INT NOT NULL, PRIMARY KEY(USERNAME))