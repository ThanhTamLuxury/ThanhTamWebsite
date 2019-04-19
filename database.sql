drop database thanhtamluxury;
create database thanhtamluxury;
use thanhtamluxury;
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `account` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('admin','$2a$10$3eEITatAhRWBTjKytwF6cOTbonIdfIs/UfQ6XUiXVHfmsZRgzPyre');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:26
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `appointment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `note` text,
  `phone` varchar(50) NOT NULL,
  `isNew` bit(1) DEFAULT b'1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:31
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (4,'http://108.61.201.114/uploadImages/9b35c59e-3637-4062-a08c-cbefa7b69869_1555474001666.jpg');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:43
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `header`
--

DROP TABLE IF EXISTS `header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `header` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `to` varchar(50) DEFAULT NULL,
  `exact` bit(1) DEFAULT b'1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `header`
--

LOCK TABLES `header` WRITE;
/*!40000 ALTER TABLE `header` DISABLE KEYS */;
/*!40000 ALTER TABLE `header` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:34
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `imageitem`
--

DROP TABLE IF EXISTS `imageitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `imageitem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `serviceItemId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `serviceItemId` (`serviceItemId`),
  CONSTRAINT `imageitem_ibfk_1` FOREIGN KEY (`serviceItemId`) REFERENCES `serviceitem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageitem`
--

LOCK TABLES `imageitem` WRITE;
/*!40000 ALTER TABLE `imageitem` DISABLE KEYS */;
INSERT INTO `imageitem` VALUES (104,'http://108.61.201.114/uploadImages/713c7612-2c31-4a46-89a7-2a40ec949b54_1555425245635.png',103),(105,'http://108.61.201.114/uploadImages/3a93923d-22c2-48a8-aef3-cacd33f223d5_1555425245755.jpg',103),(106,'http://108.61.201.114/uploadImages/fd6c54ec-d2a1-40e1-af19-6cec7fca55a5_1555426367399.jpg',105),(107,'http://108.61.201.114/uploadImages/3adb2681-9163-4f8f-a93b-39bd8d63d054_1555426367413.jpg',105),(108,'http://108.61.201.114/uploadImages/8b57ccb0-440f-48a8-9f1c-c86d1f4a3a2f_1555426367568.jpg',105),(109,'http://108.61.201.114/uploadImages/7aaa5d85-c844-4808-b552-02fa3a7881fb_1555426367570.jpg',105),(110,'http://108.61.201.114/uploadImages/f2073995-26fe-4a61-8ad0-cba422c05f6d_1555427037230.jpg',106),(111,'http://108.61.201.114/uploadImages/261a61ef-0539-4d38-8512-804dcc53da2a_1555427037291.jpg',106),(112,'http://108.61.201.114/uploadImages/7635e979-c0ec-4cb8-9d68-a573ede07758_1555427037292.jpg',106),(113,'http://108.61.201.114/uploadImages/f82c769f-2d92-4a93-853d-139f7ed2e039_1555427037294.jpg',106),(114,'http://108.61.201.114/uploadImages/6811c63a-ba03-4a09-8404-c2cfcac65c56_1555427037295.jpg',106),(115,'http://108.61.201.114/uploadImages/c12f6496-72ff-44fa-b874-ca19486c17a0_1555427037308.jpg',106),(116,'http://108.61.201.114/uploadImages/cff1fae6-9bd3-4ea3-865a-e71fa95bcc64_1555427037310.jpg',106),(117,'http://108.61.201.114/uploadImages/da60666b-ac83-4d64-8e27-a74a6173c2e1_1555427037312.jpg',106),(118,'http://108.61.201.114/uploadImages/d99c4f30-a469-4991-b9ca-92e6e358e994_1555427037485.jpg',106),(119,'http://108.61.201.114/uploadImages/9a2381ad-19fb-45fa-8bfc-38d6cfab6256_1555427037486.jpg',106),(120,'http://108.61.201.114/uploadImages/913c1f19-f065-4cce-bcea-7011bd93681e_1555427928062.jpg',107),(121,'http://108.61.201.114/uploadImages/0ea2daa7-7c1c-4ec8-b2f4-ca6f826b0833_1555427928071.jpg',107),(122,'http://108.61.201.114/uploadImages/02b41d36-8fc0-4c4a-980d-e2b2577fa0da_1555427928073.jpg',107),(123,'http://108.61.201.114/uploadImages/6ef6763f-d335-4500-b7a1-de7c39c1aa6e_1555427928227.jpg',107),(124,'http://108.61.201.114/uploadImages/f418403c-d2ff-4aa2-b2c6-33a1d2b59436_1555428146939.jpg',108),(125,'http://108.61.201.114/uploadImages/4b8d3db7-cdb8-405d-be6a-ed824415ecd5_1555428146947.jpg',108),(126,'http://108.61.201.114/uploadImages/b4d3a9a8-2acd-4a27-900e-4e88ea001bbc_1555428147150.jpg',108),(127,'http://108.61.201.114/uploadImages/6aa2c2d1-f49d-4d89-9a1c-fe318bfa3605_1555429141222.jpg',109),(128,'http://108.61.201.114/uploadImages/ba4448f3-3ba4-4717-a833-6deeb7912d96_1555429141237.jpg',109),(129,'http://108.61.201.114/uploadImages/7dad9731-cb17-4116-bfea-5cef8fdb7c0d_1555429141238.jpg',109),(130,'http://108.61.201.114/uploadImages/a692c0a9-d403-41da-aa01-379c88bdd140_1555429321643.jpg',110),(131,'http://108.61.201.114/uploadImages/5af79de2-073a-4cfe-9aa1-4d6a5f857e6d_1555429321661.jpg',110),(132,'http://108.61.201.114/uploadImages/15976db3-fa9c-4a2a-b47f-8960b8af98bc_1555429321662.jpg',110);
/*!40000 ALTER TABLE `imageitem` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:28
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `googleLocation` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'459 Bùi Văn Hòa - Tổ 20 - Khu phố 6 - P. Long Bình - TP. Biên Hòa - T. Đồng Nai','thanhtam511983@gmail.com','093 304 54 30','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4942857277247!2d106.87771211416214!3d10.925985692220154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174de447e46f59d%3A0x6fa176d0b49a9be2!2zNDU5IELDuWkgVsSDbiBIw7JhLCBMb25nIELDrG5oLCBUaMOgbmggcGjhu5EgQmnDqm4gSMOyYSwgxJDhu5NuZyBOYWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1547219151711');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:37
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `pricedetail`
--

DROP TABLE IF EXISTS `pricedetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pricedetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `applyDate` date DEFAULT NULL,
  `price` float NOT NULL,
  `serviceItemId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `serviceItemId` (`serviceItemId`),
  CONSTRAINT `pricedetail_ibfk_1` FOREIGN KEY (`serviceItemId`) REFERENCES `serviceitem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricedetail`
--

LOCK TABLES `pricedetail` WRITE;
/*!40000 ALTER TABLE `pricedetail` DISABLE KEYS */;
INSERT INTO `pricedetail` VALUES (101,'2019-04-16',3000000,105),(102,'2019-04-17',3350000,105),(103,'2019-04-18',4000000,105),(104,'2019-04-16',3000000,106),(105,'2019-04-17',3350000,106),(106,'2019-04-18',4000000,106),(107,'2019-04-16',3000000,107),(108,'2019-04-17',3350000,107),(109,'2019-04-18',4000000,107),(110,'1991-02-15',0,128),(111,'2019-04-17',0,128);
/*!40000 ALTER TABLE `pricedetail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:49
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 108.61.201.114    Database: thanhtamluxury
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `serviceitem`
--

DROP TABLE IF EXISTS `serviceitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `serviceitem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `serviceType` varchar(255) DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `mainImage` varchar(255) DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `priceDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `shortDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `isActive` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serviceitem`
--

LOCK TABLES `serviceitem` WRITE;
/*!40000 ALTER TABLE `serviceitem` DISABLE KEYS */;
INSERT INTO `serviceitem` VALUES (105,'Khu du lịch Bửu Long - Biên Hòa','Album',NULL,5000000,'khu-du-lich-buu-long-bien-hoa','http://108.61.201.114/uploadImages/fd6c54ec-d2a1-40e1-af19-6cec7fca55a5_1555426367399.jpg','Khu du lịch Bửu Long - Biên Hòa','<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','This is short description','Chúng mình lấy nhau em nhé. Về quê anh em à, vùng ngoại ô cách không xa. Ba mẹ anh ngày xưa cũng ở đấy. Đồi xanh thơm mát những lá trà. Trong lành hát những khúc ca cùng hương chiều quê, nghe lúa thơm tình ta. Anh sẽ xây ta một căn nhà trước sân trồng thêm rau cà. Ở đằng sau, mình nuôi thêm hồ cá. Em tưới hoa bên bờ sông nhà. Đom đóm lung linh màn đêm yên bình. Ta dạo thuyền quanh, đom đóm bay thật nhanh.',_binary ''),(106,'Khu du lịch Hồ Cốc','Album',NULL,5000000,'khu-du-lich-ho-coc','http://108.61.201.114/uploadImages/f2073995-26fe-4a61-8ad0-cba422c05f6d_1555427037230.jpg','Hồ Cốc','<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','This is short description','\"Kỳ thực, tình yêu trong hôn nhân vốn không cần những lời thề non hẹn biển, càng không cần thể hiện bằng sự bi tráng của sinh ly tử biệt. Nó chẳng qua chỉ là một cuộc sống yên bình như nước.\". Và anh muốn có một tình yêu như vậy với em. Cô gái bé nhỏ của cuộc đời anh. Cảm ơn em đã đến bên anh! Cùng anh, chúng mình cùng bước tiếp em nhé!',_binary ''),(107,'Hồ Trị An - Bình Dương','Album',NULL,5000000,'ho-tri-an-binh-duong','http://108.61.201.114/uploadImages/913c1f19-f065-4cce-bcea-7011bd93681e_1555427928062.jpg','Hồ Trị An - Bình Dương','<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','This is short description','Thuộc về nhau … đôi khi không biểu hiện bằng tình cảm mãnh liệt mà có thể chỉ đơn thuần là một cảm giác bình yên, sự an tâm khi được cầm tay nhau cùng nhau đi đến cuối con đường, là sau khi đi cả một vòng lớn, quay trở lại điểm ban đầu, cảm thấy thật vui mừng vì vẫn có ai đó đứng kiên định chờ ta. Đôi khi \"không phải người có tình cuối cùng cũng trở thành phu thê\" mà là \"người có duyên cuối cũng cũng nên nghĩa vợ chồng\". Em thấy chúng ta có duyên với nhau không? ^^',_binary ''),(108,'Áo cưới đính hạt cườm nổi bật trong ngày cưới','Wedding dress',NULL,5000000,'ao-cuoi-dinh-hat-cuom-noi-bat-trong-ngay-cuoi','http://108.61.201.114/uploadImages/b4d3a9a8-2acd-4a27-900e-4e88ea001bbc_1555428147150.jpg',NULL,'<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','Kết hôn ! Có lẽ là một trong những ngày trọng đại nhất trong cuộc đời mỗi người phụ nữ. Vì họ mang trên mình một bộ váy cưới lộng lẫy bậc nhất. Nếu là em, em có chọn bộ váy này không?','This is description',_binary ''),(109,'Váy cưới đuôi cá màu trắng trễ vai','Wedding dress',NULL,5000000,'vay-cuoi-duoi-ca-mau-trang-tre-vai','http://108.61.201.114/uploadImages/6aa2c2d1-f49d-4d89-9a1c-fe318bfa3605_1555429141222.jpg',NULL,'<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','\"Hôn lễ là truyện cổ tích, cưới xong sẽ là hiện thực\". Đó là người ta nói thế. Còn với anh, dù một ngày hay trăm năm, được yêu em đã là truyện cổ tích rồi. Em thấy váy cưới này được chứ!','This is description',_binary ''),(110,'Váy cưới xòe màu trắng tay dài trẻ trung hiện đại','Wedding dress',NULL,5000000,'vay-cuoi-xoe-mau-trang-tay-dai-tre-trung-hien-dai','http://108.61.201.114/uploadImages/a692c0a9-d403-41da-aa01-379c88bdd140_1555429321643.jpg',NULL,'<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','Trong hôn lễ, anh muốn em là người nổi bật nhất khán phòng. Anh sẽ giúp em chọn bộ váy cưới phù hợp nhất. Hãy tin tưởng anh, vì anh biết, cái gì là tốt nhất cho em. Chờ anh một chút... Thử bộ này, bộ này, bộ này nữa.','This is description',_binary ''),(111,'Video đám cưới Bình Phước','Wedding video',NULL,5000000,'video-dam-cuoi-binh-phuoc','tZbx2I0dEto',NULL,'<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','This is short description','Ngày mai,em là cô dâu mới. Ngày mai,em mặc chiếc áo dài theo chồng. Ngày mai,em cười thật hạnh phúc. Ngày mai,em được ở bên người mà em yêu! ',_binary ''),(112,'Video đám cưới cô dâu chú rể xinh như Hoa Hậu','Wedding video',NULL,5000000,'video-dam-cuoi-co-dau-chu-re-xinh-nhu-hoa-hau','hU70RBOYKZU',NULL,'<p>This is price description p tag </p>. <br/><h2>This is price description h2 tag </h2>','This is short description','Ngày mai,em là cô dâu mới. Ngày mai,em mặc chiếc áo dài theo chồng. Ngày mai,em cười thật hạnh phúc. Ngày mai,em được ở bên người mà em yêu! ',_binary ''),(128,'','Album',NULL,0,NULL,NULL,NULL,'<p></p>\n',NULL,'',_binary '\0');
/*!40000 ALTER TABLE `serviceitem` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-18 22:34:40
