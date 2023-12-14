-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2018 at 06:21 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webapp1`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `cat` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `cat`) VALUES
(1, 'Fish & Chips'),
(1, 'Food Stands'),
(1, 'Seafood'),
(2, 'Bars'),
(2, 'Canadian (New)'),
(3, 'Bars'),
(3, 'Canadian (New)'),
(4, 'Brasseries'),
(4, 'Gastropubs'),
(5, 'Breakfast & Brunch'),
(5, 'Cafes'),
(6, 'Breakfast & Brunch'),
(7, 'Italian'),
(8, 'Seafood'),
(8, 'Steakhouses'),
(9, 'French'),
(9, 'Indian'),
(9, 'Seafood'),
(10, 'Noodles'),
(11, 'Breakfast & Brunch'),
(11, 'Cafes'),
(12, 'Breakfast & Brunch'),
(12, 'Comfort Food'),
(13, 'Asian Fusion'),
(13, 'Sushi Bars'),
(13, 'Tapas/Small Plates'),
(14, 'Seafood'),
(14, 'Steakhouses'),
(15, 'French'),
(16, 'Asian Fusion'),
(16, 'Seafood'),
(17, 'Canadian (New)'),
(18, 'Bars'),
(18, 'Seafood'),
(19, 'Asian Fusion'),
(19, 'Chinese'),
(19, 'Japanese'),
(20, 'Breakfast & Brunch'),
(20, 'Cocktail Bars'),
(20, 'Diners'),
(21, 'Spanish'),
(21, 'Tapas/Small Plates'),
(21, 'Wine Bars'),
(22, 'Bars'),
(22, 'Canadian (New)'),
(23, 'Italian'),
(24, 'Tapas Bars'),
(25, 'Japanese'),
(26, 'Bars'),
(26, 'Seafood'),
(27, 'Breakfast & Brunch'),
(27, 'Chicken Shop'),
(28, 'American (Traditional)'),
(28, 'Steakhouses'),
(29, 'Butcher'),
(29, 'Vegan'),
(30, 'Diners'),
(31, 'Chinese'),
(32, 'Seafood'),
(32, 'Seafood Markets'),
(33, 'Lounges'),
(33, 'Tapas/Small Plates'),
(34, 'Middle Eastern'),
(35, 'Burgers'),
(35, 'Salad'),
(35, 'Soup'),
(36, 'Diners'),
(36, 'Lounges'),
(37, 'Asian Fusion'),
(38, 'Canadian (New)'),
(39, 'Coffee & Tea'),
(39, 'Delis'),
(39, 'Spanish'),
(40, 'Lounges'),
(40, 'Seafood'),
(41, 'Breakfast & Brunch'),
(41, 'Canadian (New)'),
(41, 'Diners'),
(42, 'Mexican'),
(43, 'Greek'),
(44, 'Asian Fusion'),
(44, 'Himalayan/Nepalese'),
(45, 'American (Traditional)'),
(45, 'Breakfast & Brunch'),
(45, 'Cafes'),
(46, 'Breakfast & Brunch'),
(46, 'Cocktail Bars'),
(46, 'French'),
(47, 'Cocktail Bars'),
(47, 'Comfort Food'),
(48, 'Cocktail Bars'),
(48, 'Seafood'),
(49, 'Korean'),
(50, 'Ramen'),
(51, 'Bars'),
(51, 'Seafood'),
(52, 'Breakfast & Brunch'),
(52, 'Gluten-Free'),
(52, 'Vegetarian'),
(53, 'Breakfast & Brunch'),
(53, 'Mexican'),
(54, 'Beer Bar'),
(54, 'Burgers'),
(54, 'Sandwiches'),
(55, 'Delis'),
(55, 'Sandwiches'),
(55, 'Ukrainian'),
(56, 'Breakfast & Brunch'),
(56, 'Cafes'),
(56, 'Seafood'),
(57, 'Canadian (New)'),
(58, 'Breakfast & Brunch'),
(58, 'Tapas/Small Plates'),
(59, 'Cocktail Bars'),
(59, 'Seafood'),
(60, 'Canadian (New)'),
(61, 'Italian'),
(62, 'Polish'),
(63, 'Irish'),
(63, 'Irish Pub'),
(63, 'Music Venues'),
(64, 'Chinese'),
(65, 'Barbeque'),
(66, 'Cafes'),
(66, 'Sandwiches'),
(67, 'Hawaiian'),
(67, 'Poke'),
(68, 'Canadian (New)'),
(68, 'Seafood'),
(69, 'Ramen'),
(70, 'Breakfast & Brunch'),
(70, 'Seafood'),
(70, 'Tapas/Small Plates'),
(71, 'Seafood'),
(72, 'Asian Fusion'),
(72, 'Korean'),
(73, 'Indonesian'),
(74, 'Burgers'),
(74, 'Cocktail Bars'),
(74, 'Sandwiches'),
(75, 'Cafes'),
(75, 'Coffee & Tea'),
(75, 'Desserts'),
(76, 'Thai'),
(77, 'Tapas Bars'),
(77, 'Wine Bars'),
(78, 'American (Traditional)'),
(78, 'Breakfast & Brunch'),
(78, 'British'),
(79, 'Italian'),
(80, 'American (Traditional)'),
(80, 'Salad'),
(81, 'Desserts'),
(81, 'Patisserie/Cake Shop'),
(81, 'Poutineries'),
(82, 'Fish & Chips'),
(83, 'Breakfast & Brunch'),
(83, 'Vegan'),
(83, 'Vegetarian'),
(84, 'Pizza'),
(85, 'Breakfast & Brunch'),
(86, 'Canadian (New)'),
(86, 'Pubs'),
(86, 'Tapas/Small Plates'),
(87, 'Italian'),
(88, 'Japanese'),
(88, 'Seafood'),
(88, 'Sushi Bars'),
(89, 'Tapas Bars'),
(90, 'Gastropubs'),
(90, 'Pubs'),
(91, 'Tapas/Small Plates'),
(91, 'Wine Bars'),
(92, 'Breakfast & Brunch'),
(92, 'Sandwiches'),
(92, 'Soup'),
(93, 'Korean'),
(94, 'Canadian (New)'),
(94, 'Cocktail Bars'),
(95, 'Thai'),
(96, 'Burgers'),
(96, 'Salad'),
(97, 'Chinese'),
(98, 'Japanese'),
(98, 'Korean'),
(99, 'Breakfast & Brunch'),
(99, 'Seafood'),
(99, 'Wine Bars'),
(100, 'Italian'),
(101, 'American (Traditional)'),
(101, 'Breakfast & Brunch'),
(101, 'Pubs'),
(102, 'Meat Shops'),
(102, 'Sandwiches'),
(103, 'Breakfast & Brunch'),
(103, 'Diners'),
(104, 'Breakfast & Brunch'),
(104, 'Coffee & Tea'),
(105, 'Vietnamese'),
(106, 'Asian Fusion'),
(106, 'Vietnamese'),
(107, 'Caribbean'),
(107, 'Food'),
(108, 'Cafes'),
(109, 'Chinese'),
(110, 'Japanese'),
(110, 'Sushi Bars'),
(111, 'Canadian (New)'),
(111, 'Cocktail Bars'),
(112, 'Breakfast & Brunch'),
(113, 'Food Trucks'),
(113, 'Mexican'),
(114, 'Bistros'),
(114, 'Canadian (New)'),
(115, 'Cocktail Bars'),
(115, 'French'),
(115, 'Wine Bars'),
(116, 'Himalayan/Nepalese'),
(117, 'Breakfast & Brunch'),
(117, 'Cafes'),
(117, 'Chinese'),
(118, 'Mexican'),
(119, 'Breakfast & Brunch'),
(119, 'Burgers'),
(119, 'Pubs'),
(120, 'Cafes'),
(121, 'Gluten-Free'),
(121, 'Vegan'),
(121, 'Vegetarian'),
(122, 'Poutineries'),
(123, 'Italian'),
(123, 'Mediterranean'),
(124, 'Burgers'),
(124, 'Canadian (New)'),
(125, 'Brewpubs'),
(125, 'Canadian (New)'),
(125, 'Venues & Event Spaces'),
(126, 'African'),
(127, 'Vietnamese'),
(128, 'Beer, Wine & Spirits'),
(128, 'Cafes'),
(129, 'Breakfast & Brunch'),
(130, 'Vietnamese'),
(131, 'Desserts'),
(131, 'Waffles'),
(132, 'Bakeries'),
(132, 'Cafes'),
(132, 'Comfort Food'),
(133, 'Asian Fusion'),
(133, 'Gluten-Free'),
(133, 'Indian'),
(134, 'Korean'),
(134, 'Pubs'),
(135, 'Japanese'),
(135, 'Sushi Bars'),
(136, 'Mexican'),
(136, 'Sandwiches'),
(137, 'Vietnamese'),
(138, 'Mexican'),
(139, 'American (Traditional)'),
(139, 'Pubs'),
(140, 'Mediterranean'),
(140, 'Seafood'),
(140, 'Steakhouses'),
(141, 'Food Stands'),
(141, 'Middle Eastern'),
(142, 'Japanese'),
(143, 'Bars'),
(143, 'Canadian (New)'),
(143, 'Comfort Food'),
(144, 'Breakfast & Brunch'),
(144, 'Music Venues'),
(144, 'Tapas/Small Plates'),
(145, 'Cafes'),
(145, 'Vegan'),
(145, 'Vegetarian'),
(146, 'American (Traditional)'),
(146, 'Burgers'),
(146, 'Gluten-Free'),
(147, 'Sushi Bars'),
(148, 'Colombian'),
(148, 'Gluten-Free'),
(149, 'Delis'),
(149, 'Indian'),
(149, 'Sandwiches'),
(150, 'Breakfast & Brunch'),
(151, 'Breakfast & Brunch'),
(152, 'Canadian (New)'),
(153, 'Cafes'),
(154, 'Pizza'),
(155, 'Chinese'),
(156, 'Burgers'),
(156, 'Food Trucks'),
(157, 'Seafood'),
(158, 'Bars'),
(158, 'Steakhouses'),
(159, 'Bars'),
(159, 'Seafood'),
(159, 'Sushi Bars'),
(160, 'Dim Sum'),
(160, 'Seafood'),
(161, 'Food Court'),
(162, 'Cafes'),
(162, 'Caterers'),
(163, 'Burgers'),
(164, 'Italian'),
(165, 'American (Traditional)'),
(165, 'Bars'),
(165, 'Comedy Clubs'),
(166, 'Cafes'),
(166, 'Tabletop Games'),
(167, 'Lounges'),
(167, 'Mediterranean'),
(168, 'Cafes'),
(168, 'Tapas/Small Plates'),
(168, 'Wine Bars'),
(169, 'Turkish'),
(170, 'Food Stands'),
(170, 'Hot Dogs'),
(170, 'Sandwiches'),
(171, 'Ramen'),
(172, 'Japanese'),
(172, 'Korean'),
(173, 'Korean'),
(174, 'Ethiopian'),
(175, 'Taiwanese'),
(176, 'Bars'),
(176, 'Desserts'),
(176, 'Sushi Bars'),
(177, 'Bakeries'),
(177, 'Breakfast & Brunch'),
(177, 'Cafes'),
(178, 'Mexican'),
(179, 'Canadian (New)'),
(179, 'Fish & Chips'),
(180, 'Cafes'),
(181, 'Gluten-Free'),
(181, 'Thai'),
(181, 'Vegetarian'),
(182, 'Delis'),
(182, 'Sandwiches'),
(183, 'Barbeque'),
(184, 'Breakfast & Brunch'),
(184, 'Burgers'),
(184, 'Ice Cream & Frozen Yogurt'),
(185, 'Fish & Chips'),
(185, 'Seafood'),
(186, 'Latin American'),
(187, 'Indian'),
(188, 'Sandwiches'),
(189, 'Canadian (New)'),
(190, 'Bars'),
(190, 'Canadian (New)'),
(191, 'Bakeries'),
(191, 'Cafes'),
(191, 'Delis'),
(192, 'Korean'),
(192, 'Vietnamese'),
(193, 'Burgers'),
(193, 'Pizza'),
(193, 'Pubs'),
(194, 'Bars'),
(194, 'Seafood'),
(195, 'Cafes'),
(196, 'Buffets'),
(196, 'Vegan'),
(196, 'Vegetarian'),
(197, 'Bakeries'),
(197, 'Cafes'),
(198, 'Chinese'),
(198, 'Japanese'),
(199, 'Cafes'),
(200, 'Burgers'),
(201, 'Chinese'),
(201, 'Vegan'),
(201, 'Vegetarian'),
(202, 'Breakfast & Brunch'),
(203, 'Japanese'),
(203, 'Sushi Bars'),
(204, 'Cafes'),
(205, 'Sushi Bars'),
(206, 'Desserts'),
(206, 'Ice Cream & Frozen Yogurt'),
(206, 'Vegan'),
(207, 'Cafes'),
(208, 'Breakfast & Brunch'),
(208, 'Burgers'),
(208, 'Canadian (New)'),
(209, 'Bakeries'),
(209, 'Breakfast & Brunch'),
(209, 'Coffee & Tea'),
(210, 'Steakhouses'),
(211, 'Buffets'),
(211, 'Chinese'),
(212, 'Ramen'),
(213, 'Bistros'),
(214, 'Italian'),
(215, 'Pizza'),
(216, 'Canadian (New)'),
(216, 'Comfort Food'),
(216, 'Steakhouses'),
(217, 'Asian Fusion'),
(217, 'Japanese'),
(217, 'Sushi Bars'),
(218, 'American (Traditional)'),
(218, 'Breakfast & Brunch'),
(218, 'Diners'),
(219, 'Asian Fusion'),
(219, 'Malaysian'),
(219, 'Singaporean'),
(220, 'American (Traditional)'),
(220, 'Burgers'),
(220, 'Hot Dogs'),
(221, 'Chinese'),
(221, 'Noodles'),
(222, 'Ethiopian'),
(222, 'Gluten-Free'),
(222, 'Vegetarian'),
(223, 'American (Traditional)'),
(223, 'Cocktail Bars'),
(224, 'Thai'),
(225, 'Chinese'),
(225, 'Japanese'),
(226, 'Mexican'),
(227, 'Mexican'),
(228, 'Sandwiches'),
(229, 'Breakfast & Brunch'),
(229, 'Burgers'),
(229, 'Sandwiches'),
(230, 'Italian'),
(231, 'Indonesian'),
(231, 'Japanese'),
(231, 'Mexican'),
(232, 'Cafes'),
(232, 'Coffee & Tea'),
(232, 'Vegetarian'),
(233, 'Burgers'),
(233, 'Fast Food'),
(233, 'Hot Dogs'),
(234, 'Cheese Shops'),
(234, 'French'),
(234, 'Sandwiches'),
(235, 'Japanese'),
(236, 'Canadian (New)'),
(236, 'Seafood'),
(237, 'Gluten-Free'),
(237, 'Vegan'),
(237, 'Vegetarian'),
(238, 'Greek'),
(238, 'Lounges'),
(239, 'Cafes'),
(240, 'Asian Fusion'),
(240, 'Noodles'),
(241, 'Japanese'),
(241, 'Sushi Bars'),
(242, 'Cafes'),
(243, 'Hot Dogs'),
(244, 'Chinese'),
(244, 'Noodles'),
(245, 'Chinese'),
(246, 'British'),
(246, 'Canadian (New)'),
(246, 'Pubs'),
(247, 'Food Trucks'),
(247, 'Sandwiches'),
(247, 'Seafood'),
(248, 'Greek'),
(249, 'Beer, Wine & Spirits'),
(249, 'Restaurants'),
(250, 'Asian Fusion'),
(250, 'Noodles'),
(251, 'Cafes'),
(251, 'Desserts'),
(252, 'Sushi Bars'),
(253, 'Japanese'),
(253, 'Sushi Bars'),
(254, 'Canadian (New)'),
(255, 'Meat Shops'),
(255, 'Mediterranean'),
(256, 'Vietnamese'),
(257, 'Korean'),
(258, 'Canadian (New)'),
(258, 'Wine Bars'),
(259, 'Gastropubs'),
(259, 'Pubs'),
(260, 'Cafes'),
(261, 'Fish & Chips'),
(262, 'Bars'),
(262, 'Pizza'),
(263, 'Japanese'),
(263, 'Sushi Bars'),
(264, 'Burgers'),
(264, 'Music Venues'),
(264, 'Pubs'),
(265, 'Seafood'),
(265, 'Thai'),
(265, 'Vegetarian'),
(266, 'Japanese'),
(266, 'Sushi Bars'),
(267, 'Italian'),
(267, 'Sandwiches'),
(267, 'Vegan'),
(268, 'Moroccan'),
(269, 'Juice Bars & Smoothies'),
(269, 'Sandwiches'),
(270, 'Breakfast & Brunch'),
(270, 'Fast Food'),
(270, 'Gluten-Free'),
(271, 'Caribbean'),
(272, 'American (Traditional)'),
(272, 'Cafes'),
(272, 'Canadian (New)'),
(273, 'Japanese'),
(273, 'Sushi Bars'),
(274, 'Chicken Wings'),
(275, 'Japanese'),
(276, 'Bars'),
(276, 'Breakfast & Brunch'),
(276, 'Gastropubs'),
(277, 'Pizza'),
(278, 'Diners'),
(279, 'Cafes'),
(280, 'Delis'),
(280, 'Pizza'),
(281, 'Bakeries'),
(281, 'Coffee & Tea'),
(281, 'Sandwiches'),
(282, 'Polish'),
(283, 'American (Traditional)'),
(283, 'Gluten-Free'),
(283, 'Mediterranean'),
(284, 'Chinese'),
(285, 'Cafes'),
(286, 'Coffee & Tea'),
(286, 'Greek'),
(286, 'Mediterranean'),
(287, 'Japanese'),
(287, 'Sushi Bars'),
(288, 'Vietnamese'),
(289, 'American (Traditional)'),
(289, 'Burgers'),
(290, 'Restaurants'),
(291, 'Cafes'),
(292, 'Coffee & Tea'),
(292, 'Sandwiches'),
(293, 'Indian'),
(294, 'Breakfast & Brunch'),
(294, 'Canadian (New)'),
(294, 'Pubs'),
(295, 'Mediterranean'),
(295, 'Pizza'),
(295, 'Salad'),
(296, 'Seafood'),
(297, 'Diners'),
(298, 'Breakfast & Brunch'),
(298, 'Canadian (New)'),
(299, 'American (Traditional)'),
(299, 'Canadian (New)'),
(299, 'Steakhouses'),
(300, 'Japanese'),
(300, 'Sushi Bars'),
(301, 'Beer Bar'),
(301, 'British'),
(302, 'Fish & Chips'),
(303, 'Butcher'),
(303, 'Delis'),
(303, 'Sandwiches'),
(304, 'Chinese'),
(305, 'Chinese'),
(306, 'Vietnamese'),
(307, 'Chinese'),
(308, 'Cafes'),
(309, 'Indian'),
(310, 'Canadian (New)'),
(310, 'Lounges'),
(311, 'Japanese'),
(312, 'Breakfast & Brunch'),
(312, 'Burgers'),
(312, 'Canadian (New)'),
(313, 'Thai'),
(314, 'Chinese'),
(314, 'Seafood'),
(315, 'Burgers'),
(315, 'Seafood'),
(316, 'Sandwiches'),
(317, 'Breakfast & Brunch'),
(317, 'Canadian (New)'),
(317, 'Gluten-Free'),
(318, 'Latin American'),
(318, 'Mexican'),
(319, 'Coffee & Tea'),
(319, 'Sandwiches'),
(320, 'Thai'),
(321, 'Chinese'),
(322, 'Restaurants'),
(323, 'Burgers'),
(323, 'Comfort Food'),
(324, 'Chinese'),
(324, 'Fish & Chips'),
(325, 'Chinese'),
(326, 'Indian'),
(327, 'Indian'),
(328, 'Indian'),
(329, 'Gluten-Free'),
(330, 'Bakeries'),
(330, 'Gluten-Free'),
(331, 'Canadian (New)'),
(331, 'Coffee & Tea'),
(331, 'Gluten-Free'),
(332, 'Fish & Chips'),
(333, 'Burgers'),
(333, 'Seafood'),
(334, 'Chinese'),
(335, 'Cafes'),
(336, 'Burgers'),
(336, 'Chicken Wings'),
(337, 'Mexican'),
(338, 'Asian Fusion'),
(338, 'Noodles'),
(339, 'Barbeque'),
(339, 'Korean'),
(340, 'Buffets'),
(340, 'Chinese'),
(341, 'Delis'),
(341, 'Sandwiches'),
(342, 'Seafood'),
(342, 'Soup'),
(342, 'Thai'),
(343, 'American (Traditional)'),
(343, 'Comfort Food'),
(344, 'Italian'),
(344, 'Pizza'),
(345, 'Chinese'),
(346, 'Indian'),
(347, 'Japanese'),
(347, 'Sushi Bars'),
(348, 'Indian'),
(349, 'Delis'),
(350, 'Imported Food'),
(350, 'Thai'),
(351, 'Canadian (New)'),
(351, 'Lounges'),
(351, 'Sports Bars'),
(352, 'Cafes'),
(352, 'Italian'),
(352, 'Pizza'),
(353, 'Chinese'),
(353, 'Seafood'),
(353, 'Taiwanese'),
(354, 'Burgers'),
(354, 'Fast Food'),
(355, 'Seafood'),
(356, 'Delis'),
(356, 'Sandwiches'),
(357, 'Food Trucks'),
(357, 'Mexican'),
(357, 'Vegetarian'),
(358, 'Japanese'),
(358, 'Sushi Bars'),
(359, 'Canadian (New)'),
(359, 'Gastropubs'),
(360, 'Japanese'),
(360, 'Sushi Bars'),
(361, 'Burgers'),
(361, 'Canadian (New)'),
(362, 'Butcher'),
(362, 'Delis'),
(362, 'Meat Shops'),
(363, 'Cafes'),
(363, 'Gluten-Free'),
(363, 'Vegan'),
(364, 'Juice Bars & Smoothies'),
(364, 'Vegan'),
(364, 'Vegetarian'),
(365, 'Asian Fusion'),
(365, 'Japanese'),
(365, 'Sushi Bars'),
(366, 'Ice Cream & Frozen Yogurt'),
(366, 'Juice Bars & Smoothies'),
(366, 'Salad'),
(367, 'Caribbean'),
(367, 'Salad'),
(367, 'Soup'),
(368, 'Canadian (New)'),
(368, 'Chinese'),
(369, 'Japanese'),
(369, 'Sushi Bars'),
(370, 'Delis'),
(370, 'Sandwiches'),
(371, 'Chinese'),
(372, 'Breakfast & Brunch'),
(372, 'Waffles'),
(373, 'Hot Dogs'),
(374, 'Cafes'),
(374, 'Health Food Store'),
(374, 'Juice Bars & Smoothies'),
(375, 'American (Traditional)'),
(376, 'Bakeries'),
(376, 'Coffee & Tea'),
(376, 'Gluten-Free'),
(377, 'American (Traditional)'),
(377, 'Italian'),
(377, 'Pizza'),
(378, 'Sandwiches'),
(379, 'Fish & Chips'),
(379, 'Food Stands'),
(380, 'Pizza'),
(381, 'Restaurants'),
(382, 'Chinese'),
(383, 'Japanese'),
(384, 'Greek'),
(385, 'Pizza'),
(386, 'Japanese'),
(386, 'Sushi Bars'),
(387, 'Buffets'),
(387, 'Chinese'),
(387, 'Japanese'),
(388, 'Fish & Chips'),
(388, 'Seafood'),
(389, 'Chinese'),
(390, 'Japanese'),
(390, 'Seafood'),
(390, 'Steakhouses'),
(391, 'Seafood'),
(392, 'Breakfast & Brunch'),
(392, 'British'),
(392, 'Tea Rooms'),
(393, 'Convenience Stores'),
(393, 'Filipino'),
(394, 'Vietnamese'),
(395, 'Breakfast & Brunch'),
(395, 'Cafes'),
(396, 'Butcher'),
(396, 'Delis'),
(396, 'Sandwiches'),
(397, 'Italian'),
(398, 'Burgers'),
(398, 'Desserts'),
(398, 'Pubs'),
(399, 'Vietnamese'),
(400, 'Cafes'),
(400, 'Pubs'),
(400, 'Venues & Event Spaces'),
(401, 'Juice Bars & Smoothies'),
(401, 'Salad'),
(401, 'Soup'),
(402, 'Japanese'),
(402, 'Sushi Bars'),
(403, 'Burgers'),
(404, 'Breakfast & Brunch'),
(404, 'Coffee & Tea'),
(404, 'Sandwiches'),
(405, 'Japanese'),
(405, 'Sushi Bars'),
(406, 'Cafes'),
(407, 'Breakfast & Brunch'),
(408, 'Chinese'),
(409, 'Cafes'),
(410, 'Fish & Chips'),
(411, 'American (Traditional)'),
(411, 'Bars'),
(412, 'Japanese'),
(412, 'Sushi Bars'),
(413, 'Breakfast & Brunch'),
(413, 'Canadian (New)'),
(414, 'Korean'),
(415, 'American (Traditional)'),
(416, 'Fast Food'),
(416, 'Sandwiches'),
(417, 'Chinese'),
(417, 'Seafood'),
(418, 'Indian'),
(418, 'Seafood'),
(418, 'Vegan'),
(419, 'Mexican'),
(420, 'Vietnamese'),
(421, 'Vietnamese'),
(422, 'Mexican'),
(423, 'Breakfast & Brunch'),
(424, 'Cafes'),
(425, 'Asian Fusion'),
(425, 'Breakfast & Brunch'),
(425, 'Italian'),
(426, 'Burgers'),
(426, 'Salad'),
(426, 'Vegan'),
(427, 'Italian'),
(427, 'Pizza'),
(428, 'Bars'),
(428, 'Canadian (New)'),
(429, 'Breakfast & Brunch'),
(430, 'Fast Food'),
(430, 'Greek'),
(431, 'Canadian (New)'),
(432, 'Pizza'),
(433, 'Breakfast & Brunch'),
(433, 'Burgers'),
(433, 'Canadian (New)'),
(434, 'Asian Fusion'),
(434, 'Chinese'),
(435, 'Pizza'),
(436, 'Cafes'),
(437, 'Fast Food'),
(437, 'Greek'),
(438, 'Japanese'),
(438, 'Sushi Bars'),
(439, 'Desserts'),
(439, 'Pizza'),
(439, 'Sandwiches'),
(440, 'Coffee & Tea'),
(440, 'Sandwiches'),
(441, 'Asian Fusion'),
(442, 'Cafes'),
(442, 'Coffee & Tea'),
(443, 'Bars'),
(443, 'Restaurants'),
(444, 'Delis'),
(444, 'Sandwiches'),
(444, 'Soup'),
(445, 'Cafes'),
(445, 'Gluten-Free'),
(446, 'American (Traditional)'),
(447, 'Coffee & Tea'),
(447, 'Greek'),
(447, 'Mediterranean'),
(448, 'Pizza'),
(449, 'Pizza'),
(450, 'Bars'),
(450, 'Burgers'),
(451, 'Japanese'),
(451, 'Sushi Bars'),
(452, 'Cafes'),
(452, 'Coffee & Tea'),
(453, 'Restaurants'),
(454, 'Pizza'),
(455, 'Pizza'),
(456, 'Cafes'),
(457, 'Chinese'),
(458, 'Bubble Tea'),
(458, 'Taiwanese'),
(459, 'Bars'),
(459, 'Diners'),
(460, 'Hot Dogs'),
(460, 'Italian'),
(460, 'Pizza'),
(461, 'Breakfast & Brunch'),
(461, 'Coffee & Tea'),
(461, 'Sandwiches'),
(462, 'Asian Fusion'),
(463, 'Japanese'),
(464, 'Chicken Wings'),
(464, 'Pizza'),
(465, 'Pizza'),
(466, 'Thai'),
(467, 'Canadian (New)'),
(468, 'Chinese'),
(469, 'Breakfast & Brunch'),
(469, 'Coffee & Tea'),
(469, 'Gluten-Free'),
(470, 'Thai'),
(471, 'Japanese'),
(472, 'Breakfast & Brunch'),
(472, 'Coffee & Tea'),
(472, 'Doughnuts'),
(473, 'Vietnamese'),
(474, 'Food Stands'),
(474, 'Seafood'),
(475, 'Breakfast & Brunch'),
(475, 'Cafes'),
(475, 'Sandwiches'),
(476, 'Breakfast & Brunch'),
(476, 'Coffee & Tea'),
(476, 'Juice Bars & Smoothies'),
(477, 'Pizza'),
(478, 'Seafood'),
(479, 'Cafes'),
(479, 'Juice Bars & Smoothies'),
(479, 'Sandwiches'),
(480, 'Canadian (New)'),
(481, 'Pizza'),
(482, 'Pizza'),
(483, 'Bakeries'),
(483, 'Salad'),
(483, 'Sandwiches'),
(484, 'Cafes'),
(484, 'Delis'),
(485, 'Canadian (New)'),
(485, 'Chinese'),
(486, 'Italian'),
(486, 'Pizza'),
(487, 'Pizza'),
(488, 'Delis'),
(488, 'Sandwiches'),
(489, 'Pizza'),
(489, 'Sports Bars'),
(490, 'Japanese'),
(490, 'Sushi Bars'),
(491, 'Fast Food'),
(491, 'Sandwiches'),
(492, 'Cafes'),
(492, 'Coffee & Tea'),
(492, 'Gluten-Free'),
(493, 'Coffee & Tea'),
(493, 'Sandwiches'),
(493, 'Soup'),
(494, 'Delis'),
(494, 'Grocery'),
(495, 'Japanese'),
(495, 'Sushi Bars'),
(496, 'Mediterranean'),
(496, 'Sandwiches'),
(497, 'Caterers'),
(497, 'Delis'),
(497, 'Personal Chefs'),
(498, 'Chinese'),
(499, 'Burgers'),
(500, 'Sandwiches'),
(501, 'Indian'),
(502, 'Buffets'),
(503, 'Delis'),
(503, 'Sandwiches'),
(504, 'Canadian (New)'),
(505, 'Fast Food'),
(505, 'Greek'),
(506, 'Breakfast & Brunch'),
(506, 'Burgers'),
(506, 'Cafes'),
(507, 'Cafes'),
(507, 'Coffee & Tea'),
(507, 'Gluten-Free'),
(508, 'Buffets'),
(508, 'Chinese'),
(509, 'Fast Food'),
(509, 'Sandwiches'),
(510, 'Japanese'),
(510, 'Seafood'),
(510, 'Sushi Bars'),
(511, 'Cafes'),
(511, 'Coffee & Tea'),
(512, 'Sushi Bars'),
(513, 'Caterers'),
(514, 'Japanese'),
(514, 'Sushi Bars'),
(515, 'American (Traditional)'),
(515, 'Mexican'),
(515, 'Tex-Mex'),
(516, 'Burgers'),
(516, 'Fast Food'),
(517, 'Pizza'),
(518, 'Chinese'),
(519, 'Restaurants'),
(520, 'Pizza'),
(521, 'Pizza'),
(521, 'Salad'),
(522, 'Cafes'),
(522, 'Coffee & Tea'),
(522, 'Gluten-Free'),
(523, 'Pizza'),
(524, 'Chinese'),
(525, 'Pizza'),
(526, 'Gluten-Free'),
(526, 'Thai'),
(526, 'Vegetarian'),
(527, 'Chinese'),
(527, 'Thai'),
(528, 'Chinese'),
(528, 'Korean'),
(529, 'Chicken Shop'),
(529, 'Chicken Wings'),
(529, 'Fast Food'),
(530, 'Cafes'),
(531, 'Cafes'),
(532, 'Cafes'),
(533, 'Sandwiches'),
(534, 'Delis'),
(535, 'Mexican'),
(536, 'Pizza'),
(537, 'Chicken Wings'),
(537, 'Pizza'),
(537, 'Sandwiches'),
(538, 'Japanese'),
(539, 'Sandwiches'),
(540, 'Mexican'),
(541, 'Diners'),
(542, 'Japanese'),
(543, 'Burgers'),
(543, 'Fast Food'),
(544, 'Chicken Wings'),
(544, 'Chinese'),
(545, 'Seafood'),
(546, 'Vietnamese'),
(547, 'Fast Food'),
(547, 'Ice Cream & Frozen Yogurt'),
(548, 'American (Traditional)'),
(548, 'Bars'),
(548, 'Fruits & Veggies'),
(549, 'Caribbean'),
(550, 'Grocery'),
(550, 'Persian/Iranian'),
(551, 'Cafes'),
(552, 'Cafes'),
(553, 'Chinese'),
(554, 'Chinese'),
(554, 'Coffee & Tea'),
(554, 'Fast Food'),
(555, 'Pizza'),
(556, 'Pizza'),
(557, 'Sushi Bars'),
(558, 'Burgers'),
(558, 'Fast Food'),
(559, 'Burgers'),
(559, 'Fast Food'),
(560, 'Buffets'),
(561, 'Cafes'),
(562, 'Coffee & Tea'),
(562, 'Salad'),
(562, 'Sandwiches'),
(563, 'Fish & Chips'),
(564, 'Italian'),
(565, 'Indian'),
(565, 'Pakistani'),
(566, 'Pizza'),
(567, 'Cafes'),
(568, 'Breakfast & Brunch'),
(568, 'Burgers'),
(568, 'Fast Food'),
(569, 'Sandwiches'),
(570, 'Burgers'),
(570, 'Fast Food'),
(571, 'Breakfast & Brunch'),
(571, 'French'),
(571, 'Italian'),
(572, 'Middle Eastern'),
(573, 'Pizza'),
(574, 'Cafes'),
(575, 'Breakfast & Brunch'),
(576, 'Donairs'),
(576, 'Pizza'),
(577, 'Burgers'),
(577, 'Fast Food'),
(578, 'Fast Food'),
(578, 'Sandwiches'),
(579, 'Japanese'),
(580, 'Pizza'),
(581, 'Fast Food'),
(581, 'Salad'),
(581, 'Sandwiches'),
(582, 'Sushi Bars'),
(583, 'Gluten-Free'),
(583, 'Indian'),
(583, 'Vegan'),
(584, 'Fast Food'),
(584, 'Sandwiches'),
(585, 'Fast Food'),
(585, 'Ice Cream & Frozen Yogurt'),
(586, 'Fast Food'),
(586, 'Sandwiches'),
(587, 'Burgers'),
(587, 'Fast Food'),
(588, 'Chinese'),
(589, 'Cheese Shops'),
(589, 'Delis'),
(590, 'Fast Food'),
(591, 'Burgers'),
(591, 'Fast Food'),
(592, 'Burgers'),
(592, 'Fast Food'),
(593, 'Pizza'),
(594, 'Italian'),
(595, 'Fast Food'),
(595, 'Sandwiches'),
(596, 'Pizza'),
(597, 'Fast Food'),
(597, 'Ice Cream & Frozen Yogurt'),
(598, 'Chicken Shop'),
(598, 'Chicken Wings'),
(598, 'Fast Food'),
(599, 'Chicken Wings'),
(599, 'Pizza'),
(599, 'Salad'),
(600, 'Burgers'),
(600, 'Fast Food'),
(601, 'Italian'),
(602, 'Chicken Wings'),
(602, 'Pizza'),
(602, 'Salad'),
(603, 'Pizza'),
(604, 'Chicken Wings'),
(604, 'Pizza'),
(604, 'Salad'),
(605, 'Burgers'),
(605, 'Fast Food'),
(606, 'Burgers'),
(606, 'Fast Food'),
(607, 'Pizza'),
(608, 'Coffee & Tea'),
(608, 'Gluten-Free'),
(609, 'Chinese'),
(610, 'Fast Food'),
(611, 'Fast Food'),
(611, 'Sandwiches'),
(612, 'Fast Food'),
(612, 'Specialty Food'),
(613, 'Pizza'),
(614, 'Sandwiches'),
(615, 'Pizza'),
(616, 'Fast Food'),
(616, 'Sandwiches'),
(617, 'Pizza'),
(618, 'Pizza'),
(619, 'Burgers'),
(619, 'Fast Food'),
(619, 'Hot Dogs'),
(620, 'Pizza'),
(621, 'Burgers'),
(621, 'Fast Food'),
(622, 'Burgers'),
(622, 'Fast Food');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`,`cat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;