-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2019 at 08:18 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `java_login`
--

CREATE TABLE `java_login` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `java_login`
--

INSERT INTO `java_login` (`id`, `username`, `password`) VALUES
(1, 'vaibhav', '123'),
(2, 'Akash', '123'),
(3, 'thor', '345'),
(4, 'captain', '345');

-- --------------------------------------------------------

--
-- Table structure for table `java_product`
--

CREATE TABLE `java_product` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `java_product`
--

INSERT INTO `java_product` (`id`, `name`, `price`) VALUES
(1, 'Laptop', 56000),
(2, 'Processor', 55000),
(3, 'Switches', 6000),
(4, 'Graphics card', 44000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `java_login`
--
ALTER TABLE `java_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `java_product`
--
ALTER TABLE `java_product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `java_login`
--
ALTER TABLE `java_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `java_product`
--
ALTER TABLE `java_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
