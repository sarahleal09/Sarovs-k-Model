CREATE DATABASE sarovsk;

USE sarovsk;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(80),
senha VARCHAR(50)
);

select * from usuario;

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