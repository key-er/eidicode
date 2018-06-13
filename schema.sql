DROP DATABASE git;
CREATE DATABASE git;

USE git;

CREATE TABLE repos (
  entry INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (entry),
  id INT,
  full_name TEXT(500),
  createdAT TIMESTAMP,
  login VARCHAR(50),
  html_url VARCHAR(35),
  watchers_count INT,
  forks INT,
  stargazers_count INT
);
