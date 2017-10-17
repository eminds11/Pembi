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
-- Table structure for table `leaderboard1`
--

DROP TABLE IF EXISTS `leaderboard1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leaderboard1` (
  `user` varchar(10) DEFAULT NULL,
  `park` varchar(10) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaderboard1`
--

LOCK TABLES `leaderboard1` WRITE;
/*!40000 ALTER TABLE `leaderboard1` DISABLE KEYS */;
INSERT INTO `leaderboard1` VALUES ('12','10',NULL,NULL),('1','8',NULL,NULL),('10','8',NULL,NULL),('8','5',NULL,NULL),('4','3',NULL,NULL),('14','2',NULL,NULL),('3','2',NULL,NULL),('5','2',NULL,NULL),('13','2',NULL,NULL),('11','1',NULL,NULL),('2','1',NULL,NULL);
/*!40000 ALTER TABLE `leaderboard1` ENABLE KEYS */;
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
INSERT INTO `parks` VALUES ('1','Groenkloof','Pretoria Central','Gauteng','-25.789769','28.196204','http://www.tshwane.gov.za/sites/tourism/NatureConservation/Pages/Groenkloof-Nature-Reserve.aspx','The reserve is a particularly popular destination for mountain biking events, with each trail offering varying degrees of difficulty. Groenkloof’s hiking trails are well marked and cater for people of all endurance levels, ranging from casual hikers to those who prefer more gruelling trails.http://w','http://www.conradstoltz.com/wp-content/uploads/2015/01/Conrad-Stoltz-Caveman-Skills-Clinic-Groenkloof-Zebras-Frans.jpg'),('10','Hazeldean/Cowhouse','Pretoria East','Gauteng','-25.774319','28.398915','www.cowhousemarket.co.za','Trails for mountain biking and trail running in Pretoria East.','http://www.cowhousemarket.co.za/uploads/7/8/6/8/78682480/ch-087_orig.jpg'),('11','Buffelsdrift','Roodeplaat Dam','Gauteng','-25.586714','28.325142','buffelsdriftmtb.co.za','Buffelsdrift Mountain Bike Park is located only 15km North of Pretoria and provides a safe and secure riding environment within the confines of the Buffelsdrift Nature Conservancy. Lying on the western boundaries of the Dinokeng area, between the Roodeplaat Dam and the N1 highway, Buffelsdrift Conse','http://fullsus.co.za/wp-content/uploads/2015/05/Cover-feature-banner.jpg'),('12','Hedianga Farm','Pretoria East','Gauteng','-25.806903','28.350425','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('13','Bike & Bos Adventures (Donkerhoek)','Pretoria East','Gauteng','-25.776625','28.469915','bikebosadventures.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('14','Northern Farm','Diepsloot','Gauteng','-25.93752','27.988887','https://www.northernfarm.co.za/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('15','Van Gaalen','Hartebeespoort','Gauteng','-25.788021','27.770906','www.vangaalen.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('16','Modderfontein','Modderfontein','Gauteng','-26.063972','28.122781','http://www.centralparktrails.co.za/','Our trail signage is extrememly visible and well plotted out which ensures that our riders do not get lost on their adventures at our wonderful, safe bike park.','https://www.sa-venues.com/things-to-do/gauteng/gallery/5134/1.jpg'),('17','Rietvlei','Alberton','Gauteng','-26.311867','28.07975','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('18','Thaba Trials','Alberton','Gauteng','-26.300976','28.048549','www.thabatrails.webs.com','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('19','PWC Cycle Park','Bryanston','Gauteng','-26.038622','28.026194','www.cyclepark.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('2','Fonteine (safety concerns)','Pretoria Central','Gauteng','-25.776302','28.195453','http://www.gauteng.net/attractions/fountains_valley_resort/','Fountains Valley mountain biking trails are located adjecent to the Groenkloof Nature Reserve and used to be very popular amongst both weekend riders as well as primary cross country events. The trails have fallen into disrepair and are no longer safe to cycle alone.','https://sc-events.s3.amazonaws.com/4056137/main.jpg'),('20','Braamfontein Spruit','Sandton','Gauteng','-26.114677','28.019146','http://www.spruit.co.za/wordpress/','The Braamfontein Spruit (from the Afrikaans for \"spring of brambles\") is the longest stream in Johannesburg, South Africa. It originates in Barnato Park High School, Braamfontein. It is covered and canalised near its source, but once the river runs out of the Parkview Golf Course, it runs through pa','https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Braamfontein_Spruit.jpg/1024px-Braamfontein_Spruit.jpg'),('21','Botanic Gardens? (a bike park?)','','Gauteng','-26.153894','28.002537','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('22','Cradle','Muldersdrift','Gauteng','-25.987901','27.819086','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('23','Hakahana','Hartebeespoort','Gauteng','-25.775398','28.009588','www.hakahanatrails.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('24','Kings Kloof','Krugersdorp','Gauteng','-26.041168','27.781001','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('25','Cradle Moon (formerly Heia Safaris)','Muldersdrift','Gauteng','-25.962249','27.858947','www.cradlemoon.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('26','Avianto Trails','Muldersdrift','Gauteng','-26.027365','27.840651','www.avianto.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('27','Suikerbosrand','Heidelberg','Gauteng','-26.452091','28.220185','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('28','Hennops Hiking & MTB Trails','Centurion','Gauteng','-25.797227','27.987457','http://www.hennopstrails.co.za/mtb-trail-2/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('29','Hero Hobby Park','Krugersdorp','Gauteng','-26.088818','27.819508','www.hero-adventure.co.za','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('3','Klapperkop','Pretoria Central','Gauteng','-25.784142','28.204264','http://www.showme.co.za/pretoria/tourism/klapperkop-nature-rerserve/','Klapperkop offers visitors panoramic views of Pretoria in all directions. Not only is it fast becoming a popular jogging, cycling and mountain biking destination, but with the introduction of game, you’re able to do a quick game drive for free, right here in the heart of Pretoria.','https://static.bikehub.co.za/forum/uploads/monthly_10_2015/post-13836-0-00823300-1444740524.jpg'),('30','Rotsvas (Private Trail)','Pretoria East','Gauteng','-25.786891','28.349063','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('31','Huddle Park','Linksfield','Gauteng','-26.1556','28.120078','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('32','Wattlespring Trails (near Witpoortjie School) ','Bapsfontein','Gauteng','-25.953891','28.485905','http://www.wattlespringscountryclub.co.za/mountain-bike-trails.html','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('33','Trails near Bronkhorstspruit Dam???','Bronkhorstspruit','Gauteng','','','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('34','Wonderboom - Friends of Magaliesberg','Pretoria North','Gauteng','-25.693353','28.203049','https://www.bikehub.co.za/forum/topic/135290-friends-of-magaliesberg/','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('35','Riverfields','Kempton Park','Gauteng','','','https://www.facebook.com/pages/Riverfields-Mtb-Trail/410901169267461','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('36','Krugersdorp Nature Reserve','Krugersdorp','Gauteng','-26.091056','27.708316','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('37','Via Mala (Private)','Pretoria East','Gauteng','-25.866313','28.380284','https://www.facebook.com/viamalamtbandtrailrun/','contact Sarel Marais to arrange',NULL),('38','Roodeplaatdam Nature Reserve','Roodeplaat Dam','Gauteng','-25.62165','28.342182','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('39','Ezemvelo Nature Reserve','Bronkhorstspruit','Gauteng','-25.708188','28.929088','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('4','Voortrekker Monument ','Pretoria Central','Gauteng','-25.778833','28.170498','http://www.vtm.org.za/cycling-running-hiking-trails/','The trails are located in a safe, fenced in nature reserve with a wide variety of fauna and flora and adequate safe parking. There are several different facilities on site that can be utilized such as road cycling routes; hiking and running routes; horse rides with a guide; a braai and picnic area a','http://cdn-www.bicycling.co.za/wp-content/uploads/2016/07/XCO.jpg'),('40','Benoni Country Club','Benoni','Gauteng','-26.172236','28.340811','','?The Whistler Mountain?Bike Park?is considered the No. 1 lift accessed downhill?bike park?in the world, and for good reason. Boasting more terrain than any other?bike park?in North America with 4,900 vertical feet of lift-serviced descending trails.',NULL),('41','Pembi Test Segments',NULL,NULL,NULL,NULL,NULL,NULL,'http://cdn.mos.bikeradar.imdserve.com/images/bikes-and-gear/bikes/mountain-bikes/hardtail/tomtom-1501598547896-ylic7l22ht2l-630-80.jpg'),('5','Wolwespruit','Pretoria East','Gauteng','-25.809929','28.263303','http://www.wolwespruit.co.za/','Wolwespruit is a mountain bike and trail run park located in Erasmuskloof, Pretoria. Named after the spruit that runs through it, the park\'s hand crafted single track trails provide a flowing and adrenaline filled adventure for beginner to advanced skilled riders and runners.','http://www.wolwespruit.co.za/images/gallery/08.jpg'),('6','Rosemary Hill (Donkerhoek)','Pretoria East','Gauteng','-25.790836','28.431661','http://rosemaryhill.co.za/mtb-trails-pretoria/','Rosemary Hill’s award winning MTB Trail, (“Big MTB Year” Trail Winner for 2014 and 2015), is suitable for mountain bike riders, trail runners and hikers alike, offering a great day out on the very clearly marked trails of approximately 6km, 10km and 33km.http://www.wolwespruit.co.za/','http://www.ride.co.za/wp-content/uploads/2015/11/Rosemary-Hill-7.jpg'),('7','Big Red Barn','Irene','Gauteng','-25.92733','28.229979','http://www.thebigredbarn.co.za/','Open daily (including public holidays) from sunrise to sunset.\r\nReady to get peddling? Trail Runners are also welcome. The Big Red Barn set on Sunlawns Estate is the perfect place for mountain biking. There are 36 kms of scenic tracks which weave and wind through a a shady gum tree forest, over rock','http://www.thebigredbarn.co.za/wp-content/uploads/2014/03/Home1.jpg'),('8','Tierpoort Trails','Pretoria East','Gauteng','-25.888505','28.389414','http://www.tierpoorttrails.co.za/','Tierpoort Trails venture through a Children’s Play Park / Function venue (Forest Fun), Pecan Nut orchids, a Pine forest, an unspoilt indigenous “koppie“ area and beautiful lawns and trees. The prime location, just off Garsfontein Road / M30, on Tierpoort Road, makes for easy access and is 600m from ','http://www.tierpoorttrails.co.za/images/gallery/_MG_0119-Medium.JPG'),('9','Ingaadi Spa & Events','Pretoria East','Gauteng','-25.92236','28.445375','http://www.ingaadi.co.za/','WELL-BEING, INDULGENCE, FESTIVITY, CELEBRATION, BUSINESS, LEARNING OR JUST RELAXATION...','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIWFhUXFxgVFxYYGBgZFxcVFhcXGBUXGhYdHSggGB0lHRgVIjEhJSktLi4uFx8zODMtNygtLisBCgoKDg0');
/*!40000 ALTER TABLE `parks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parksegments`
--

DROP TABLE IF EXISTS `parksegments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parksegments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `park` varchar(10) DEFAULT NULL,
  `segment` varchar(20) DEFAULT NULL,
  `segmentname` varchar(100) DEFAULT NULL,
  `stravaurl` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parksegments`
--

LOCK TABLES `parksegments` WRITE;
/*!40000 ALTER TABLE `parksegments` DISABLE KEYS */;
INSERT INTO `parksegments` VALUES (1,'5','9241667','Wolwespruit 1st singletrack to bottom','https://www.strava.com/segments/9241667'),(3,'1','8426266','GroenKloof Start SingleTrail 01','https://www.strava.com/segments/8426266'),(4,'16','3701508','Tar road climb','https://www.strava.com/segments/3701508'),(6,'20','3470419','Conrad to Bridge',''),(7,'11','12323823','KwaggaTwist','https://www.strava.com/segments/12323823'),(8,'41','6055169','Wanderers Road Climb','https://www.strava.com/segments/6055169'),(9,'41','13653744','Moreleta Spruit to Old Farm HUGE CLIMB','https://www.strava.com/segments/13653744'),(10,'41','674672','WTF','https://www.strava.com/segments/674672'),(11,'11','7432199','Supertube to Sefedi Start','https://www.strava.com/segments/7432199'),(12,'11','8357308','Rocks 2 Crocs','https://www.strava.com/segments/8357308'),(13,'11','8305199','Bundu bash Single track','https://www.strava.com/segments/8305199'),(14,'41','4283388','Glendower Rd Up','https://www.strava.com/segments/4283388'),(15,'41','643999','Woodhill','https://www.strava.com/segments/643999'),(16,'5','7850036','S Benders','https://www.strava.com/segments/7850036'),(17,'5','7844343','Wolwespruit Climb 1','https://www.strava.com/segments/7844343'),(18,'5','12584208','Feel the burn!!','https://www.strava.com/segments/12584208'),(19,'16','6473114','Second Red Single Track','https://www.strava.com/segments/6473114'),(20,'16','9666525','Last Pain','https://www.strava.com/segments/9666525'),(21,'16','3832941','Quarter Mile Drag','https://www.strava.com/segments/3832941'),(22,'16','4020385','Anthony Close Climb','https://www.strava.com/segments/4020385'),(24,'5','7919312','Glass Factory','https://www.strava.com/segments/7919312'),(25,'41','15587442','Zwavelpoort Kicker\r\n','https://www.strava.com/segments/15587442'),(26,'41','6931900','Rietvlei view CE to Grootfontein CE Climb','https://www.strava.com/segments/6931900'),(27,'1','8430326','GroenKloof R21 SingleTrail 01','https://www.strava.com/segments/8430326'),(28,'1','6343384','To the parking lot','https://www.strava.com/segments/6343384'),(29,'1','6343329','Up from the parking lot','https://www.strava.com/segments/6343329'),(30,'6','13350341','Northgate loop and split past A&T ®','https://www.strava.com/segments/13350341'),(31,'6','1372541','Rosemary Gumtree Section','https://www.strava.com/segments/1372541'),(32,'6','5700167','R964 Climb','https://www.strava.com/segments/5700167'),(33,'6','11259410','Flat & fast','https://www.strava.com/segments/11259410'),(34,'6','6683013','Forest Section on Rosemary #2','https://www.strava.com/segments/6683013'),(35,'10','11804383','Hazeldean Red 1st singletrack section','https://www.strava.com/segments/11804383'),(36,'10','12904806','Bridge to Cowhouse Road','https://www.strava.com/segments/12904806'),(37,'10','7948907','cow patty','https://www.strava.com/segments/7948907'),(38,'10','10799663','Plains of Hazeldean','https://www.strava.com/segments/10799663'),(39,'8','11942305','Tierpoort Singletrack - River to Top','https://www.strava.com/segments/11942305'),(40,'8','16089886','Tierpoort start','https://www.strava.com/segments/16089886'),(41,'8','14810787','LT Shake','https://www.strava.com/segments/14810787'),(42,'7','9195286','All Trails start Here','https://www.strava.com/segments/9195286'),(43,'7','3008429','Mandlas Power Ride','https://www.strava.com/segments/3008429'),(44,'7','10953947','BRB Berms','https://www.strava.com/segments/10953947'),(45,'7','7035676','Barn Sprint','https://www.strava.com/segments/7035676'),(46,'7','10277235','Last stretch to red barn','https://www.strava.com/segments/10277235'),(47,'11','8923437','Up-Shongololo','https://www.strava.com/segments/8923437'),(48,'11','10016356','Home James! (LnC)','https://www.strava.com/segments/10016356');
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'Eminds','Pembi','eminds11@gmail.com','25404748','ba422c3ca7be65aa4791d597c7b4c84d8fb34b75','$2a$10$shkm.Uw5QQrewL4WDBaPne60IC4TyQgD6ZwmRP66p2bznbHEsryW2',1,NULL,NULL,NULL),(2,NULL,'Carl','Scholtz','trackz11@gmail.com','194278','2d8f781d16bb0a5196b725b98eac2b893ab3a10b','$2a$10$i.uy9AlzN.dm4SjKvGYMG.2QS5M7s7UGCv.83YTGiv5/NbRIZVwbi',1,NULL,NULL,NULL),(3,NULL,'PembiOrg','Pembi','pembiorg@gmail.com',NULL,'','$2y$10$v/6glNM9GkAHKdPdl0mQvulqnLwbk0fI9ZN17RURHTtjG/lyPnbry',1,NULL,NULL,NULL),(8,'pete','Julien','Absalon','ju@ju.com','','','$2a$10$AZUiCh5UkktXCcYPbbWZX.m25YSkI51hIScUn7hxrNUvq9PUCL7zG',0,NULL,NULL,NULL),(9,'dog','Emily','Batty','em@em.com','','','$2a$10$AdAYlEQahm7JmjC3HrFyCuQnvRFlIZchzVbzsvOtmxGobBUyzgm8O',0,NULL,NULL,NULL),(10,'cat','Jolanda','Neff','jo@jo.com','','','$2a$10$1I2.WzEeYYy0EBV3BLgmMOO1o29TabrckzXDz8fOYY4u2xkYgxdye',0,NULL,NULL,NULL),(11,'cow','Nino','Schurter','nino@nino.com','','','$2a$10$ldmc17066cF5mCKflJLp9eFaypOHkfEeAf11DRGXdbr58QRRvNKAC',0,NULL,NULL,NULL),(12,NULL,'Albert','Einstein','al@al.com',NULL,'','$2a$10$EVk8eBPSP6L.Hn.HCrNcSOQdkeg8Aq8ms5DQiiynKkqLEW5mZ3eRK',0,NULL,NULL,NULL),(13,NULL,'Tom','Sawyer','tom@tom.com','','','$2a$10$fsRbhgNtkvdou7gCb0JfJev3eDWc.wvYzoT.ZfWuWHVgXIC3zsx9a',0,NULL,NULL,NULL),(14,NULL,'Bernard','Hinault','be@be.com','','','$2a$10$u8FMGl8Nyg7roWv9KF3hc.ugNksa.ssTJUcKzK3mmerXGPGTMV.Ai',0,'0000-00-00 00:00:00',NULL,NULL),(15,NULL,'abc','def','abc@abc.com',NULL,NULL,'$2a$10$EZsoHtyxuLfkuZd5kS99oOtcgKELOFPyBNhCC39z9nc0VATbHu9zG',0,'0000-00-00 00:00:00',NULL,NULL),(16,NULL,'abc','abc','aaa@aaa.com',NULL,NULL,'$2a$10$r8gsKqvFzFDIz17H/1T6Aud/bF1RyyEqfrtyS.qTHnRkLXM4QgkOq',0,'0000-00-00 00:00:00',NULL,NULL),(17,NULL,'bbb','bbb','bbb@bbb.com',NULL,NULL,'$2a$10$uDfsoid16YUQkqIv/QyKE.ymo/bkb4Yct/EbJjifFWkFBU9Qva.VK',0,'0000-00-00 00:00:00',NULL,NULL),(18,NULL,'ccc','ccc','ccc@ccc.com',NULL,NULL,'$2a$10$OPPqe6pzmPKsf/xQNwI44uuCpdF8jdwf02aC7pZKk72/BhteNdlW6',0,'0000-00-00 00:00:00',NULL,NULL),(19,NULL,'ddd','ddd','ddd@ddd.com',NULL,NULL,'$2a$10$HxOurmWEPTpzBWzDPWo1kOiqbZuKK.zFGWIjENHcOZUFUK0Uihaq6',0,'0000-00-00 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitslog`
--

DROP TABLE IF EXISTS `visitslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visitslog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `user` varchar(10) CHARACTER SET latin1 NOT NULL,
  `park` varchar(10) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitslog`
--

LOCK TABLES `visitslog` WRITE;
/*!40000 ALTER TABLE `visitslog` DISABLE KEYS */;
INSERT INTO `visitslog` VALUES (1,'2017-08-04 00:00:00','1','5'),(2,'2017-08-04 00:00:00','1','4'),(3,'2017-09-15 00:00:00','3','14'),(4,'2017-09-16 00:00:00','5','25'),(5,'2017-09-16 00:00:00','5','20'),(6,'2017-09-16 00:00:00','4','22'),(7,'2017-09-17 00:00:00','1','1'),(8,'2017-09-10 00:00:00','1','11'),(9,'2017-09-16 00:00:00','4','13'),(10,'2017-09-16 00:00:00','4','14'),(11,'2017-09-15 00:00:00','3','5'),(12,'2017-09-15 00:00:00','2','5'),(13,'2017-09-15 00:00:00','1','5'),(15,'2017-09-24 00:00:00','10','11'),(16,'2017-08-19 09:40:59','8','1'),(17,'2017-08-19 09:40:59','8','1'),(18,'2017-08-19 09:40:59','10','1'),(19,'2017-08-19 09:40:59','8','1'),(20,'2017-08-19 09:40:59','12','1'),(21,'2017-08-19 09:40:59','13','1'),(22,'2017-08-19 09:40:59','13','1'),(23,'2017-09-27 17:30:07','10','41'),(24,'2017-09-27 17:30:07','14','41'),(25,'2017-09-27 17:30:07','10','41'),(26,'2017-09-27 17:30:07','8','41'),(27,'2017-08-29 16:40:29','10','5'),(28,'2017-08-29 16:40:29','10','5'),(29,'2017-01-01 00:00:00','12','22'),(30,'0000-00-00 00:00:00','12','22'),(31,'1970-01-16 00:21:26','12','22'),(32,'1970-01-16 00:21:26','12','22'),(33,'0000-00-00 00:00:00','12','22'),(34,'0000-00-00 00:00:00','12','22'),(35,'0000-00-00 00:00:00','12','22'),(36,'0000-00-00 00:00:00','12','22'),(37,'0000-00-00 00:00:00','12','22'),(38,'2017-08-29 16:40:29','10','5'),(39,'2017-08-29 16:40:29','10','5'),(40,'2017-08-29 16:40:29','8','5'),(41,'2017-07-14 13:46:35','14','16'),(42,'2017-07-14 13:46:35','11','16'),(44,'2017-07-14 13:46:35','1','16'),(45,'2017-07-14 13:46:35','1','16'),(46,'2017-06-17 09:38:03','1','41');
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

-- Dump completed on 2017-10-17 19:30:14
