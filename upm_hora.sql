-- --------------------------------------------------------
-- Servidor:                     10.16.0.79
-- Versão do servidor:           10.1.35-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para tratativa
CREATE DATABASE IF NOT EXISTS `tratativa` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tratativa`;

-- Copiando estrutura para tabela tratativa.upm_hora
CREATE TABLE IF NOT EXISTS `upm_hora` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `confT` int(100) DEFAULT NULL,
  `errosT` int(100) DEFAULT NULL,
  `upm` int(100) DEFAULT NULL,
  `difErros` int(100) DEFAULT NULL,
  `horasG` varchar(50) DEFAULT NULL,
  `horasD` varchar(50) DEFAULT NULL,
  `meta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tratativa.upm_hora: 10 rows
/*!40000 ALTER TABLE `upm_hora` DISABLE KEYS */;
INSERT INTO `upm_hora` (`id`, `confT`, `errosT`, `upm`, `difErros`, `horasG`, `horasD`, `meta`) VALUES
	(1, 52059, 51, 500, 51, '20:02 / 00:15', '00:15', 800),
	(2, 52300, 60, 680, 9, '20:15', '00:20', 800),
	(3, 54000, 67, 900, 7, '20:32', '00:30', 800),
	(4, 54, 70, 700, 10, '20:50', '00:15', 800),
	(5, 54, 77, 850, 8, '21:00', '00:16', 800),
	(6, 54, 80, 921, 11, '21:10', '00:25', 800),
	(7, 54, 90, 790, 15, '21:33', '00:30', 800),
	(8, 2, 100, 933, 30, '22:02', '00:10', 800),
	(9, 22, 111, 988, 25, '22:15', '00:05', 800),
	(10, 22, 11, 1200, 25, '23:00', '00:17', 800);
/*!40000 ALTER TABLE `upm_hora` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
