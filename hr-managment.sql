-- MariaDB dump 10.19-11.1.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: hrmanagement
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administradores` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_nombre` varchar(50) DEFAULT NULL,
  `admin_correo` varchar(50) DEFAULT NULL,
  `admin_contrasena` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES
(1,'Admin','admin','1234'),
(2,'undefined','undefined','undefined'),
(3,'undefined','undefined','undefined'),
(4,'undefined','undefined','undefined'),
(5,'undefined','undefined','undefined'),
(6,'undefined','undefined','undefined'),
(7,'admin2','admin2@email.com','1234'),
(8,'admin2','admin2@email.com','1234');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `emp_id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_nombre` varchar(50) DEFAULT NULL,
  `emp_apellidos` varchar(50) DEFAULT NULL,
  `emp_telefono` varchar(15) DEFAULT NULL,
  `emp_correo` varchar(50) DEFAULT NULL,
  `emp_direccion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES
(1,'Jon','Snow','123-456-7890','jon.snow@email.com','Castle Black'),
(2,'Daenerys','Targaryen','123-456-7891','daenerys.targaryen@email.com','Dragonstone'),
(3,'Tyrion','Lannister','123-456-7892','tyrion.lannister@email.com','Casterly Rock'),
(4,'Arya','Stark','123-456-7893','arya.stark@email.com','Winterfell'),
(5,'Sansa','Stark','123-456-7894','sansa.stark@email.com','Winterfell'),
(6,'Cersei','Lannister','123-456-7895','cersei.lannister@email.com','Casterly Rock'),
(7,'Jaime','Lannister','123-456-7896','jaime.lannister@email.com','Casterly Rock'),
(8,'Bran','Stark','123-456-7897','bran.stark@email.com','Winterfell'),
(9,'Samwell','Tarly','123-456-7898','samwell.tarly@email.com','The Citadel'),
(10,'Davos','Seaworth','123-456-7899','davos.seaworth@email.com','Dragonstone'),
(11,'Juan','Perez','0987654321','juan@email.com','Av. Siempreviva');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-25 23:48:47
