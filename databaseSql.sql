-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Mar 02, 2019 at 09:29 AM
-- Server version: 5.5.60-MariaDB
-- PHP Version: 7.2.15

CREATE SCHEMA `thanhtamluxury`;
USE `thanhtamluxury`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thanhtamluxury`
--

-- --------------------------------------------------------

--
-- Table structure for table `Account`
--

CREATE TABLE IF NOT EXISTS `Account` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Appointment`
--

CREATE TABLE IF NOT EXISTS `Appointment` (
  `id` int(11) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `note` text,
  `phone` varchar(50) NOT NULL,
  `isNew` bit(1) DEFAULT b'1'
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Table structure for table `Banner`
--

CREATE TABLE IF NOT EXISTS `Banner` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Header`
--

CREATE TABLE IF NOT EXISTS `Header` (
  `id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 DEFAULT NULL,
  `to` varchar(50) DEFAULT NULL,
  `exact` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ImageItem`
--

CREATE TABLE IF NOT EXISTS `ImageItem` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `serviceItemId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Location`
--

CREATE TABLE IF NOT EXISTS `Location` (
  `id` int(11) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `googleLocation` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PriceDetail`
--

CREATE TABLE IF NOT EXISTS `PriceDetail` (
  `id` int(11) NOT NULL,
  `applyDate` date DEFAULT NULL,
  `price` float NOT NULL,
  `serviceItemId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ServiceItem`
--

CREATE TABLE IF NOT EXISTS `ServiceItem` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `serviceType` varchar(255) DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `price` float DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `mainImage` varchar(255) DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `priceDescription` text CHARACTER SET utf8mb4,
  `shortDescription` text CHARACTER SET utf8mb4,
  `description` text CHARACTER SET utf8mb4,
  `isActive` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `Appointment`
--
ALTER TABLE `Appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Banner`
--
ALTER TABLE `Banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Header`
--
ALTER TABLE `Header`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `ImageItem`
--
ALTER TABLE `ImageItem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Location`
--
ALTER TABLE `Location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `PriceDetail`
--
ALTER TABLE `PriceDetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ServiceItem`
--
ALTER TABLE `ServiceItem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Appointment`
--
ALTER TABLE `Appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=101;
--
-- AUTO_INCREMENT for table `Banner`
--
ALTER TABLE `Banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Header`
--
ALTER TABLE `Header`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ImageItem`
--
ALTER TABLE `ImageItem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Location`
--
ALTER TABLE `Location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `PriceDetail`
--
ALTER TABLE `PriceDetail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ServiceItem`
--
ALTER TABLE `ServiceItem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `ImageItem`
--
ALTER TABLE `ImageItem`
  ADD CONSTRAINT `ImageItem_ibfk_1` FOREIGN KEY (`id`) REFERENCES `ServiceItem` (`id`);

--
-- Constraints for table `PriceDetail`
--
ALTER TABLE `PriceDetail`
  ADD CONSTRAINT `PriceDetail_ibfk_1` FOREIGN KEY (`id`) REFERENCES `ServiceItem` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
