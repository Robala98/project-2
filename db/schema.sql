DROP DATABASE IF EXISTS dallasattracts_db;
-- created database dallas attractions
CREATE DATABASE dallasattracts_db;

USE dallasattracts_db;
-- created table for users
CREATE TABLE user(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password  CHAR(30) NOT NULL
);
-- created table for attractions
CREATE TABLE attractions(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    food VARCHAR(50) NOT NULL,
    activities VARCHAR(50) NOT NULL,
    hotel VARCHAR(50) NOT NULL
);
-- created table for favorites
CREATE TABLE favorites(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id),
    REFERENCES user(id),
    attraction_id INT,
    FOREIGN KEY (atttraction_id)
    REFERENCES attraction(id)
);