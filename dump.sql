-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `house` int NOT NULL,
  `flat` int NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_user_idx` (`id_user`),
  CONSTRAINT `fk_address_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aim` varchar(255) NOT NULL,
  `sum` int NOT NULL,
  `deadline` int NOT NULL,
  `profit` int NOT NULL,
  `data` int DEFAULT NULL,
  `id_credit` int NOT NULL,
  `id_surety` int DEFAULT NULL,
  `id_user` varchar(255) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_credit_idx` (`id_credit`),
  KEY `fk_surety_idx` (`id_surety`),
  KEY `fk_uszer_idx` (`id_user`),
  CONSTRAINT `fk_credit` FOREIGN KEY (`id_credit`) REFERENCES `credit` (`id`),
  CONSTRAINT `fk_surety` FOREIGN KEY (`id_surety`) REFERENCES `surety` (`id`),
  CONSTRAINT `fk_uszer` FOREIGN KEY (`id_user`) REFERENCES `user` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
INSERT INTO `application` VALUES (1,'на отдых',2000,2,10000,NULL,1,NULL,'asds',NULL,1),(2,'на отдых',2000,2,10000,NULL,1,NULL,'asds',NULL,1),(3,'на отдых',2000,2,20000,NULL,1,NULL,'asds',NULL,1),(4,'на отдых',2000,2,100000,NULL,1,NULL,'asds',NULL,1),(5,'на отдых',2000,2,100000,NULL,1,NULL,'asds',NULL,1),(6,'на отдых',2000,2,1000000,NULL,1,NULL,'asds',NULL,1),(7,'на отдых',2000,25,1000000,NULL,1,NULL,'asds',NULL,1),(8,'на отдых',1000000,25,2000,NULL,1,NULL,'asds',NULL,1),(9,'на отдых',2000,10,1000000,NULL,1,NULL,'asds',NULL,1),(10,'на отдых',2000,2,100000,NULL,1,NULL,'asds',NULL,1),(11,'на отдых',2000,2,10060,NULL,1,NULL,'asds',NULL,1),(12,'на отдых',2000,2,100,NULL,1,NULL,'asds',NULL,1);
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credit`
--

DROP TABLE IF EXISTS `credit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sum_max` int NOT NULL,
  `deadline_max` int NOT NULL,
  `interest_rate` int NOT NULL,
  `first_installment` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit`
--

LOCK TABLES `credit` WRITE;
/*!40000 ALTER TABLE `credit` DISABLE KEYS */;
INSERT INTO `credit` VALUES (1,'на отдых',7000000,25,15,NULL),(2,'на авто',7000000,25,10,NULL),(3,'На жильё',7000000,25,13,NULL),(4,'потребительский',7000000,25,5,NULL);
/*!40000 ALTER TABLE `credit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `surety`
--

DROP TABLE IF EXISTS `surety`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `surety` (
  `id` int NOT NULL AUTO_INCREMENT,
  `surname` varchar(150) NOT NULL,
  `name` varchar(100) NOT NULL,
  `patronymic` varchar(200) NOT NULL,
  `telephone` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `surety`
--

LOCK TABLES `surety` WRITE;
/*!40000 ALTER TABLE `surety` DISABLE KEYS */;
/*!40000 ALTER TABLE `surety` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `surname` varchar(150) NOT NULL,
  `name` varchar(100) NOT NULL,
  `patronymic` varchar(180) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(24) NOT NULL,
  `telephone` varchar(12) NOT NULL,
  `series` varchar(4) NOT NULL,
  `number` varchar(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unic_pas` (`series`,`number`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `telephone_UNIQUE` (`telephone`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'asd','asd','asd','asds','123','sad','123','123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-16 17:52:19
