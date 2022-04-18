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
  `axe` int(11) NOT NULL,
  `categoryID` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competitor`
--

LOCK TABLES `competitor` WRITE;
/*!40000 ALTER TABLE `competitor` DISABLE KEYS */;
INSERT INTO `competitor` VALUES (115,'Milos ','Puzovi','м',97,25,5);
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
