-- MYSQL login prompt:  mysql -u student -p
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(255),
  message VARCHAR(255),
  post_date DATE,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT(255),
  name VARCHAR(20),
  number_of_posts INT(255) DEFAULT NULL,
  last_post_date DATE,
  PRIMARY KEY (id),
  UNIQUE (name)
);


INSERT INTO users
    -> (id, name) values (1, 'josh'), (2, 'noble');



/*  Execute this file from the command line by typing:
 *    schema.sql
 *  to create the database and the tables.*/
