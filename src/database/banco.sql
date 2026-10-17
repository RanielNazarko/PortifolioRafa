
CREATE DATABASE IF NOT EXISTS portfolio_rafa
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE portfolio_rafa;

CREATE TABLE IF NOT EXISTS perfil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_perfil INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    horas INT,
    FOREIGN KEY (fk_perfil) REFERENCES perfil(id)
);

CREATE TABLE IF NOT EXISTS certificados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_perfil INT NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    ano YEAR,
    FOREIGN KEY (fk_perfil) REFERENCES perfil(id)
);
