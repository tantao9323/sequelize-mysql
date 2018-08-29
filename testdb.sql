/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50638
 Source Host           : 127.0.0.1:3306
 Source Schema         : testdb

 Target Server Type    : MySQL
 Target Server Version : 50638
 File Encoding         : 65001

 Date: 29/08/2018 22:01:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `mobile_prefix` varchar(64) NOT NULL,
  `mobile` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '86', '12345678901', '123456');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
