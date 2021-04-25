CREATE TABLE category(
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(50));
 
 CREATE TABLE competitor(
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 first_name varchar(100) NOT NULL,
 last_name varchar(100) NOT NULL,
 gender char(1) NOT NULL,
 weight FLOAT NOT NULL,
 axe INTEGER NOT NULL,
 categoryID INTEGER NOT NULL REFERENCES category(id)
 );
 

 CREATE TABLE discipline(
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 unit varchar(10) not null
 );
 
 CREATE TABLE result(
 id INTEGER auto_increment primary key,
 disciplineID INTEGER NOT NULL references discipline(id),
 competitorID INTEGER NOT NULL references competitor(id),
 quantity FLOAT NOT NULL,
 points INTEGER NOT NULL
 )