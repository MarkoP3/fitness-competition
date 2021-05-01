DROP TABLE category;
DROP TABLE competitor;
DROP TABLE discipline;
DROP TABLE result;
DROP TABLE discipline_category;
DROP TABLE discipline_type;
DROP TABLE competes;
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
 discipline_typeID INTEGER REFERENCES discipline_type(id),
 name VARCHAR(100) NOT NULL,
 first_place int not null,
 second_place int not null,
 third_place int not null
 );
 
 CREATE TABLE result(
 id INTEGER auto_increment primary key,
 competesID INTEGER NOT NULL references competes(id),
 quantity FLOAT NOT NULL,
 points INTEGER NOT NULL
 );
 
 CREATE TABLE competes(
  id INTEGER auto_increment primary key,
  disciplineID INTEGER NOT NULL references discipline(id),
  competitorID INTEGER NOT NULL references competitor(id),
  quantity FLOAT NOT NULL,
points INTEGER NOT NULL
 );
 CREATE TABLE discipline_type
 (   id INTEGER auto_increment primary key,
	name varchar(10) NOT NULL,
    unit varchar(10) not null
 );
 CREATE table discipline_category(
   id INTEGER auto_increment primary key,
   disiplineID INTEGER NOT NULL references discipline(id),
   categoryID INTEGER NOT NULL REFERENCES category(id)
 );