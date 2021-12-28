-- Server version	8.0.16

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `contact_number` varchar(50) DEFAULT NULL,
  `salt` varchar(250) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  `createdAt` date DEFAULT ((curdate() + interval 1 year)),
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gayatri','anand','gayatri@gmail..com','$2a$10$dncxwx35oUkY2M6WaU/Rc.1R4N8oWYI.G7Yd9pJCkTUdi4EEoZ/QW','9876543210','$2a$10$dncxwx35oUkY2M6WaU/Rc.',1,'2022-12-27',NULL),(3,'anand','K','anand@gmail.com','$2a$10$cvLBlBXwQdar1EFtjJ.H/uy//HF.Ud4API9WZVwBTbExAJpMzOK76','9876543210','$2a$10$cvLBlBXwQdar1EFtjJ.H/u',1,'2022-12-27',NULL),(4,'anand','K','anand1@gmail.com','$2a$10$31UNgIeeZifq9QCrCFU1ZOvAwwFPw77uJpWZR8pY06JXftRHESJRK','9876543219','$2a$10$YoOG5fGrPCPmHlAhZKzJEu',1,'2022-12-27',NULL),(9,'hdsdghg','K','test@gmail.com','$2a$10$uJEO4TmvxrUNFhjBiCwmIuWEwfufUzc/LCeoz1qIz8GviL7jx4JTi','8965230471','$2a$10$uJEO4TmvxrUNFhjBiCwmIu',1,'2022-12-27',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-28 16:59:46