-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: pembidb
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jsonsegments`
--

DROP TABLE IF EXISTS `jsonsegments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jsonsegments` (
  `segment` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jsonsegments`
--

LOCK TABLES `jsonsegments` WRITE;
/*!40000 ALTER TABLE `jsonsegments` DISABLE KEYS */;
/*!40000 ALTER TABLE `jsonsegments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parks`
--

DROP TABLE IF EXISTS `parks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parks` (
  `id` varchar(10) NOT NULL,
  `name` varchar(68) DEFAULT NULL,
  `location` varchar(30) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `latitude` varchar(30) DEFAULT NULL,
  `longitude` varchar(30) DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parks`
--

LOCK TABLES `parks` WRITE;
/*!40000 ALTER TABLE `parks` DISABLE KEYS */;
INSERT INTO `parks` VALUES ('1','Groenkloof','Pretoria Central','Gauteng','-25.789769','28.196204','http://www.tshwane.gov.za/sites/tourism/NatureConservation/Pages/Groenkloof-Nature-Reserve.aspx','The reserve is a particularly popular destination for mountain biking events, with each trail offering varying degrees of difficulty. Groenkloof’s hiking trails are well marked and cater for people of all endurance levels, ranging from casual hikers to those who prefer more gruelling trails.http://w','http://www.conradstoltz.com/wp-content/uploads/2015/01/Conrad-Stoltz-Caveman-Skills-Clinic-Groenkloof-Zebras-Frans.jpg'),('10','Hazeldean/Cowhouse (Donkerhoek, Pretoria-East)','Pretoria East','Gauteng','-25.774319','28.398915','www.cowhousemarket.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('11','Buffelsdrift (Roodeplaat Dam)','Roodeplaat Dam','Gauteng','-25.586714','28.325142','buffelsdriftmtb.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('12','Hedianga farm (Pretoria-East) - 6km trail, technical','Pretoria East','Gauteng','-25.806903','28.350425','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('13','Bike & Bos Adventures (Donkerhoek)','Pretoria East','Gauteng','-25.776625','28.469915','bikebosadventures.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('14','Northern Farm','Diepsloot','Gauteng','-25.93752','27.988887','https://www.northernfarm.co.za/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('15','Van Gaalen','Hartebeespoort','Gauteng','-25.788021','27.770906','www.vangaalen.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('16','Modderfontein','Modderfontein','Gauteng','-26.063972','28.122781','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('17','Rietvlei','Alberton','Gauteng','-26.311867','28.07975','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('18','Thaba Trials','Alberton','Gauteng','-26.300976','28.048549','www.thabatrails.webs.com','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('19','PWC Cycle Park','Bryanston','Gauteng','-26.038622','28.026194','www.cyclepark.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('2','Fonteine (Pretoria) (not much used any longer due to safety reasons)','Pretoria Central','Gauteng','-25.776302','28.195453','http://www.gauteng.net/attractions/fountains_valley_resort/','Fountains Valley mountain biking trails are located adjecent to the Groenkloof Nature Reserve and used to be very popular amongst both weekend riders as well as primary cross country events. The trails have fallen into disrepair and are no longer safe to cycle alone.','https://sc-events.s3.amazonaws.com/4056137/main.jpg'),('20','Braamfontein Spruit','Sandton','Gauteng','-26.114677','28.019146','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('21','Botanic Gardens? (a bike park?)','','Gauteng','-26.153894','28.002537','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('22','Cradle','Muldersdrift','Gauteng','-25.987901','27.819086','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('23','Hakahana (Hartebeespoort)','Hartebeespoort','Gauteng','-25.775398','28.009588','www.hakahanatrails.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('24','Kings Kloof','Krugersdorp','Gauteng','-26.041168','27.781001','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('25','Cradle Moon (formerly Heia Safaris)','Muldersdrift','Gauteng','-25.962249','27.858947','www.cradlemoon.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('26','Avianto Trails','Muldersdrift','Gauteng','-26.027365','27.840651','www.avianto.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('27','Suikerbosrand','Heidelberg','Gauteng','-26.452091','28.220185','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('28','Hennops Hiking & MTB Trails','Centurion','Gauteng','-25.797227','27.987457','http://www.hennopstrails.co.za/mtb-trail-2/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('29','Hero Hobby Park( Krugersdorp)','Krugersdorp','Gauteng','-26.088818','27.819508','www.hero-adventure.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('3','Klapperkop (Pretoria)','Pretoria Central','Gauteng','-25.784142','28.204264','http://www.showme.co.za/pretoria/tourism/klapperkop-nature-rerserve/','Klapperkop offers visitors panoramic views of Pretoria in all directions. Not only is it fast becoming a popular jogging, cycling and mountain biking destination, but with the introduction of game, you’re able to do a quick game drive for free, right here in the heart of Pretoria.','https://static.bikehub.co.za/forum/uploads/monthly_10_2015/post-13836-0-00823300-1444740524.jpg'),('30','Rotsvas (Private Trail)','Pretoria East','Gauteng','-25.786891','28.349063','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('31','Huddle Park','Linksfield','Gauteng','-26.1556','28.120078','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('32','Wattlespring Trails (near Witpoortjie School) ','Bapsfontein','Gauteng','-25.953891','28.485905','http://www.wattlespringscountryclub.co.za/mountain-bike-trails.html','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('33','Trails near Bronkhorstspruit Dam???','Bronkhorstspruit','Gauteng','','','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('34','Wonderboom - Friends of Magaliesberg','Pretoria North','Gauteng','-25.693353','28.203049','https://www.bikehub.co.za/forum/topic/135290-friends-of-magaliesberg/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('35','Riverfields','Kempton Park','Gauteng','','','https://www.facebook.com/pages/Riverfields-Mtb-Trail/410901169267461','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('36','Krugersdorp Nature Reserve','Krugersdorp','Gauteng','-26.091056','27.708316','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('37','Via Mala (Private)','Pretoria East','Gauteng','-25.866313','28.380284','https://www.facebook.com/viamalamtbandtrailrun/','contact Sarel Marais to arrange',NULL),('38','Roodeplaatdam Nature Reserve','Roodeplaat Dam','Gauteng','-25.62165','28.342182','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('39','Ezemvelo Nature Reserve','Bronkhorstspruit','Gauteng','-25.708188','28.929088','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('4','Voortrekker Monument (Pretoria)','Pretoria Central','Gauteng','-25.778833','28.170498','http://www.vtm.org.za/cycling-running-hiking-trails/','The trails are located in a safe, fenced in nature reserve with a wide variety of fauna and flora and adequate safe parking. There are several different facilities on site that can be utilized such as road cycling routes; hiking and running routes; horse rides with a guide; a braai and picnic area a','http://cdn-www.bicycling.co.za/wp-content/uploads/2016/07/XCO.jpg'),('40','Benoni Country Club','Benoni','Gauteng','-26.172236','28.340811','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('41','Woodhill',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('5','Wolwespruit (Pretoria-East)','Pretoria East','Gauteng','-25.809929','28.263303','http://www.wolwespruit.co.za/','Wolwespruit is a mountain bike and trail run park located in Erasmuskloof, Pretoria. Named after the spruit that runs through it, the park\'s hand crafted single track trails provide a flowing and adrenaline filled adventure for beginner to advanced skilled riders and runners.','http://www.wolwespruit.co.za/images/gallery/08.jpg'),('6','Rosemary Hill (Donkerhoek, Pretoria-East)','Pretoria East','Gauteng','-25.790836','28.431661','http://rosemaryhill.co.za/mtb-trails-pretoria/','Rosemary Hill’s award winning MTB Trail, (“Big MTB Year” Trail Winner for 2014 and 2015), is suitable for mountain bike riders, trail runners and hikers alike, offering a great day out on the very clearly marked trails of approximately 6km, 10km and 33km.http://www.wolwespruit.co.za/','http://www.ride.co.za/wp-content/uploads/2015/11/Rosemary-Hill-7.jpg'),('7','Big Red Barn (Irene, Centurion)','Irene','Gauteng','-25.92733','28.229979','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('8','Tierpoort Trails','Pretoria East','Gauteng','-25.888505','28.389414','http://www.tierpoorttrails.co.za/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('9','Ingaadi Spa & Events','Pretoria East','Gauteng','-25.92236','28.445375','http://www.ingaadi.co.za/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL);
/*!40000 ALTER TABLE `parks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parksegments`
--

DROP TABLE IF EXISTS `parksegments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parksegments` (
  `park` varchar(10) DEFAULT NULL,
  `segment` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parksegments`
--

LOCK TABLES `parksegments` WRITE;
/*!40000 ALTER TABLE `parksegments` DISABLE KEYS */;
INSERT INTO `parksegments` VALUES ('5','9241667','Wolwespruit 1st singletrack to bottom'),('3','28536469777',NULL),('1','8426266','GroenKloof Start SingleTrail 01'),('16','3701508','Tar road climb'),('6','13350341','Northgate loop and split past A&T'),('20','3470419','Conrad to Bridge'),('11','12323823','KwaggaTwist'),('41','6055169','Wanderers Road Climb'),('41','8387151','Solomon Spruit to Top Cross Old Farm'),('41','674672','WTF'),('11','7432199','Supertube to Sefedi Start'),('11','8357308','Rocks 2 Crocs'),('11','8305199','Bundu bash Single track'),('41','4283388','Glendower Rd Up'),('41','643999','Woodhill'),('5','7850036','S Benders'),('5','7844343','Wolwespruit Climb 1'),('5','12584208','Feel the burn!!');
/*!40000 ALTER TABLE `parksegments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `id` varchar(11) CHARACTER SET latin1 NOT NULL,
  `drill` varchar(50) CHARACTER SET latin1 NOT NULL,
  `skill` varchar(50) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skillslog`
--

DROP TABLE IF EXISTS `skillslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skillslog` (
  `date` date NOT NULL,
  `user` varchar(10) CHARACTER SET latin1 NOT NULL,
  `park` varchar(10) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skillslog`
--

LOCK TABLES `skillslog` WRITE;
/*!40000 ALTER TABLE `skillslog` DISABLE KEYS */;
/*!40000 ALTER TABLE `skillslog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `first_name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `last_name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `email` varchar(100) CHARACTER SET latin1 NOT NULL,
  `stravaid` varchar(25) DEFAULT NULL,
  `stravatoken` varchar(100) DEFAULT NULL,
  `password` varchar(100) CHARACTER SET latin1 NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `datecreated` datetime DEFAULT NULL,
  `resetPasswordToken` varchar(50) DEFAULT NULL,
  `resetPasswordExpires` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'Carl','Scholtz','eminds11@gmail.com','194278',NULL,'$2a$10$n0kI2JAj4GbFlgLq1wgYyOrKHawpfnEbUCqMAScRTojPdX6W0mmBq',1,NULL,NULL,NULL),(2,NULL,'Trackz','Test','trackz11@gmail.com',NULL,NULL,'$2a$10$Z8Fy2xzm22woNWsePnlK.Ox28zBBIybGhvhl4ATmdy9OOhsPPEghy',1,NULL,NULL,NULL),(3,NULL,'Pembi','Scholtz','pembiorg@gmail.com',NULL,NULL,'$2y$10$v/6glNM9GkAHKdPdl0mQvulqnLwbk0fI9ZN17RURHTtjG/lyPnbry',1,NULL,NULL,NULL),(8,'pete','Julien','Absalon','pete@pete.com','194278','2d8f781d16bb0a5196b725b98eac2b893ab3a10b','$2a$10$AZUiCh5UkktXCcYPbbWZX.m25YSkI51hIScUn7hxrNUvq9PUCL7zG',0,NULL,NULL,NULL),(9,'dog','Emily','Batty','dog@dog.com','194278','2d8f781d16bb0a5196b725b98eac2b893ab3a10b','$2a$10$AdAYlEQahm7JmjC3HrFyCuQnvRFlIZchzVbzsvOtmxGobBUyzgm8O',0,NULL,NULL,NULL),(10,'cat','Jolanda','Neff','cat@cat.com','194278','2d8f781d16bb0a5196b725b98eac2b893ab3a10b','$2a$10$vfP5cqEgMwbK3lwc8cq53ui.72P68DU3V/ew9PdpN2c6ktXwYBflq',0,NULL,NULL,NULL),(11,'cow','Nino','Schurter','cow@cow.com','25404748','ba422c3ca7be65aa4791d597c7b4c84d8fb34b75','$2a$10$FnZKlZha2T6mA94p4KFcmuJ/NduHH00096hWRQ0p27rKZRbaH.lMC',0,NULL,NULL,NULL),(12,NULL,'','','bok@bok.com',NULL,NULL,'$2a$10$EVk8eBPSP6L.Hn.HCrNcSOQdkeg8Aq8ms5DQiiynKkqLEW5mZ3eRK',0,NULL,NULL,NULL),(13,NULL,'Johnny','Bravo','joe@joe.com','194278','2d8f781d16bb0a5196b725b98eac2b893ab3a10b','$2a$10$vs9l3VCOpiccEaPOAov8XOFljEqwuf6G35fJ6xo.WGGZmL0vnc1Nq',0,NULL,NULL,NULL),(14,NULL,'Bernard','Hinault','pig@pig.com','194278','2d8f781d16bb0a5196b725b98eac2b893ab3a10b','$2a$10$JMnMEiw7EYYVxJBF8wG1Jui1T09zGy62tpmJl9Bzz.nbAcr9/QgHi',0,'0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitslog`
--

DROP TABLE IF EXISTS `visitslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visitslog` (
  `date` datetime DEFAULT NULL,
  `user` varchar(10) CHARACTER SET latin1 NOT NULL,
  `park` varchar(10) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitslog`
--

LOCK TABLES `visitslog` WRITE;
/*!40000 ALTER TABLE `visitslog` DISABLE KEYS */;
INSERT INTO `visitslog` VALUES ('2017-08-04 00:00:00','1','5'),('2017-08-04 00:00:00','1','4'),('2017-09-15 00:00:00','3','14'),('2017-09-16 00:00:00','5','25'),('2017-09-16 00:00:00','5','20'),('2017-09-16 00:00:00','4','22'),('2017-09-17 00:00:00','1','1'),('2017-09-10 00:00:00','1','11'),('2017-09-16 00:00:00','4','13'),('2017-09-16 00:00:00','4','14'),('2017-09-15 00:00:00','3','5'),('2017-09-15 00:00:00','2','5'),('2017-09-15 00:00:00','1','5'),('0000-00-00 00:00:00','',''),('2017-09-24 00:00:00','10','11'),('2017-08-19 09:40:59','8','1'),('2017-08-19 09:40:59','8','1'),('2017-08-19 09:40:59','10','1'),('2017-08-19 09:40:59','8','1'),('2017-08-19 09:40:59','12','1'),('2017-08-19 09:40:59','13','1'),('2017-08-19 09:40:59','13','1'),('2017-09-27 17:30:07','10','41'),('2017-09-27 17:30:07','14','41'),('2017-09-27 17:30:07','10','41'),('2017-09-27 17:30:07','8','41'),('2017-08-29 16:40:29','10','5'),('2017-08-29 16:40:29','10','5'),('2017-01-01 00:00:00','194278','22'),('0000-00-00 00:00:00','194278','22'),('1970-01-16 00:21:26','194278','22'),('1970-01-16 00:21:26','194278','22'),('0000-00-00 00:00:00','194278','22'),('0000-00-00 00:00:00','194278','22'),('0000-00-00 00:00:00','194278','22'),('0000-00-00 00:00:00','194278','22'),('0000-00-00 00:00:00','194278','22'),('2017-08-29 16:40:29','10','5');
/*!40000 ALTER TABLE `visitslog` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-05 19:13:28
