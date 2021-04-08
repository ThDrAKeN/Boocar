-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           5.7.18 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Export de la structure de la base pour boocar
CREATE DATABASE IF NOT EXISTS `boocar` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `boocar`;

-- Export de la structure de la table boocar. garage
CREATE TABLE IF NOT EXISTS `garage` (
  `idG` int(11) NOT NULL DEFAULT '0',
  `nom` varchar(50) DEFAULT NULL,
  `adr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idG`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Export de données de la table boocar.garage : 1 rows
/*!40000 ALTER TABLE `garage` DISABLE KEYS */;
INSERT INTO `garage` (`idG`, `nom`, `adr`) VALUES
	(0, 'Axel', 'dsqdqsdq');
/*!40000 ALTER TABLE `garage` ENABLE KEYS */;

-- Export de la structure de la table boocar. marque
CREATE TABLE IF NOT EXISTS `marque` (
  `marqueVh` varchar(50) NOT NULL DEFAULT '',
  `imgLogo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`marqueVh`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Export de données de la table boocar.marque : 1 rows
/*!40000 ALTER TABLE `marque` DISABLE KEYS */;
INSERT INTO `marque` (`marqueVh`, `imgLogo`) VALUES
	('Porsche', 'https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png'),
	('Mercedes', 'http://pngimg.com/uploads/mercedes/mercedes_PNG80145.png');
/*!40000 ALTER TABLE `marque` ENABLE KEYS */;

-- Export de la structure de la procédure boocar. recupVhDispo
DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `recupVhDispo`()
SELECT DISTINCT voiture.idV , color, img, model, prix, specs, marque.imgLogo, marque.marqueVh as 'marque' 
from Voiture, marque, reserver, reservation 
where marque.marqueVh = voiture.marqueVh 
AND reservation.idR = reserver.idR 
AND voiture.idV not in(select idV from reserver, reservation where reservation.idR = reserver.idR AND reservation.statu = "working")//
DELIMITER ;

-- Export de la structure de la table boocar. reservation
CREATE TABLE IF NOT EXISTS `reservation` (
  `idR` int(11) NOT NULL AUTO_INCREMENT,
  `demandeur` varchar(50) DEFAULT NULL,
  `statu` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idR`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Export de données de la table boocar.reservation : 2 rows
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` (`idR`, `demandeur`, `statu`) VALUES
	(2, 'axel', 'terminer'),
	(4, 'axel', 'terminer');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;

-- Export de la structure de la table boocar. reserver
CREATE TABLE IF NOT EXISTS `reserver` (
  `idV` int(11) NOT NULL DEFAULT '0',
  `idR` int(11) NOT NULL DEFAULT '0',
  `id_attente` varchar(50) DEFAULT NULL,
  `dateHeure` varchar(50) DEFAULT NULL,
  `numeroTel` varchar(50) DEFAULT NULL,
  `adrMail` varchar(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idV`,`idR`),
  KEY `idR` (`idR`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Export de données de la table boocar.reserver : 2 rows
/*!40000 ALTER TABLE `reserver` DISABLE KEYS */;
INSERT INTO `reserver` (`idV`, `idR`, `id_attente`, `dateHeure`, `numeroTel`, `adrMail`, `nom`, `prenom`) VALUES
	(1, 2, '1245', '2020', '06254845', 'test', 'test', 'test'),
	(3, 4, '1245', '2020', '06254845', 'test', 'test', 'test');
/*!40000 ALTER TABLE `reserver` ENABLE KEYS */;

-- Export de la structure de la table boocar. voiture
CREATE TABLE IF NOT EXISTS `voiture` (
  `idV` int(11) NOT NULL DEFAULT '0',
  `color` varchar(50) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `prix` varchar(50) DEFAULT NULL,
  `specs` json DEFAULT NULL,
  `idG` int(11) NOT NULL,
  `marqueVh` varchar(50) NOT NULL,
  PRIMARY KEY (`idV`),
  KEY `idG` (`idG`),
  KEY `marqueVh` (`marqueVh`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Export de données de la table boocar.voiture : 3 rows
/*!40000 ALTER TABLE `voiture` DISABLE KEYS */;
INSERT INTO `voiture` (`idV`, `color`, `img`, `model`, `prix`, `specs`, `idG`, `marqueVh`) VALUES
	(1, 'rgb(38, 85, 255)', 'https://files.porsche.com/filestore/image/multimedia/none/992-c4s-modelimage-sideshot/model/c02b5f4d-e826-11e8-bec8-0019999cd470/porsche-model.png', '911 Carrera 4S', '430', '{"hp": 443, "acc": 3.6, "speed": 306}', 0, 'Porsche'),
	(2, 'rgb(219, 18, 18)', 'https://files.porsche.com/filestore/image/multimedia/none/9ya-e3-gts-modelimage-sideshot/model/457bfc31-a4e1-11ea-80ca-005056bbdc38/porsche-model.png', 'Cayenne GTS', '380', '{"hp": 420, "acc": 5.8, "speed": 256}', 0, 'Porsche'),
	(3, 'rgb(240, 240, 240)', 'https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg-gt/coupe-c190/_jcr_content/image.MQ6.2.2x.20201023171440.png', 'AMG GT Coupé', '380', '{"hp": 522, "acc": 3.8, "speed": 310}', 0, 'Mercedes');
/*!40000 ALTER TABLE `voiture` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
