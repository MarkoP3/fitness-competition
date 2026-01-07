-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: eu-cdbr-west-01.cleardb.com    Database: heroku_221d49f6c99d98e
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'И18'),(2,'Жене'),(3,'Лака кат.'),(4,'Средња кат.'),(5,'Тешка кат.');
INSERT INTO `category` VALUES (6,'Посебни');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competes`
--

DROP TABLE IF EXISTS `competes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `competes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `disciplineID` int(11) NOT NULL,
  `competitorID` int(11) NOT NULL,
  `quantity` float NOT NULL,
  `points` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=535 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competes`
--

LOCK TABLES `competes` WRITE;
/*!40000 ALTER TABLE `competes` DISABLE KEYS */;
INSERT INTO `competes` VALUES (455,1,115,210,3),(465,4,115,100,1),(475,6,115,80,3),(485,15,115,15,2),(495,3,115,405,4),(505,2,115,50,0),(515,5,115,12,1),(525,7,115,15,2);
INSERT INTO `competes` VALUES
(535,1,116,180,2),
(545,4,116,85,1),
(555,6,116,60,2),
(565,3,116,325,3),
(575,2,116,40,0),
(585,1,117,140,1),
(595,7,117,10,1),
(605,9,117,35,0),
(615,10,117,5,0),
(625,1,118,200,3),
(635,4,118,95,2),
(645,6,118,75,3),
(655,2,118,55,1),
(665,3,118,350,3),
(675,1,119,120,0),
(685,5,119,8,0),
(695,7,119,12,1),
(705,15,119,10,1);
-- Coverage for all category-discipline mappings
INSERT INTO `competes` VALUES
(715,1,120,160,0),
(725,2,120,45,0),
(735,3,120,400,0),
(745,4,120,90,0),
(755,5,120,12,0),
(765,6,120,70,0),
(775,7,120,14,0),
(785,10,120,6,0),
(795,15,120,14,0),
(805,1,121,120,0),
(815,2,121,35,0),
(825,3,121,320,0),
(835,4,121,70,0),
(845,5,121,10,0),
(855,6,121,55,0),
(865,7,121,12,0),
(875,9,121,30,0),
(885,1,122,170,0),
(895,2,122,48,0),
(905,3,122,410,0),
(915,4,122,95,0),
(925,5,122,13,0),
(935,6,122,78,0),
(945,7,122,15,0),
(955,10,122,7,0),
(965,15,122,16,0),
(975,1,123,150,0),
(985,2,123,42,0),
(995,3,123,360,0),
(1005,4,123,85,0),
(1015,5,123,11,0),
(1025,6,123,68,0),
(1035,7,123,13,0),
(1045,10,123,6,0),
(1055,15,123,15,0),
(1065,1,124,200,0),
(1075,2,124,55,0),
(1085,3,124,430,0),
(1095,4,124,100,0),
(1105,5,124,14,0),
(1115,6,124,82,0),
(1125,7,124,16,0),
(1135,10,124,8,0),
(1145,15,124,18,0);
-- Special category competitors (isSpecial=1) participating in a few disciplines
INSERT INTO `competes` VALUES
(1155,1,125,150,0),
(1165,4,125,80,0),
(1175,6,125,65,0),
(1185,2,126,38,0),
(1195,5,126,9,0);
/*!40000 ALTER TABLE `competes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competitor`
--

DROP TABLE IF EXISTS `competitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `competitor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` char(1) NOT NULL,
  `weight` float NOT NULL,
  `age` int(11) NOT NULL,
  `imageHref` varchar(255) NOT NULL DEFAULT 'logo192.png',
  `isSpecial` tinyint(1) NOT NULL DEFAULT 0,
  `categoryID` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competitor`
--

LOCK TABLES `competitor` WRITE;
/*!40000 ALTER TABLE `competitor` DISABLE KEYS */;
INSERT INTO `competitor` (`id`,`first_name`,`last_name`,`gender`,`weight`,`age`,`imageHref`,`isSpecial`,`categoryID`) VALUES (115,'Milos ','Puzovi','м',97,25,'logo192.png',0,5);
INSERT INTO `competitor` (`id`,`first_name`,`last_name`,`gender`,`weight`,`age`,`imageHref`,`isSpecial`,`categoryID`) VALUES
(116,'Nikola','Jovanovic','м',88,22,'default.png',0,4),
(117,'Ana','Petrovic','ж',62,20,'logo192.png',0,2),
(118,'Marko','Ilic','м',92,27,'default.png',1,5),
(119,'Jelena','Stojanovic','ж',70,24,'logo192.png',0,3);
INSERT INTO `competitor` (`id`,`first_name`,`last_name`,`gender`,`weight`,`age`,`imageHref`,`isSpecial`,`categoryID`) VALUES
(120,'Petar','Kovacevic','м',85,23,'logo192.png',0,1),
(121,'Ivana','Nikolic','ж',58,19,'default.png',0,2),
(122,'Stefan','Radovic','м',90,26,'logo192.png',0,3),
(123,'Maja','Milosevic','ж',68,24,'default.png',0,4),
(124,'Luka','Savic','м',95,28,'logo192.png',0,5);
INSERT INTO `competitor` (`id`,`first_name`,`last_name`,`gender`,`weight`,`age`,`imageHref`,`isSpecial`,`categoryID`) VALUES
(125,'Boris','Zoric','м',80,29,'logo192.png',1,6),
(126,'Sara','Kostic','ж',55,21,'default.png',1,6);
/*!40000 ALTER TABLE `competitor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discipline`
--

DROP TABLE IF EXISTS `discipline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `discipline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discipline_typeID` int(11) DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `first_place` int(11) NOT NULL,
  `second_place` int(11) NOT NULL,
  `third_place` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_croatian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discipline`
--

LOCK TABLES `discipline` WRITE;
/*!40000 ALTER TABLE `discipline` DISABLE KEYS */;
INSERT INTO `discipline` VALUES (1,1,'Чучањ',3,2,1),(2,2,'Чучањ',3,2,1),(3,3,'ТОТАЛ',4,3,2),(4,1,'Пропадање',3,2,1),(5,2,'Пропадање',3,2,1),(6,1,'Згиб',3,2,1),(7,2,'Згиб',3,2,1),(9,2,'Склек',3,2,1),(10,2,'Руски згиб',3,2,1),(15,1,'Руски згиб',3,2,1);
/*!40000 ALTER TABLE `discipline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discipline_category`
--

DROP TABLE IF EXISTS `discipline_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `discipline_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `disiplineID` int(11) NOT NULL,
  `categoryID` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discipline_category`
--

LOCK TABLES `discipline_category` WRITE;
/*!40000 ALTER TABLE `discipline_category` DISABLE KEYS */;
INSERT INTO `discipline_category` VALUES (1,1,1),(2,2,1),(3,1,2),(4,2,2),(5,1,3),(6,2,3),(7,1,4),(8,2,4),(9,1,5),(10,2,5),(11,3,1),(12,3,2),(13,3,3),(14,3,4),(15,3,5),(16,4,1),(17,5,1),(18,4,2),(19,5,2),(20,4,3),(21,5,3),(22,4,4),(23,5,4),(24,4,5),(25,5,5),(26,6,1),(27,7,1),(28,6,2),(29,7,2),(30,6,3),(31,7,3),(32,6,4),(33,7,4),(34,6,5),(35,7,5),(36,10,1),(37,9,2),(38,10,3),(39,10,4),(40,10,5),(45,15,1),(55,15,3),(65,15,4),(75,15,5);
/*!40000 ALTER TABLE `discipline_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discipline_type`
--

DROP TABLE IF EXISTS `discipline_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `discipline_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `unit` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discipline_type`
--

LOCK TABLES `discipline_type` WRITE;
/*!40000 ALTER TABLE `discipline_type` DISABLE KEYS */;
INSERT INTO `discipline_type` VALUES (1,'ОРМ','кг'),(2,'СНАГА','пон.'),(3,'ТОТАЛ','кг');
/*!40000 ALTER TABLE `discipline_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-25 14:29:50
