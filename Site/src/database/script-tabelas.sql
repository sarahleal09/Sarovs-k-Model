-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE sarovsk;

USE sarovsk;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(80),
senha VARCHAR(50)
);

CREATE TABLE favorito(
idFavorito INT PRIMARY KEY AUTO_INCREMENT, 
modelo VARCHAR(50),
desfile VARCHAR(50),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
desempenho INT,
fkUsuarioQuiz INT,
FOREIGN KEY (fkUsuarioQuiz) REFERENCES usuario (id)
);