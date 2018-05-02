-- drop database first if exists --
DROP DATABASE IF EXISTS ajax_demo;

CREATE DATABASE ajax_demo;

USE ajax_demo;

-- create users table --
CREATE TABLE users (
	id int(5) not null AUTO_INCREMENT PRIMARY KEY,
	name varchar(256) not null
);
