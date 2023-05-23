/*
Navicat MySQL Data Transfer

Source Server         : Local
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : trip_django

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-10-10 18:25:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `accounts_login_record`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_login_record`;
CREATE TABLE `accounts_login_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `ip` varchar(32) NOT NULL,
  `address` varchar(32) DEFAULT NULL,
  `source` varchar(16) DEFAULT NULL,
  `version` varchar(16) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_login_record_user_id_9f39d7aa_fk_account_user_id` (`user_id`),
  CONSTRAINT `accounts_login_record_user_id_9f39d7aa_fk_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `account_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of accounts_login_record
-- ----------------------------
INSERT INTO `accounts_login_record` VALUES ('1', '13500000001', '127.0.0.1', null, '', '', '2020-09-06 15:33:48.415350', '3');
INSERT INTO `accounts_login_record` VALUES ('2', '13500000002', '127.0.0.1', null, '', '', '2020-09-06 15:36:47.616888', '4');
INSERT INTO `accounts_login_record` VALUES ('3', '13500000003', '127.0.0.1', null, 'h5', '', '2020-09-06 17:56:59.332694', '5');
INSERT INTO `accounts_login_record` VALUES ('4', '13500000004', '127.0.0.1', null, 'h5', '', '2020-09-06 18:00:18.922310', '6');
INSERT INTO `accounts_login_record` VALUES ('5', '13500000005', '127.0.0.1', null, 'h5', '', '2020-09-06 18:06:55.343497', '7');
INSERT INTO `accounts_login_record` VALUES ('6', '13300000001', '127.0.0.1', null, 'h5', '', '2020-09-13 10:02:19.834403', '8');

-- ----------------------------
-- Table structure for `accounts_user_profile`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_user_profile`;
CREATE TABLE `accounts_user_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `real_name` varchar(32) NOT NULL,
  `email` varchar(128) DEFAULT NULL,
  `is_email_valid` tinyint(1) NOT NULL,
  `phone_no` varchar(20) DEFAULT NULL,
  `is_phone_valid` tinyint(1) NOT NULL,
  `sex` smallint(6) NOT NULL,
  `age` smallint(6) NOT NULL,
  `source` varchar(16) DEFAULT NULL,
  `version` varchar(16) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `accounts_user_profile_user_id_0080de5e_fk_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `account_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of accounts_user_profile
-- ----------------------------
INSERT INTO `accounts_user_profile` VALUES ('2', '13500000000', '张三', null, '0', null, '0', '1', '24', null, null, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', '2');
INSERT INTO `accounts_user_profile` VALUES ('3', '13500000001', '', null, '0', null, '0', '1', '0', '', '', '2020-09-06 15:33:48.406372', '2020-09-06 15:33:48.406372', '3');
INSERT INTO `accounts_user_profile` VALUES ('4', '13500000002', '', null, '0', null, '0', '1', '0', '', '', '2020-09-06 15:36:47.612939', '2020-09-06 15:36:47.612939', '4');
INSERT INTO `accounts_user_profile` VALUES ('5', '13500000003', '', null, '0', null, '0', '1', '0', 'h5', '', '2020-09-06 17:56:59.326673', '2020-09-06 17:56:59.326673', '5');
INSERT INTO `accounts_user_profile` VALUES ('6', '13500000004', '', null, '0', null, '0', '1', '0', 'h5', '', '2020-09-06 18:00:18.914366', '2020-09-06 18:00:18.914366', '6');
INSERT INTO `accounts_user_profile` VALUES ('7', '13500000005', '', null, '0', null, '0', '1', '0', 'h5', '', '2020-09-06 18:06:55.336515', '2020-09-06 18:06:55.336515', '7');
INSERT INTO `accounts_user_profile` VALUES ('8', '13300000001', '', null, '0', null, '0', '1', '0', 'h5', '', '2020-09-13 10:02:19.825479', '2020-09-13 10:02:19.825479', '8');

-- ----------------------------
-- Table structure for `account_user`
-- ----------------------------
DROP TABLE IF EXISTS `account_user`;
CREATE TABLE `account_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(150) NOT NULL,
  `password` varchar(128) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `nickname` varchar(32) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `email` varchar(254) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `last_name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of account_user
-- ----------------------------
INSERT INTO `account_user` VALUES ('1', 'test', 'test', 'a', 'a', '2020-08-31 15:54:36.678870', '', '', '1', '0', '0', null, '');
INSERT INTO `account_user` VALUES ('2', '13500000000', 'pbkdf2_sha256$180000$hM3dpqNHdCmV$+pbQZtLwvoaY3HbsXxQW1Fns6hM72cjXmLn8BiLlSN8=', '/static/mine/avatar.png', '阿三', '2020-08-31 15:58:04.622122', 'admin@example.com', '', '1', '0', '0', '2020-09-14 18:50:52.064220', '');
INSERT INTO `account_user` VALUES ('3', '13500000001', 'pbkdf2_sha256$180000$iL9FQ3KtA7tD$rgcTcfL7JF4HZjioUgXim7hgJHOej4NnadQl/HWnioA=', '', '李四', '2020-09-06 15:33:48.255223', '', '', '1', '0', '0', '2020-09-14 16:42:02.865998', '');
INSERT INTO `account_user` VALUES ('4', '13500000002', 'pbkdf2_sha256$180000$33bO8JrWcbtX$qXolpWdfpFBKAKypQvtcObLYAxMmPCRYRCgpJiXsYjc=', '', '王五', '2020-09-06 15:36:47.466250', '', '', '1', '0', '0', '2020-09-06 15:36:47.615930', '');
INSERT INTO `account_user` VALUES ('5', '13500000003', 'pbkdf2_sha256$180000$ZgqF2AvWNWhq$ZMVKk3VptC7HmE55p1rQHehOJ0LFsAkK3Khz/qq+VgA=', '', 'ABC', '2020-09-06 17:56:59.187376', '', '', '1', '0', '0', '2020-09-06 17:56:59.331701', '');
INSERT INTO `account_user` VALUES ('6', '13500000004', 'pbkdf2_sha256$180000$w8zF1ZdTDpvG$aT+3zFKrtq3mdpCUaZFJ7ByYd0zBdsn1yx2DvcUu/fw=', '', '张思', '2020-09-06 18:00:18.801671', '', '', '1', '0', '0', '2020-09-06 18:01:00.743476', '');
INSERT INTO `account_user` VALUES ('7', '13500000005', 'pbkdf2_sha256$180000$DXuaJlYJpqGG$OAW/QiQ2UBpyJO02YqNuRuVV+bDH+znwyq5yG25Wjm4=', '', '13500000005', '2020-09-06 18:06:55.210984', '', '', '1', '0', '0', '2020-09-06 18:06:55.341501', '');
INSERT INTO `account_user` VALUES ('8', '13300000001', 'pbkdf2_sha256$180000$zNBD73EUa7J8$h1F+2nW0r9uy4JGZb0hoDsDkuTFSU/4qDcp0D0L3xH8=', '', 'Accc', '2020-09-13 10:02:19.696633', '', '', '1', '0', '0', '2020-09-13 10:02:19.832661', '');

-- ----------------------------
-- Table structure for `account_user_groups`
-- ----------------------------
DROP TABLE IF EXISTS `account_user_groups`;
CREATE TABLE `account_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_user_groups_user_id_group_id_4d09af3e_uniq` (`user_id`,`group_id`),
  KEY `account_user_groups_group_id_6c71f749_fk_auth_group_id` (`group_id`),
  CONSTRAINT `account_user_groups_group_id_6c71f749_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `account_user_groups_user_id_14345e7b_fk_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `account_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of account_user_groups
-- ----------------------------

-- ----------------------------
-- Table structure for `account_user_user_permissions`
-- ----------------------------
DROP TABLE IF EXISTS `account_user_user_permissions`;
CREATE TABLE `account_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_user_user_permis_user_id_permission_id_48bdd28b_uniq` (`user_id`,`permission_id`),
  KEY `account_user_user_pe_permission_id_66c44191_fk_auth_perm` (`permission_id`),
  CONSTRAINT `account_user_user_pe_permission_id_66c44191_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `account_user_user_pe_user_id_cc42d270_fk_account_u` FOREIGN KEY (`user_id`) REFERENCES `account_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of account_user_user_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for `auth_group`
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_group
-- ----------------------------
INSERT INTO `auth_group` VALUES ('1', '景点管理员');

-- ----------------------------
-- Table structure for `auth_group_permissions`
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_group_permissions
-- ----------------------------
INSERT INTO `auth_group_permissions` VALUES ('1', '1', '41');
INSERT INTO `auth_group_permissions` VALUES ('2', '1', '42');

-- ----------------------------
-- Table structure for `auth_permission`
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
INSERT INTO `auth_permission` VALUES ('1', 'Can add log entry', '1', 'add_logentry');
INSERT INTO `auth_permission` VALUES ('2', 'Can change log entry', '1', 'change_logentry');
INSERT INTO `auth_permission` VALUES ('3', 'Can delete log entry', '1', 'delete_logentry');
INSERT INTO `auth_permission` VALUES ('4', 'Can view log entry', '1', 'view_logentry');
INSERT INTO `auth_permission` VALUES ('5', 'Can add permission', '2', 'add_permission');
INSERT INTO `auth_permission` VALUES ('6', 'Can change permission', '2', 'change_permission');
INSERT INTO `auth_permission` VALUES ('7', 'Can delete permission', '2', 'delete_permission');
INSERT INTO `auth_permission` VALUES ('8', 'Can view permission', '2', 'view_permission');
INSERT INTO `auth_permission` VALUES ('9', 'Can add group', '3', 'add_group');
INSERT INTO `auth_permission` VALUES ('10', 'Can change group', '3', 'change_group');
INSERT INTO `auth_permission` VALUES ('11', 'Can delete group', '3', 'delete_group');
INSERT INTO `auth_permission` VALUES ('12', 'Can view group', '3', 'view_group');
INSERT INTO `auth_permission` VALUES ('13', 'Can add user', '4', 'add_user');
INSERT INTO `auth_permission` VALUES ('14', 'Can change user', '4', 'change_user');
INSERT INTO `auth_permission` VALUES ('15', 'Can delete user', '4', 'delete_user');
INSERT INTO `auth_permission` VALUES ('16', 'Can view user', '4', 'view_user');
INSERT INTO `auth_permission` VALUES ('17', 'Can add content type', '5', 'add_contenttype');
INSERT INTO `auth_permission` VALUES ('18', 'Can change content type', '5', 'change_contenttype');
INSERT INTO `auth_permission` VALUES ('19', 'Can delete content type', '5', 'delete_contenttype');
INSERT INTO `auth_permission` VALUES ('20', 'Can view content type', '5', 'view_contenttype');
INSERT INTO `auth_permission` VALUES ('21', 'Can add session', '6', 'add_session');
INSERT INTO `auth_permission` VALUES ('22', 'Can change session', '6', 'change_session');
INSERT INTO `auth_permission` VALUES ('23', 'Can delete session', '6', 'delete_session');
INSERT INTO `auth_permission` VALUES ('24', 'Can view session', '6', 'view_session');
INSERT INTO `auth_permission` VALUES ('25', 'Can add slider', '7', 'add_slider');
INSERT INTO `auth_permission` VALUES ('26', 'Can change slider', '7', 'change_slider');
INSERT INTO `auth_permission` VALUES ('27', 'Can delete slider', '7', 'delete_slider');
INSERT INTO `auth_permission` VALUES ('28', 'Can view slider', '7', 'view_slider');
INSERT INTO `auth_permission` VALUES ('29', 'Can add sight', '8', 'add_sight');
INSERT INTO `auth_permission` VALUES ('30', 'Can change sight', '8', 'change_sight');
INSERT INTO `auth_permission` VALUES ('31', 'Can delete sight', '8', 'delete_sight');
INSERT INTO `auth_permission` VALUES ('32', 'Can view sight', '8', 'view_sight');
INSERT INTO `auth_permission` VALUES ('33', 'Can add image related', '9', 'add_imagerelated');
INSERT INTO `auth_permission` VALUES ('34', 'Can change image related', '9', 'change_imagerelated');
INSERT INTO `auth_permission` VALUES ('35', 'Can delete image related', '9', 'delete_imagerelated');
INSERT INTO `auth_permission` VALUES ('36', 'Can view image related', '9', 'view_imagerelated');
INSERT INTO `auth_permission` VALUES ('37', 'Can add comment', '10', 'add_comment');
INSERT INTO `auth_permission` VALUES ('38', 'Can change comment', '10', 'change_comment');
INSERT INTO `auth_permission` VALUES ('39', 'Can delete comment', '10', 'delete_comment');
INSERT INTO `auth_permission` VALUES ('40', 'Can view comment', '10', 'view_comment');
INSERT INTO `auth_permission` VALUES ('41', 'Can add info', '11', 'add_info');
INSERT INTO `auth_permission` VALUES ('42', 'Can change info', '11', 'change_info');
INSERT INTO `auth_permission` VALUES ('43', 'Can delete info', '11', 'delete_info');
INSERT INTO `auth_permission` VALUES ('44', 'Can view info', '11', 'view_info');
INSERT INTO `auth_permission` VALUES ('45', 'Can add ticket', '12', 'add_ticket');
INSERT INTO `auth_permission` VALUES ('46', 'Can change ticket', '12', 'change_ticket');
INSERT INTO `auth_permission` VALUES ('47', 'Can delete ticket', '12', 'delete_ticket');
INSERT INTO `auth_permission` VALUES ('48', 'Can view ticket', '12', 'view_ticket');
INSERT INTO `auth_permission` VALUES ('49', 'Can add user', '13', 'add_user');
INSERT INTO `auth_permission` VALUES ('50', 'Can change user', '13', 'change_user');
INSERT INTO `auth_permission` VALUES ('51', 'Can delete user', '13', 'delete_user');
INSERT INTO `auth_permission` VALUES ('52', 'Can view user', '13', 'view_user');
INSERT INTO `auth_permission` VALUES ('53', 'Can add profile', '14', 'add_profile');
INSERT INTO `auth_permission` VALUES ('54', 'Can change profile', '14', 'change_profile');
INSERT INTO `auth_permission` VALUES ('55', 'Can delete profile', '14', 'delete_profile');
INSERT INTO `auth_permission` VALUES ('56', 'Can view profile', '14', 'view_profile');
INSERT INTO `auth_permission` VALUES ('57', 'Can add login record', '15', 'add_loginrecord');
INSERT INTO `auth_permission` VALUES ('58', 'Can change login record', '15', 'change_loginrecord');
INSERT INTO `auth_permission` VALUES ('59', 'Can delete login record', '15', 'delete_loginrecord');
INSERT INTO `auth_permission` VALUES ('60', 'Can view login record', '15', 'view_loginrecord');
INSERT INTO `auth_permission` VALUES ('61', 'Can add order item', '16', 'add_orderitem');
INSERT INTO `auth_permission` VALUES ('62', 'Can change order item', '16', 'change_orderitem');
INSERT INTO `auth_permission` VALUES ('63', 'Can delete order item', '16', 'delete_orderitem');
INSERT INTO `auth_permission` VALUES ('64', 'Can view order item', '16', 'view_orderitem');
INSERT INTO `auth_permission` VALUES ('65', 'Can add order', '17', 'add_order');
INSERT INTO `auth_permission` VALUES ('66', 'Can change order', '17', 'change_order');
INSERT INTO `auth_permission` VALUES ('67', 'Can delete order', '17', 'delete_order');
INSERT INTO `auth_permission` VALUES ('68', 'Can view order', '17', 'view_order');
INSERT INTO `auth_permission` VALUES ('69', 'Can add payment', '18', 'add_payment');
INSERT INTO `auth_permission` VALUES ('70', 'Can change payment', '18', 'change_payment');
INSERT INTO `auth_permission` VALUES ('71', 'Can delete payment', '18', 'delete_payment');
INSERT INTO `auth_permission` VALUES ('72', 'Can view payment', '18', 'view_payment');

-- ----------------------------
-- Table structure for `auth_user`
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_user
-- ----------------------------
INSERT INTO `auth_user` VALUES ('1', 'pbkdf2_sha256$180000$acLWodrmSq0x$STBwo846K670xR6NRIe3HtuHyJ+O7ldaSErTKAK5vsI=', '2020-08-31 15:17:25.670402', '1', 'admin', '', '', 'admin@example.com', '1', '1', '2020-08-31 15:06:49.942215');
INSERT INTO `auth_user` VALUES ('2', 'pbkdf2_sha256$180000$yB05jXkjkPXg$KlwcV6GRd9oAWKFkJk/2ZX0KQnlV8VHmuop4cRl+GBY=', '2020-08-31 15:19:44.282880', '0', 'zhangsan', '', '', 'zhangsan@exmample.com', '1', '1', '2020-08-31 15:10:32.000000');

-- ----------------------------
-- Table structure for `auth_user_groups`
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_user_groups
-- ----------------------------
INSERT INTO `auth_user_groups` VALUES ('1', '2', '1');

-- ----------------------------
-- Table structure for `auth_user_user_permissions`
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_user_user_permissions
-- ----------------------------
INSERT INTO `auth_user_user_permissions` VALUES ('1', '2', '32');
INSERT INTO `auth_user_user_permissions` VALUES ('2', '2', '45');
INSERT INTO `auth_user_user_permissions` VALUES ('3', '2', '46');
INSERT INTO `auth_user_user_permissions` VALUES ('4', '2', '47');
INSERT INTO `auth_user_user_permissions` VALUES ('5', '2', '48');

-- ----------------------------
-- Table structure for `django_admin_log`
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of django_admin_log
-- ----------------------------
INSERT INTO `django_admin_log` VALUES ('1', '2020-08-31 15:18:26.716460', '1', '景点管理员', '1', '[{\"added\": {}}]', '3', '1');
INSERT INTO `django_admin_log` VALUES ('2', '2020-08-31 15:19:16.954025', '2', 'zhangsan', '2', '[{\"changed\": {\"fields\": [\"Groups\", \"User permissions\"]}}]', '4', '1');
INSERT INTO `django_admin_log` VALUES ('3', '2020-08-31 15:19:34.172093', '2', 'zhangsan', '2', '[{\"changed\": {\"fields\": [\"Staff status\"]}}]', '4', '1');

-- ----------------------------
-- Table structure for `django_content_type`
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
INSERT INTO `django_content_type` VALUES ('15', 'accounts', 'loginrecord');
INSERT INTO `django_content_type` VALUES ('14', 'accounts', 'profile');
INSERT INTO `django_content_type` VALUES ('13', 'accounts', 'user');
INSERT INTO `django_content_type` VALUES ('1', 'admin', 'logentry');
INSERT INTO `django_content_type` VALUES ('3', 'auth', 'group');
INSERT INTO `django_content_type` VALUES ('2', 'auth', 'permission');
INSERT INTO `django_content_type` VALUES ('4', 'auth', 'user');
INSERT INTO `django_content_type` VALUES ('5', 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` VALUES ('17', 'order', 'order');
INSERT INTO `django_content_type` VALUES ('16', 'order', 'orderitem');
INSERT INTO `django_content_type` VALUES ('18', 'order', 'payment');
INSERT INTO `django_content_type` VALUES ('6', 'sessions', 'session');
INSERT INTO `django_content_type` VALUES ('10', 'sight', 'comment');
INSERT INTO `django_content_type` VALUES ('11', 'sight', 'info');
INSERT INTO `django_content_type` VALUES ('8', 'sight', 'sight');
INSERT INTO `django_content_type` VALUES ('12', 'sight', 'ticket');
INSERT INTO `django_content_type` VALUES ('9', 'system', 'imagerelated');
INSERT INTO `django_content_type` VALUES ('7', 'system', 'slider');

-- ----------------------------
-- Table structure for `django_migrations`
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
INSERT INTO `django_migrations` VALUES ('1', 'contenttypes', '0001_initial', '2020-08-15 19:52:32.801899');
INSERT INTO `django_migrations` VALUES ('2', 'auth', '0001_initial', '2020-08-15 19:52:32.936592');
INSERT INTO `django_migrations` VALUES ('3', 'admin', '0001_initial', '2020-08-15 19:52:33.199873');
INSERT INTO `django_migrations` VALUES ('4', 'admin', '0002_logentry_remove_auto_add', '2020-08-15 19:52:33.261372');
INSERT INTO `django_migrations` VALUES ('5', 'admin', '0003_logentry_add_action_flag_choices', '2020-08-15 19:52:33.269313');
INSERT INTO `django_migrations` VALUES ('6', 'contenttypes', '0002_remove_content_type_name', '2020-08-15 19:52:33.322172');
INSERT INTO `django_migrations` VALUES ('7', 'auth', '0002_alter_permission_name_max_length', '2020-08-15 19:52:33.349098');
INSERT INTO `django_migrations` VALUES ('8', 'auth', '0003_alter_user_email_max_length', '2020-08-15 19:52:33.382014');
INSERT INTO `django_migrations` VALUES ('9', 'auth', '0004_alter_user_username_opts', '2020-08-15 19:52:33.392023');
INSERT INTO `django_migrations` VALUES ('10', 'auth', '0005_alter_user_last_login_null', '2020-08-15 19:52:33.419945');
INSERT INTO `django_migrations` VALUES ('11', 'auth', '0006_require_contenttypes_0002', '2020-08-15 19:52:33.423900');
INSERT INTO `django_migrations` VALUES ('12', 'auth', '0007_alter_validators_add_error_messages', '2020-08-15 19:52:33.432908');
INSERT INTO `django_migrations` VALUES ('13', 'auth', '0008_alter_user_username_max_length', '2020-08-15 19:52:33.468463');
INSERT INTO `django_migrations` VALUES ('14', 'auth', '0009_alter_user_last_name_max_length', '2020-08-15 19:52:33.502411');
INSERT INTO `django_migrations` VALUES ('15', 'auth', '0010_alter_group_name_max_length', '2020-08-15 19:52:33.534286');
INSERT INTO `django_migrations` VALUES ('16', 'auth', '0011_update_proxy_permissions', '2020-08-15 19:52:33.544262');
INSERT INTO `django_migrations` VALUES ('17', 'sessions', '0001_initial', '2020-08-15 19:52:33.559219');
INSERT INTO `django_migrations` VALUES ('18', 'system', '0001_initial', '2020-08-15 19:52:33.607126');
INSERT INTO `django_migrations` VALUES ('19', 'sight', '0001_initial', '2020-08-15 21:54:56.590816');
INSERT INTO `django_migrations` VALUES ('20', 'accounts', '0001_initial', '2020-08-26 17:45:09.778207');
INSERT INTO `django_migrations` VALUES ('21', 'sight', '0002_comment_info_ticket', '2020-08-26 17:45:09.886989');
INSERT INTO `django_migrations` VALUES ('22', 'system', '0002_imagerelated', '2020-08-26 17:45:10.068897');
INSERT INTO `django_migrations` VALUES ('23', 'accounts', '0002_auto_20200831_2354', '2020-08-31 15:54:37.033700');
INSERT INTO `django_migrations` VALUES ('24', 'accounts', '0003_loginrecord_profile', '2020-09-06 09:43:05.102360');
INSERT INTO `django_migrations` VALUES ('25', 'order', '0001_initial', '2020-09-13 16:23:21.954995');

-- ----------------------------
-- Table structure for `django_session`
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of django_session
-- ----------------------------
INSERT INTO `django_session` VALUES ('55eyxsgf0cpmhh0mroxr75g60sfo5t78', 'MWEwMWMyYTExOTA0NmM5MzBjOTdmYWE4NjAzMGIwOWJhMThmZGRlMTp7fQ==', '2020-09-20 12:49:12.048287');
INSERT INTO `django_session` VALUES ('8343nvcnfeamklfqrl8w680vx2i254rb', 'MWEwMWMyYTExOTA0NmM5MzBjOTdmYWE4NjAzMGIwOWJhMThmZGRlMTp7fQ==', '2020-09-20 15:33:48.408368');
INSERT INTO `django_session` VALUES ('kv9z5hffdebfukwjxehdmu0kim3gjvba', 'NTVlMTQ2ZjBmNjZjYjNhZTQ0ZGY3NTNiYmMyMTk5NTA1ZWMxYmNiMDp7Il9hdXRoX3VzZXJfaWQiOiIzIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIxY2I4ODBhZGYwNzBiY2I3Y2U3Y2Y1NDIwZDc2MWRiMjBmN2M0MjdmIn0=', '2020-09-28 16:42:02.868989');
INSERT INTO `django_session` VALUES ('nzecv0kdes3j6zczq5a2g7mqvrwqgd14', 'MDI4MjgzZTM2MDE2YzZmZDYzMDBjNWNlMDJjODc1YmM0MjZiOTgzMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI2MzNlZGMxYTVjNjE1NDk1YTQ4ZmQwMjAzMDhlYzMyNjVjY2Q5NDhmIn0=', '2020-09-14 15:15:12.058884');
INSERT INTO `django_session` VALUES ('v1zef77b4294b5pefmb45q7dgctz9e0c', 'NDdhYzFlNTBjYWZhYzg2NTA0NDY4Y2ZiODc4MmIzYTRiZTA5N2I3OTp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmYWUyNThjMGFiNjdlYmYwZGU1YjlkNmFiMWJkY2IyMjRjOTM0MTI5In0=', '2020-09-28 18:50:52.068211');

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `sn` varchar(32) NOT NULL,
  `buy_count` int(11) NOT NULL,
  `buy_amount` double NOT NULL,
  `to_user` varchar(32) NOT NULL,
  `to_area` varchar(32) NOT NULL,
  `to_address` varchar(256) NOT NULL,
  `to_phone` varchar(32) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `express_type` varchar(32) DEFAULT NULL,
  `express_no` varchar(32) DEFAULT NULL,
  `status` smallint(6) NOT NULL,
  `types` smallint(6) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_user_id_e323497c_fk_account_user_id` (`user_id`),
  CONSTRAINT `order_user_id_e323497c_fk_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `account_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('2', '1', '2020-09-13 17:58:56.709925', '2020-09-14 14:38:12.256989', '202009131758567099257798', '2', '110', '张三', '', '', '13500000000', null, null, null, '11', '10', '2');
INSERT INTO `order` VALUES ('3', '1', '2020-09-14 15:11:29.275100', '2020-09-14 15:48:35.644737', '202009141511292751009623', '5', '275', '张三1', '', '', '13500000001', null, null, null, '13', '10', '2');
INSERT INTO `order` VALUES ('4', '0', '2020-09-14 16:42:32.050910', '2020-09-15 18:38:35.307314', '202009141642320498773837', '1', '147', '张三', '', '', '13500000000', null, null, null, '13', '10', '3');
INSERT INTO `order` VALUES ('5', '1', '2020-09-14 16:42:32.050910', '2020-09-15 18:04:29.158856', '202009141642320509103340', '2', '357', '张三', '', '', '13500000000', null, null, null, '13', '10', '3');
INSERT INTO `order` VALUES ('7', '1', '2020-09-14 17:04:39.699517', '2020-09-14 17:04:39.699517', '202009141704396995171091', '3', '123', '李四', '', '', '13500000001', null, null, null, '11', '10', '3');
INSERT INTO `order` VALUES ('8', '0', '2020-09-14 18:58:16.792728', '2020-09-15 19:35:16.662333', '202009141858167927285867', '3', '522', '李四', '', '', '13500000001', null, null, null, '12', '10', '3');

-- ----------------------------
-- Table structure for `order_item`
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `flash_name` varchar(128) NOT NULL,
  `flash_img` varchar(100) NOT NULL,
  `flash_price` double NOT NULL,
  `flash_origin_price` double NOT NULL,
  `flash_discount` double NOT NULL,
  `count` int(10) unsigned NOT NULL,
  `amount` double NOT NULL,
  `status` smallint(6) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `object_id` int(10) unsigned NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_item_content_type_id_2d0224af_fk_django_content_type_id` (`content_type_id`),
  KEY `order_item_order_id_0ca9e92e_fk_order_id` (`order_id`),
  KEY `order_item_user_id_1796ca2d_fk_account_user_id` (`user_id`),
  CONSTRAINT `order_item_content_type_id_2d0224af_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `order_item_order_id_0ca9e92e_fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  CONSTRAINT `order_item_user_id_1796ca2d_fk_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `account_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of order_item
-- ----------------------------
INSERT INTO `order_item` VALUES ('1', '1', '2020-09-13 17:58:56.713914', '2020-09-13 17:58:56.713914', '【系统发码，极速出票】广州白水寨成人票', '/static/home/hot/h9.jpg', '55', '55', '10', '2', '110', '12', '出行时间：2021-10-01', '1', '12', '2', '2');
INSERT INTO `order_item` VALUES ('2', '1', '2020-09-14 15:11:29.282081', '2020-09-14 15:11:29.282081', '【系统发码，极速出票】广州白水寨成人票', '/static/home/hot/h9.jpg', '55', '55', '10', '5', '275', '13', '出行时间:2021-10-01', '1', '12', '3', '2');
INSERT INTO `order_item` VALUES ('3', '1', '2020-09-14 16:42:32.060864', '2020-09-14 16:42:32.060864', '长隆野生动物世界(平日)门票', '/static/home/hot/h2.jpg', '147', '147', '10', '1', '147', '13', '出行时间:2020-09-18', '5', '12', '4', '3');
INSERT INTO `order_item` VALUES ('4', '1', '2020-09-14 16:42:32.062857', '2020-09-14 16:42:32.062857', '长隆野生动物世界(平日)门票', '/static/home/hot/h2.jpg', '147', '147', '10', '1', '147', '13', '出行时间:2020-09-18', '5', '12', '5', '3');
INSERT INTO `order_item` VALUES ('5', '1', '2020-09-14 16:48:42.400674', '2020-09-14 16:48:42.400674', '长隆国际大马戏剧院（周末/节假日）门票', '/static/home/hot/h2.jpg', '210', '210', '10', '1', '210', '11', '出行时间:2020-09-18', '6', '12', '5', '3');
INSERT INTO `order_item` VALUES ('6', '1', '2020-09-14 17:04:39.710489', '2020-09-14 17:04:39.711486', '广州南粤园成人票', '/static/home/hot/h5.jpg', '41', '41', '10', '3', '123', '11', '出行时间:2020-09-18', '16', '12', '7', '3');
INSERT INTO `order_item` VALUES ('7', '1', '2020-09-14 18:58:16.797715', '2020-09-14 18:58:16.797715', '长隆野生动物世界(平日)门票', '/static/home/hot/h2.jpg', '174', '174', '10', '3', '522', '12', '出行时间:2020-09-18', '4', '12', '8', '3');

-- ----------------------------
-- Table structure for `order_payment`
-- ----------------------------
DROP TABLE IF EXISTS `order_payment`;
CREATE TABLE `order_payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `amount` double NOT NULL,
  `sn` varchar(32) NOT NULL,
  `third_sn` varchar(128) DEFAULT NULL,
  `status` smallint(6) NOT NULL,
  `meta` varchar(128) DEFAULT NULL,
  `remark` varchar(128) DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_payment_order_id_588933b6_fk_order_id` (`order_id`),
  KEY `order_payment_user_id_51d05b30_fk_account_user_id` (`user_id`),
  CONSTRAINT `order_payment_order_id_588933b6_fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  CONSTRAINT `order_payment_user_id_51d05b30_fk_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `account_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of order_payment
-- ----------------------------

-- ----------------------------
-- Table structure for `sight`
-- ----------------------------
DROP TABLE IF EXISTS `sight`;
CREATE TABLE `sight` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `name` varchar(64) NOT NULL,
  `desc` varchar(256) NOT NULL,
  `main_img` varchar(256) NOT NULL,
  `content` longtext NOT NULL,
  `score` double NOT NULL,
  `min_price` double NOT NULL,
  `province` varchar(32) NOT NULL,
  `city` varchar(32) NOT NULL,
  `area` varchar(32) DEFAULT NULL,
  `town` varchar(32) DEFAULT NULL,
  `is_top` tinyint(1) NOT NULL,
  `is_hot` tinyint(1) NOT NULL,
  `banner_img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sight
-- ----------------------------
INSERT INTO `sight` VALUES ('1', '1', '2020-06-10 03:40:31.485435', '2020-07-10 03:43:55.928261', '广州长隆旅游度假区', '长隆旅游度假区(AAAAA景区)', '/static/home/hot/h2.jpg', '<p>特色看点</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/ce/da6f0116187f2930189199932433852e.water.jpg_710x420_22391145.jpg\" /></p>\r\n\r\n<p>大马戏</p>\r\n\r\n<p>长隆国际大马戏拥有全球首创实景式马戏舞台，为你打造令人惊叹的视听盛宴。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1501/d4/cadd9d2178cf23a63f78a1d0fa15aa9a.water.jpg_710x420_603f6085.jpg\" /></p>\r\n\r\n<p>过山车之王</p>\r\n\r\n<p>这里有全球过山车之王--垂直过山车，敢挑战吗？</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1501/76/9143ba5ff87ad17f0e0a10bc01d81898.water.jpg_710x420_423ed2b4.jpg\" /></p>\r\n\r\n<p>经典任务</p>\r\n\r\n<p>还记得《爸爸去哪儿》大电影里让爸爸们胆寒的大蟒蛇吗？同样的地方，同样的蟒蛇，你敢来体验&ldquo;任务&rdquo;吗？</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1501/51/88b46bd30102874cbefbc4a4e861f796.water.jpg_710x420_483f55f8.jpg\" /></p>\r\n\r\n<p>电影场景</p>\r\n\r\n<p>《爸爸去哪儿》大电影中，星爸萌娃们住过的小木屋，你也来住住看吧！</p>', '5', '69', '广东省', '广州市', '番禺区', '番禺大道', '1', '1', '/static/home/hot/h2_max.jpg');
INSERT INTO `sight` VALUES ('2', '1', '2020-06-10 03:43:42.795701', '2020-06-10 03:43:42.795734', '南沙百万葵园', '南沙百万葵园', '/static/home/hot/h4.jpg', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '5', '69', '广东省', '广州市', '南沙区', '万顷沙镇', '1', '1', '/static/home/hot/h4_max.jpg');
INSERT INTO `sight` VALUES ('3', '1', '2020-06-10 03:46:32.580639', '2020-06-10 03:46:32.580679', '广州塔', '广州塔(AAAA景区)', '/static/home/hot/h7.jpg', '<p>特色看点</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1412/8c/3026248924ee92dc265ca6097bc5c16a.water.jpg_710x420_dba0bf5a.jpg\" /></p>\r\n\r\n<p>城市之巅</p>\r\n\r\n<p>488摄影观景平台坐落于广州塔488米高天线桅杆处。站在平台上，可360度俯瞰羊城全貌，感受居高临下的王者之风。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1507/72/96dc579eea7900d755d5c72fa66cb7a0.water.jpg_710x420_008a4f08.jpg\" /></p>\r\n\r\n<p>横向摩天轮</p>\r\n\r\n<p>广州塔摩天轮位于塔顶455米高空处。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1412/36/ca2332e7d6fe263aad2a13ac2765ec9b.water.jpg_710x420_0a05774a.jpg\" /></p>\r\n\r\n<p>减振系统游览厅</p>\r\n\r\n<p>能看到全球首创的利用两个消防水箱作为被动控制阻尼质量块。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1412/d3/336cf08fbada636cb0189a97724f1086.water.jpg_710x420_4814c9f6.jpg\" /></p>\r\n\r\n<p>观光大厅</p>\r\n\r\n<p>广州塔别具匠心地在428米及433.2米高度处分设白云和星空主题观光大厅，全透明钢化夹胶玻璃构造的&ldquo;悬空走廊&rdquo;，带来前所未有的凌空观景刺激感受。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1412/7b/f0dff7f06b52b17e9f72a7b8990a4043.water.jpg_710x420_22681611.jpg\" /></p>\r\n\r\n<p>空中云梯</p>\r\n\r\n<p>蜘蛛侠栈道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/22/66a2b20b77262f69fc612db5d35098ba.jpg_710x420_ad085e17.jpg\" /></p>\r\n\r\n<p>夜中广州塔</p>\r\n\r\n<p>夜中远观广州塔，在夜色中&ldquo;小蛮腰&rdquo;变换缤纷颜色，江面也亮起灯，浪漫极了。</p>', '5', '147', '广东省', '广州市', '海珠区', '阅江西路', '1', '1', '/static/home/hot/h7_max.jpg');
INSERT INTO `sight` VALUES ('4', '1', '2020-06-10 03:48:48.486065', '2020-06-10 03:48:48.486095', '广州融创雪世界', '广州融创雪世界', '/static/home/hot/h1.jpg', '<p>雪世界介绍</p>\r\n\r\n<p>滑雪区</p>\r\n\r\n<p>滑雪区拥有4条不同难度的雪道，平均宽度 35米，其中2条为立体交叉雪道。室内娱雪滑道落差达66米，室内初级雪道长度达460米 。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/c6/c6580445d593100ea3.img.png_710x420_b60e6e16.png\" /></p>\r\n\r\n<p>小熊道</p>\r\n\r\n<p>小熊道雪道开阔，速度较缓，适合零基础滑雪者，小朋友可以在这里大胆尝试练习。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/9d/9dedd22c2002f59ca3.img.png_710x420_207217e7.png\" /></p>\r\n\r\n<p>雪兔道</p>\r\n\r\n<p>雪兔道总长323米，适合初学滑雪者。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/56/56bffe8d162b99ca3.img.png_710x420_af80a09e.png\" /></p>\r\n\r\n<p>老虎道</p>\r\n\r\n<p>老虎道适合高级滑雪者，落差达66米，足以让资深滑雪爱好者在感受风驰电掣般滑行的快感中深呼吸，体验惊险与刺激。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1905/2c/2c067a67e21bf514a3.img.jpg_710x420_f76099bd.jpg\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>缆车</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/6b/6bca5392887a59e5a3.img.png_710x420_e0da9c00.png\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>魔毯</p>\r\n\r\n<p>娱雪玩雪区</p>\r\n\r\n<p>除了滑雪以外，冰雪娱乐区也有很多选择：飞跃冰川、雪上飞碟、冰上碰碰车、探险步道等项目，不会滑雪也能玩！</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/d1/d19b9125c99fe8cca3.img.jpg_710x420_30e31289.jpg\" /></p>\r\n\r\n<p>雪上飞碟</p>\r\n\r\n<p>上飞碟形状的充气雪圈，从雪山顶飞驰而下，清爽的雪风扑面而来，在眨眼间滑落山底，在意犹未尽中感受雪地速度与激爽。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/e3/e375ecb057e6b345a3.img.png_710x420_63be7635.png\" /></p>\r\n\r\n<p>冰上碰碰车</p>\r\n\r\n<p>光滑的冰面减少摩擦，碰碰游戏更能带来刺激感与乐趣，在南方也可体验北方冬天的热门游戏。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/d8/d8fdc36f015fd431a3.img.png_710x420_bcf6c21c.png\" /></p>\r\n\r\n<p>冰上自行车</p>\r\n\r\n<p>光滑的冰面踩单车？南方的小伙伴们一定第一次玩了，充满意想不到的乐趣，是老少咸宜的冰上项目。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/b9/b95a946b8704f2f8a3.img.png_710x420_3052b2bb.png\" /></p>\r\n\r\n<p>探险步道</p>\r\n\r\n<p>国内滑雪场首条探险步道，集趣味、娱乐、拓展功能为一体，在高空、速度、力量、毅力等元素的挑战中，感受感官上的刺激和闯关成功的成就感。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1907/b3/b315bcaaf96ac141a3.img.png_710x420_45b88474.png\" /></p>\r\n\r\n<p>飞跃冰川</p>\r\n\r\n<p>首台室内滑雪场同向双溜索（比翼双飞），高空横跨滑雪场。单条长83米，高差10米，让游客体验从白雪皑皑的上空急速滑过的拉风感觉。</p>', '5', '145', '广东省', '广州市', '花都区', '平步大道', '1', '1', '/static/home/hot/h1_max.jpg');
INSERT INTO `sight` VALUES ('5', '1', '2020-06-10 03:51:37.063462', '2020-06-10 03:51:37.063495', '广州正佳极地海洋世界', '海洋欢乐颂', '/static/home/hot/h3.jpg', '<p>正佳极地海洋世界坐落于广州天河核心商圈正佳广场，总建筑面积超58000平方米，拥有共500种超30000只极地海洋动物，是座室内空中极地海洋馆。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1709/b2/b245c37047393197a3.img.jpg_710x420_8a20804b.jpg\" /></p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1709/7e/7e4a76858167fddba3.img.jpg_710x420_d3d15109.jpg\" /></p>\r\n\r\n<p>展馆内设有二十一大主题展区，44米亚克力单体水族展示缸、20米超长幻彩水母大道、360度超大广角海底隧道等，专业的建筑及视觉设计团队，开创性地将生物展示和声光电技术完美融合，集观赏、娱乐、休闲、科普、环保于一体的梦幻主题式极地海洋体验。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1709/e9/e9fdbc2c83ee75d9a3.img.jpg_710x420_f803b71d.jpg\" /></p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1709/7e/7e0c973d2fc257aea3.img.jpg_710x420_f5d7a3c4.jpg\" /></p>', '5', '80', '广东省', '广州市', '天河区', '天河路', '1', '1', '/static/home/hot/h3_max.jpg');
INSERT INTO `sight` VALUES ('6', '1', '2020-06-10 03:54:41.685676', '2020-06-10 03:54:41.685707', '宝墨园', '宝墨园(AAAA景区)', '/static/home/hot/h5.jpg', '<p>满园樱色</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1603/20/208ed6bc971a41cf90.img.jpg_710x420_9878bc3b.jpg\" /></p>\r\n\r\n<p>花色丰富</p>\r\n\r\n<p>樱园一带以小日樱花为主，收集了早樱、晚樱和垂枝樱等共6种10余个佳品的樱花，花色丰富，绚丽多彩，枝、干多异且花期不同。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1603/bf/bf5079558989b5f590.img.jpg_710x420_1b050232.jpg\" /></p>\r\n\r\n<p>漫山樱色</p>\r\n\r\n<p>盛开时节，樱园酷似花的海洋，成千上万游客慕名而至，留连观赏，如醉如痴</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1603/c2/c24ab9c56b47b7b990.img.jpg_710x420_e26d26ff.jpg\" /></p>\r\n\r\n<p>晚樱</p>\r\n\r\n<p>每当寒冬过后，梅花凋谢之时，早樱开放，继而小日樱花、垂枝樱花、晚樱等开放。</p>', '5', '41', '广东省', '广州市', '番禺区', '沙湾镇紫妮村', '1', '1', '/static/home/hot/h5_max.jpg');
INSERT INTO `sight` VALUES ('7', '1', '2020-06-10 03:57:02.836359', '2020-06-10 03:57:02.836391', '广东科学中心', '广东科学中心(AAAA景区)', '/static/home/hot/h6.jpg', '<p><img src=\"http://img1.qunarzz.com/sight/p0/1412/93/ec106a80128ac36fdf64a316eeb3810b.water.jpg_710x420_40024707.jpg\" /></p>\r\n\r\n<p>儿童天地</p>\r\n\r\n<p>本展馆主要面向12岁以下儿童，通过角色扮演、情景体验等丰富多彩的形式，让儿童了解与日常生活和周围世界有关的浅显的科学知识，从而丰富小朋友的童年生活感受和经历。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1412/69/4a4b8ce9db8f4f11a74321751063b8b6.water.jpg_710x420_175b7f05.jpg\" /></p>\r\n\r\n<p>飞天之梦</p>\r\n\r\n<p>本展馆展示了人类千百年来的梦想--翱翔蓝天，挣脱了地球引力，实现了千百年来的梦想。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1412/a2/3e8e996372ca6771063b2a6d0235efd3.water.jpg_710x420_231aebe6.jpg\" /></p>\r\n\r\n<p>绿色家园</p>\r\n\r\n<p>本展馆以环保为主题，岭南特色为背景，以生动有趣的形式将美丽的大自然全景式地展现在观众面前。</p>', '4.5', '42', '广东省', '广州市', '番禺区', '大学城西六路168号', '1', '1', '/static/home/hot/h6_max.jpg');
INSERT INTO `sight` VALUES ('8', '1', '2020-06-10 03:58:51.478626', '2020-06-10 03:58:51.478658', '珠江夜游', '珠江夜游', '/static/home/hot/h10.jpg', '<p><img src=\"http://img1.qunarzz.com/sight/p0/1501/46/462186e0e32146e9.water.jpg_710x420_9b0f6c53.jpg\" /></p>\r\n\r\n<p>特色</p>\r\n\r\n<p>宽大的空间在悠和的灯光映衬下，尤如置身于五星级殿堂。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1501/71/7190e54ed15c0a3e.water.jpg_710x420_75b86aa1.jpg\" /></p>\r\n\r\n<p>特色</p>\r\n\r\n<p>出游时播放江面景观的室内视频，即使下雨，亦可在室内观赏珠江两岸的景色</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1501/9c/9c8d9add730ca143.water.jpg_710x420_fb5f4026.jpg\" /></p>\r\n\r\n<p>特色</p>\r\n\r\n<p>完备的高保真音响配置，使尊贵的你在游览珠江两岸风情的同时，听觉上也可大大的享受</p>', '4.5', '47.5', '广东省', '广州市', '越秀区', '珠江', '0', '1', '/static/home/hot/h10_max.jpg');
INSERT INTO `sight` VALUES ('9', '1', '2020-06-10 04:01:59.674665', '2020-06-10 04:01:59.674703', '岭南印象园', '岭南印象园(AAAA景区)', '/static/home/hot/h8.jpg', '<p>岭南乡土风情和民俗文化</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/67/a741e142e49ab83ba93ec0a502ffb29b.water.jpg_710x420_7cb7fe86.jpg\" /></p>\r\n\r\n<p>岭南印象</p>\r\n\r\n<p>岭南少数民族独特的歌舞，带你感受这个民族的文化魅力，吸引你探索这篇土地的风土民情。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1511/b8/b88c54e6682cd12490.water.jpg_710x420_5edc96b7.jpg\" /></p>\r\n\r\n<p>建筑群落</p>\r\n\r\n<p>悠长的青云巷、古朴的趟栊门、精致的满洲窗，小溪蜿蜒，池塘清澈，处处散发着岭南水乡的韵味。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1505/fd/fd8124c334568f28.water.jpg_710x420_084ba679.jpg\" /></p>\r\n\r\n<p>宗祠艺术</p>\r\n\r\n<p>这里的霍氏大宗祠和萧氏宗祠包含了木雕、砖雕、石雕、灰塑、陶塑等传统工艺，凝聚了众多艺术创作者的心血，具有很高的艺术价值。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1409/18/aff9b12820e1aab9fa59db2f7d5bc229.jpg_710x420_5ae37958.jpg\" /></p>\r\n\r\n<p>民族工艺品</p>\r\n\r\n<p>精致的工艺品，体现了这里独有的民族特色。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1509/54/0e51221629b2934fd87958179a08f452.water.jpg_710x420_363f5de0.jpg\" /></p>\r\n\r\n<p>木雕宫灯</p>\r\n\r\n<p>古典工整的造型，精雕细琢的雕花，让游客感受钢筋水泥城市之外的优雅静谧。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1509/5b/9427a83ff2ca0f2c6b90c571849b7d4a.water.jpg_710x420_b972cfde.jpg\" /></p>\r\n\r\n<p>石湾陶瓷</p>\r\n\r\n<p>展览销售石湾陶瓷。游客在此可以欣赏购买造型多样，栩栩如生的石湾公仔，活泼生动又不失文化内涵，可以装点家居也可以馈赠亲朋。</p>', '5', '47.1', '广东省', '广州市', '番禺区', '外环西路', '0', '1', '/static/home/hot/h8_max.jpg');
INSERT INTO `sight` VALUES ('10', '1', '2020-06-10 04:05:44.085079', '2020-06-10 04:05:44.085109', '增城白水寨风景名胜区', '增城白水寨风景名胜区(AAAA景区)', '/static/home/hot/h9.jpg', '<p>景区特色</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/29/858ab67cdd9e22f70b2e068ba340ba16.jpg_710x420_20e51097.jpg\" /></p>\r\n\r\n<p>海船木栈道</p>\r\n\r\n<p>全国仅见的精品海船木栈道。在白水寨漫步古朴的海船木栈道登山观瀑，看流水潺潺、听瀑布轰鸣，倍感诗意。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/dd/dcdf8fa407cc42b4169229c1ba3fa1c7.water.jpg_710x420_6fa65f83.jpg\" /></p>\r\n\r\n<p>白水绿道</p>\r\n\r\n<p>广东首条白水绿道！</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/ed05af293a7b1fcc0a91587e0c18403f.jpg_710x420_067fa8b9.jpg\" /></p>\r\n\r\n<p>竹林吸氧</p>\r\n\r\n<p>登山健身、沐瀑品氧的地方！</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/29/f31c2797793fbc34b0ffcc3751ba090a.jpg_710x420_af543daf.jpg\" /></p>\r\n\r\n<p>大瀑布</p>\r\n\r\n<p>其形态优美，彷如仙女下凡，相传乃八仙之中何仙姑的化身。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/29/df585c4f62a64d51d004560e06917ce5.jpg_710x420_97cacdc6.jpg\" /></p>\r\n\r\n<p>9999级登山步径</p>\r\n\r\n<p>远近闻名的9999。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/wugc/p163/201205/30/717053909b493cc893835fbb.png_710x420_a97e9bab.png\" /></p>\r\n\r\n<p>生态资源</p>\r\n\r\n<p>拥有得天独厚的自然生态资源，可谓集天地之灵气，山水之秀美于一体</p>', '5', '55', '广东省', '增城市', '派潭镇', '白水寨风景名胜区', '0', '0', '/static/home/hot/h9_max.jpg');

-- ----------------------------
-- Table structure for `sight_comment`
-- ----------------------------
DROP TABLE IF EXISTS `sight_comment`;
CREATE TABLE `sight_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `content` longtext,
  `is_top` tinyint(1) NOT NULL,
  `love_count` int(11) NOT NULL,
  `score` double NOT NULL,
  `ip_address` varchar(64) DEFAULT NULL,
  `is_public` smallint(6) NOT NULL,
  `reply_id` int(11) DEFAULT NULL,
  `sight_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sight_comment_reply_id_2515c003_fk_sight_comment_id` (`reply_id`) USING BTREE,
  KEY `sight_comment_sight_id_d538c149_fk_sight_id` (`sight_id`) USING BTREE,
  KEY `sight_comment_user_id_de422f03_fk_accounts_user_id` (`user_id`) USING BTREE,
  CONSTRAINT `sight_comment_ibfk_1` FOREIGN KEY (`reply_id`) REFERENCES `sight_comment` (`id`),
  CONSTRAINT `sight_comment_ibfk_2` FOREIGN KEY (`sight_id`) REFERENCES `sight` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sight_comment
-- ----------------------------
INSERT INTO `sight_comment` VALUES ('1', '1', '2020-06-10 04:10:06.258533', '2020-06-10 04:10:06.258582', '进入公园不用钱，进入登山才要门票，爬到了9999级阶梯感觉很坑人，过了4099后一路都是凑楼梯了，不是一直网上走的，一下上一下往下走，走到9999不是山顶而是盆地，9999的标志就是一块捡漏的牌子，很失望，去了不会再去的了！！！', '1', '0', '5', null, '1', null, '10', '1');
INSERT INTO `sight_comment` VALUES ('2', '1', '2020-06-10 04:10:57.617022', '2020-06-10 04:10:57.617060', '白水寨非常适合喜欢爬山的朋友，但也要量力而行，所谓的9999级，是从第一个阶梯到经过山的最高处，再往公路方向走完所有的阶梯。大家都在找9999级，其实只需要把所有的阶梯走完，当你看到第六幅图的标志时，你已经成功挑战白水寨的9999级阶梯，正所谓“只缘身在此山中”，等待着“柳暗花明时”。不过下山时两小腿真的是颤抖，很不错的体验。', '0', '0', '4.5', null, '1', null, '10', '1');
INSERT INTO `sight_comment` VALUES ('3', '1', '2020-06-10 04:32:46.459219', '2020-06-10 04:32:46.459249', '是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('4', '1', '2020-06-10 04:33:07.521627', '2020-06-10 04:33:07.521657', '很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('6', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '-1是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('7', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '2很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('8', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '3是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('9', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '4很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('10', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '5是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('11', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '6很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('12', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '7是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('13', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '8很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('14', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '9是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('15', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '10很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('16', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '11是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('17', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '12很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('18', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '13是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('19', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '14很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('20', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '15是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('21', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '16很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('22', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '17是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('23', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '18很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('24', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '19是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('25', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '20很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('26', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '21是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('27', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '22很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('28', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '23是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('29', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '24很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('30', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '25是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('31', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '26很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('32', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '27是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('33', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '28很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('34', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '29是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('35', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '30很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('36', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '31是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('37', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '32很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('38', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '33是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('39', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '34很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('40', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '35是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('41', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '36很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('42', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '37是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('43', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '38很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('44', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '39是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('45', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '40很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('46', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '41是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('47', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '42很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('48', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '43是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('49', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '44很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('50', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '45是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('51', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '46很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('52', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '47是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('53', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '48很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('54', '1', '2020-06-10 04:32:46.000000', '2020-06-10 04:32:46.000000', '49是亲子游的绝佳场所，门票就是有点贵，不过可以接受，爷爷奶奶不放心小朋友也跟上来了，当天我们十点多就到了，错过了节假日，人也还是多，不过错峰出行我们一天是把动物园逛完了，两种路线都逛完了，早上我们先坐的缆车，缆车人多，排了半小时队，小火车是把步行区转完了去坐的，到了下午四点半刚好小火车到站就下雨了，地铁站到男北门都有接驳车，很方便的，总之这次还算满意，就是有些动物表演没有看到，只看到了大象表演', '1', '0', '4.5', null, '1', null, '1', '1');
INSERT INTO `sight_comment` VALUES ('55', '1', '2020-06-10 04:33:07.000000', '2020-06-10 04:33:07.000000', '50很有长隆特色的亲子酒店，房间里的装修很可爱，小孩子特别喜欢，洗漱用品也很有特色，对应的房间还送了对应动物的小绘本，是可以带走的。不过房间大小不是很大。离动物园北门也很近，步行10分钟就能到。拿着酒店门卡或者酒店门卡里的一张小纸条进园坐缆车看4d电影这些都可以走快递通道，这一点也很方便。总的来说，性价比还是很高的。等小孩再大点还会再来的～ps：楼下茶餐厅很一般，可以去酒店马路对面的餐厅吃，海鲜早茶都要比楼下的好吃很多！', '0', '0', '4', null, '1', null, '1', '1');

-- ----------------------------
-- Table structure for `sight_info`
-- ----------------------------
DROP TABLE IF EXISTS `sight_info`;
CREATE TABLE `sight_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entry_explain` longtext,
  `play_way` longtext,
  `tips` longtext,
  `traffic` longtext,
  `sight_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sight_id` (`sight_id`) USING BTREE,
  CONSTRAINT `sight_info_ibfk_1` FOREIGN KEY (`sight_id`) REFERENCES `sight` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sight_info
-- ----------------------------
INSERT INTO `sight_info` VALUES ('1', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '1');
INSERT INTO `sight_info` VALUES ('2', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '2');
INSERT INTO `sight_info` VALUES ('3', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '3');
INSERT INTO `sight_info` VALUES ('4', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '4');
INSERT INTO `sight_info` VALUES ('5', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '5');
INSERT INTO `sight_info` VALUES ('6', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '6');
INSERT INTO `sight_info` VALUES ('7', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '7');
INSERT INTO `sight_info` VALUES ('8', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '8');
INSERT INTO `sight_info` VALUES ('9', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '9');
INSERT INTO `sight_info` VALUES ('10', '<h4><strong>开放时间</strong></h4>\r\n\r\n<p>09:00～17:30开放；</p>\r\n\r\n<h4><strong>优惠政策</strong></h4>\r\n\r\n<p>1.1.2&le;身高＜1.5米儿童可享门票挂牌价5折</p>\r\n\r\n<p>2.65岁以上老人（凭有效身份证件）可享门票挂牌价5折</p>\r\n\r\n<p>3.军官（凭有效身份证件，军官证）可享门票挂牌价5折</p>\r\n\r\n<p>4.学生（凭学生证）可享门票挂牌价8折入园 e.其他优惠以景区公布为准</p>\r\n\r\n<h4><strong>免费政策</strong></h4>\r\n\r\n<p>1.身高小于1.2米儿童</p>\r\n\r\n<p>2.残疾人（凭有效身份证件，残疾证）</p>\r\n\r\n<p>3.广州记者（凭有效身份证件，凭记者证）</p>', '<p>彩虹乐园</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/24/2403315d0b61473590.water.jpg_710x420_12889829.jpg\" /></p>\r\n\r\n<p>百万葵园</p>\r\n\r\n<p>以迷人的北海道七彩花田、浪漫的普罗旺斯&ldquo;薰之恋&rdquo;、热情的英伦玫瑰苑、缤纷的七彩天鹅鲜花地以及神奇的万朵鲜花天上飘等等不同亮点组合而成，真所谓花花世界，美景无敌。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1602/62/62acf31e038b4fea90.water.jpg_710x420_03cf5ca9.jpg\" /></p>\r\n\r\n<p>彩虹世界</p>\r\n\r\n<p>追寻孩子纯真乐趣的你，面对如此神奇欢乐的魔法城堡，怎能不来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/9f5888734c64f01165690d09a4107c3d.jpg_710x420_0362b6c3.jpg\" /></p>\r\n\r\n<p>蓝天与向日葵</p>\r\n\r\n<p>头顶蓝天白云，眼底一大片绿色撑起的金色海洋，在微风中如波浪一般轻轻摆动，一朵朵向着太阳的葵花展开灿烂的笑脸。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/201405/16/3d2d95fdcfbd746dfe7f26a170dc2035.jpg_710x420_43c1de5b.jpg\" /></p>\r\n\r\n<p>葵花之海</p>\r\n\r\n<p>向日葵在阳光下咧着嘴笑，风吹过，翩翩起舞，金色的波浪散开来。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/51/4f52d37dc64fb10ed24b0e86c54967bd.water.jpg_710x420_c89ee547.jpg\" /></p>\r\n\r\n<p>爱笑的向日葵</p>\r\n\r\n<p>花蕊散发淡淡的清香，甜甜地蔓延开来，一下子空气里全是闲适的味道。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/19/f6f8c179920f612a85c707ebeecb091a.water.jpg_710x420_691356cf.jpg\" /></p>\r\n\r\n<p>吃松果</p>\r\n\r\n<p>500多只可爱的小松鼠构成一个充满温馨与情趣的童话世界</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/74/76d8b66b48e00750b4e4090de2e49514.water.jpg_710x420_2349c55f.jpg\" /></p>\r\n\r\n<p>风车与花海</p>\r\n\r\n<p>风车与花海，牵手漫步园中小径，花儿有点香，风儿吹着人有点醉。</p>\r\n\r\n<p><img src=\"http://img1.qunarzz.com/sight/p0/1411/3d/755609a40bb36fb27613f0be269e482d.water.jpg_710x420_0ac8cc10.jpg\" /></p>\r\n\r\n<p>彩虹花海</p>\r\n\r\n<p>一条条花带连起来，在大地上铺成彩虹，停下来，享受这一刻的美。</p>', '<h4><strong>小贴士</strong></h4>\r\n\r\n<p>对花粉过敏的朋友请自备口罩；部分花卉花期具有一定时效性。</p>', '<p><img src=\"http://api.map.baidu.com/staticimage/v2?ak=D0ba2606b334fb2565df2646e9f8a479&amp;center=113.62679,22.634301&amp;width=370&amp;height=200&amp;zoom=14&amp;scale=2&amp;markers=113.62679,22.634301&amp;markerStyles=-1,http://simg1.qunarzz.com/piao/images/map_icon.png\" /></p>\r\n\r\n<h4><strong>驾车路线</strong></h4>\r\n\r\n<p>1、广州 （新干线）风向&rarr;彩虹乐园</p>\r\n\r\n<p>华南快速（5分钟）&mdash;&mdash; 南沙港快速&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>2、中山、珠海方向&rarr; 彩虹乐园</p>\r\n\r\n<p>京珠高速&mdash;&mdash;三角镇&mdash;&mdash;番中公路&mdash;&mdash;洪奇沥大桥&mdash;&mdash;第一个交通杆右转&mdash;&mdash;万顷沙新垦镇&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>3、阳江、开平方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>4、佛山、南海、江门、肇庆、三水、台山、开平、阳江、茂名方向&rarr; 彩虹乐园</p>\r\n\r\n<p>广佛高速 &mdash;&mdash; 华南干线 &mdash;&mdash; 南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>5、深圳、东莞方向 &rarr;彩虹乐园</p>\r\n\r\n<p>广深高速&mdash;&mdash;虎门大桥&mdash;&mdash;广州市区方向&mdash;&mdash;南沙港快速（南沙区方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>6、顺德方向 &rarr; 彩虹乐园</p>\r\n\r\n<p>顺德（镇政府）&mdash;&mdash; 深圳方向&mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash;沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<p>7、番禺方向&rarr; 彩虹乐园</p>\r\n\r\n<p>方案一 ：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 金山大道 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash; 彩虹乐园（新垦15涌）</p>\r\n\r\n<p>方案二：</p>\r\n\r\n<p>迎宾路 &mdash;&mdash; 清河东路 &mdash;&mdash;南沙港快速（南沙港方向）&mdash;&mdash; 沥心沙出口&mdash;&mdash;彩虹乐园（新垦15涌）</p>\r\n\r\n<h4><strong>公交路线</strong></h4>\r\n\r\n<p>1、广州方向&rarr;百万葵园</p>\r\n\r\n<p>方法一：在广州大道(敦和)坐往中山或珠海（走新路）的巴士，在万顷沙路口下车13元。</p>\r\n\r\n<p>方法二：地铁4号线&mdash;&mdash;蕉门站&mdash;&mdash;南沙1线，南沙2线&mdash;&mdash;百万葵园站(推荐！)</p>\r\n\r\n<p>2、番禺方向&rarr;百万葵园</p>\r\n\r\n<p>在市桥东成中巴站坐新垦专线车，在新垦总站下，从新垦站租摩托车到葵园2元，可坐2个人。</p>\r\n\r\n<p>3、深圳、东莞汽车站&rarr;百万葵园</p>\r\n\r\n<p>深圳，东莞汽车站&mdash;番禺汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>4、佛山汽车站&rarr;百万葵园</p>\r\n\r\n<p>佛山汽车站 &mdash;番禺（市桥）汽车站&mdash;新垦&mdash;坐362路公交车&mdash;百万葵园</p>\r\n\r\n<p>5、珠海、中山方向&rarr;百万葵园</p>\r\n\r\n<p>坐往广州或东莞方向的中巴，在万顷沙路口下车，转南沙2号公交车可以到百万葵园。</p>', '10');

-- ----------------------------
-- Table structure for `sight_ticket`
-- ----------------------------
DROP TABLE IF EXISTS `sight_ticket`;
CREATE TABLE `sight_ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `name` varchar(128) NOT NULL,
  `desc` varchar(64) DEFAULT NULL,
  `types` smallint(6) NOT NULL,
  `price` double NOT NULL,
  `discount` double NOT NULL,
  `total_stock` int(10) unsigned NOT NULL,
  `remain_stock` int(10) unsigned NOT NULL,
  `expire_date` int(11) NOT NULL,
  `return_policy` varchar(64) NOT NULL,
  `has_invoice` tinyint(1) NOT NULL,
  `entry_way` smallint(6) NOT NULL,
  `remark` longtext,
  `status` smallint(6) NOT NULL,
  `sight_id` int(11) NOT NULL,
  `tips` longtext,
  PRIMARY KEY (`id`),
  KEY `sight_ticket_sight_id_cf507ff8_fk_sight_id` (`sight_id`) USING BTREE,
  CONSTRAINT `sight_ticket_ibfk_1` FOREIGN KEY (`sight_id`) REFERENCES `sight` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sight_ticket
-- ----------------------------
INSERT INTO `sight_ticket` VALUES ('1', '1', '2020-06-10 04:08:08.520444', '2020-09-14 15:12:18.092569', '【系统发码，极速出票】广州白水寨成人票', '23:52前可订明日', '11', '55', '10', '1000000', '999998', '1', '条件退', '1', '0', '', '1', '10', null);
INSERT INTO `sight_ticket` VALUES ('2', '1', '2020-06-10 04:08:51.938060', '2020-06-10 04:13:08.556812', '白水寨风景名胜区门票优待票(儿童/老人/学生)', '23:52前可订明日', '12', '30', '10', '1000000', '1000000', '1', '条件退', '0', '0', '', '1', '10', '<p>取票地点: &ldquo;人工售票处&rdquo;或者&ldquo;自助取票机&rdquo;输入{取票凭证码和手机号}</p>\r\n        <p>费用包含：长隆野生动物世界+飞鸟乐园全票1张；</p>\r\n        <p>温馨提示：门票需在游玩日期首日起2天内任选时间游玩两个主题公园，每公园限进园一次且需同一人使用（凭门票及录入指纹验证入园）</p>\r\n        <p>价格说明</p>\r\n        <p>1.销售价</p>\r\n        <p>(1)跟团、自由行：①本起价是可选出发日期中，按双人出行共住一间房核算的最低单人价格。②产品价格会根据您所选择的出发日期、出行人数、入住酒店房型、航班或交通以及所选附加服务的不同而有所差别。</p>\r\n        <p>(2)邮轮：①本起价是可选出发日期中，按每间房入住&ldquo;最低可住人数&rdquo;核算的最低单人价。②产品价格会根据您所选择的出发日期、出行人数、入住房型、航班或交通以及所选附加服务的不同而有所差别。</p>\r\n        <p>(3)单资源：①本起价是本产品可售日期范围内的最低价。②产品价格会根据您所选择的套餐类型/资源类型、日期、数量等不同而有所差别。</p>\r\n        <p>2.参考价</p>\r\n        <p>产品展示的参考价（包括商品展示的划线价），可能是建议零售价、供应商指导价、挂牌价等，或该产品在慕旅游网平台或门店曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，建议零售价、供应商指导价、过往销售价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>\r\n        <p>3.折扣</p>\r\n        <p>如无特殊说明，折扣指在参考价基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系客服进行咨询。产品展示的促销类价格（包括但不限于限时秒杀价、尾货特价、预售价、特卖价、特价、促销价），均为基于参考价基础上，结合相应促销活动/销售计划得出的价格。</p>\r\n        <p>4.其他说明</p>\r\n        <p>商品促销信息以商品详情页信息为准；商品的成交以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前联系客服进行咨询。</p>');
INSERT INTO `sight_ticket` VALUES ('3', '1', '2020-06-10 04:09:28.678997', '2020-06-10 04:09:28.679028', '【电子票】白水寨双人票【平时周末通用】', '23:52前可订明日', '11', '200', '5', '1000000', '1000000', '1', '条件退', '1', '0', '', '1', '10', '<p>取票地点: &ldquo;人工售票处&rdquo;或者&ldquo;自助取票机&rdquo;输入{取票凭证码和手机号}</p>\r\n        <p>费用包含：长隆野生动物世界+飞鸟乐园全票1张；</p>\r\n        <p>温馨提示：门票需在游玩日期首日起2天内任选时间游玩两个主题公园，每公园限进园一次且需同一人使用（凭门票及录入指纹验证入园）</p>\r\n        <p>价格说明</p>\r\n        <p>1.销售价</p>\r\n        <p>(1)跟团、自由行：①本起价是可选出发日期中，按双人出行共住一间房核算的最低单人价格。②产品价格会根据您所选择的出发日期、出行人数、入住酒店房型、航班或交通以及所选附加服务的不同而有所差别。</p>\r\n        <p>(2)邮轮：①本起价是可选出发日期中，按每间房入住&ldquo;最低可住人数&rdquo;核算的最低单人价。②产品价格会根据您所选择的出发日期、出行人数、入住房型、航班或交通以及所选附加服务的不同而有所差别。</p>\r\n        <p>(3)单资源：①本起价是本产品可售日期范围内的最低价。②产品价格会根据您所选择的套餐类型/资源类型、日期、数量等不同而有所差别。</p>\r\n        <p>2.参考价</p>\r\n        <p>产品展示的参考价（包括商品展示的划线价），可能是建议零售价、供应商指导价、挂牌价等，或该产品在慕旅游网平台或门店曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，建议零售价、供应商指导价、过往销售价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>\r\n        <p>3.折扣</p>\r\n        <p>如无特殊说明，折扣指在参考价基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系客服进行咨询。产品展示的促销类价格（包括但不限于限时秒杀价、尾货特价、预售价、特卖价、特价、促销价），均为基于参考价基础上，结合相应促销活动/销售计划得出的价格。</p>\r\n        <p>4.其他说明</p>\r\n        <p>商品促销信息以商品详情页信息为准；商品的成交以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前联系客服进行咨询。</p>');
INSERT INTO `sight_ticket` VALUES ('4', '1', '2020-06-10 04:12:53.771001', '2020-09-14 18:58:16.794724', '长隆野生动物世界(平日)门票', '23:52前可订明日', '11', '174', '10', '1000000', '999916', '5', '条件退', '1', '0', '', '1', '1', '<p>取票地点: &ldquo;人工售票处&rdquo;或者&ldquo;自助取票机&rdquo;输入{取票凭证码和手机号}</p>\r\n        <p>费用包含：长隆野生动物世界+飞鸟乐园全票1张；</p>\r\n        <p>温馨提示：门票需在游玩日期首日起2天内任选时间游玩两个主题公园，每公园限进园一次且需同一人使用（凭门票及录入指纹验证入园）</p>\r\n        <p>价格说明</p>\r\n        <p>1.销售价</p>\r\n        <p>(1)跟团、自由行：①本起价是可选出发日期中，按双人出行共住一间房核算的最低单人价格。②产品价格会根据您所选择的出发日期、出行人数、入住酒店房型、航班或交通以及所选附加服务的不同而有所差别。</p>\r\n        <p>(2)邮轮：①本起价是可选出发日期中，按每间房入住&ldquo;最低可住人数&rdquo;核算的最低单人价。②产品价格会根据您所选择的出发日期、出行人数、入住房型、航班或交通以及所选附加服务的不同而有所差别。</p>\r\n        <p>(3)单资源：①本起价是本产品可售日期范围内的最低价。②产品价格会根据您所选择的套餐类型/资源类型、日期、数量等不同而有所差别。</p>\r\n        <p>2.参考价</p>\r\n        <p>产品展示的参考价（包括商品展示的划线价），可能是建议零售价、供应商指导价、挂牌价等，或该产品在慕旅游网平台或门店曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，建议零售价、供应商指导价、过往销售价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>\r\n        <p>3.折扣</p>\r\n        <p>如无特殊说明，折扣指在参考价基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系客服进行咨询。产品展示的促销类价格（包括但不限于限时秒杀价、尾货特价、预售价、特卖价、特价、促销价），均为基于参考价基础上，结合相应促销活动/销售计划得出的价格。</p>\r\n        <p>4.其他说明</p>\r\n        <p>商品促销信息以商品详情页信息为准；商品的成交以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前联系客服进行咨询。</p>');
INSERT INTO `sight_ticket` VALUES ('5', '1', '2020-06-10 04:13:45.930235', '2020-09-15 17:49:56.580914', '长隆野生动物世界(平日)门票', '23:52前可订明日', '12', '147', '10', '1000000', '999998', '5', '条件退', '1', '0', '', '1', '1', null);
INSERT INTO `sight_ticket` VALUES ('6', '1', '2020-06-10 04:14:09.999777', '2020-09-14 16:48:42.398679', '长隆国际大马戏剧院（周末/节假日）门票', '23:52前可订明日', '11', '210', '10', '1000000', '999997', '5', '条件退', '1', '0', '', '1', '1', null);
INSERT INTO `sight_ticket` VALUES ('7', '1', '2020-06-10 04:14:53.396975', '2020-08-17 13:15:00.529425', '百万葵园成人票(官方 )', '23:52前可订明日', '11', '69', '10', '1000000', '999985', '1', '条件退', '1', '0', '', '1', '2', null);
INSERT INTO `sight_ticket` VALUES ('8', '1', '2020-06-10 04:15:16.465713', '2020-07-30 14:10:20.352708', '百万葵园买1送1', '23:52前可订明日', '12', '86', '10', '1000000', '999999', '5', '条件退', '1', '0', '', '1', '2', null);
INSERT INTO `sight_ticket` VALUES ('9', '1', '2020-06-10 04:15:44.577232', '2020-06-10 04:15:44.577261', '【当天可订 快速出票】百万葵园 儿童票', '23:52前可订明日', '12', '86', '10', '1000000', '1000000', '1', '条件退', '1', '0', '', '1', '2', null);
INSERT INTO `sight_ticket` VALUES ('10', '1', '2020-06-10 04:16:46.299237', '2020-08-24 12:03:47.705868', '广州塔460米摩天轮游乐套票成人票(16:00-18:00-仅当日可售)【16:00-18:00】', '18:00前随买随用', '11', '298', '10', '1000000', '999987', '5', '条件退', '1', '0', '', '1', '3', null);
INSERT INTO `sight_ticket` VALUES ('11', '1', '2020-06-10 04:17:27.128655', '2020-07-15 08:04:01.678379', '广州塔460米摩天轮游乐套票儿童票(14:00-16:00-仅当日可售)【14:00-16:00】', '16:00前随买随用', '11', '149', '10', '1000000', '999990', '5', '条件退', '1', '0', '', '1', '3', null);
INSERT INTO `sight_ticket` VALUES ('12', '1', '2020-06-10 04:18:18.875815', '2020-07-30 08:17:41.943068', '广州融创雪世界娱雪区2小时票', '大小同价（平日）', '11', '145', '10', '1000000', '999996', '5', '条件退', '1', '0', '', '1', '4', null);
INSERT INTO `sight_ticket` VALUES ('13', '1', '2020-06-10 04:18:53.974335', '2020-07-31 01:49:27.103953', '广州融创雪世界初级道3小时滑雪票', '大小同价（平日）', '11', '215', '10', '1000000', '999997', '5', '条件退', '1', '0', '', '1', '4', null);
INSERT INTO `sight_ticket` VALUES ('14', '1', '2020-06-10 04:19:48.790538', '2020-08-05 10:54:43.479028', '正佳极地海洋世界成人票', '23:52前可订明日', '11', '196', '10', '1000000', '999998', '1', '条件退', '1', '0', '', '1', '5', null);
INSERT INTO `sight_ticket` VALUES ('15', '1', '2020-06-10 04:20:21.068567', '2020-06-10 04:20:21.068596', '【有效期6.30号】正佳极地海洋世界（生肖鼠专用）成人票', '17:30前随买随用', '11', '80', '10', '1000000', '1000000', '5', '条件退', '1', '0', '', '1', '5', null);
INSERT INTO `sight_ticket` VALUES ('16', '1', '2020-06-10 04:21:02.985255', '2020-09-14 17:04:39.707498', '广州南粤园成人票', '23:52前可订明日', '11', '41', '10', '1000000', '999995', '1', '条件退', '1', '0', '', '1', '6', null);
INSERT INTO `sight_ticket` VALUES ('17', '1', '2020-06-10 04:21:29.824132', '2020-08-26 15:17:12.364633', '广东科学中心成人票', '23:52前可订明日', '11', '41', '10', '1000000', '999999', '5', '条件退', '1', '0', '', '1', '7', null);
INSERT INTO `sight_ticket` VALUES ('18', '1', '2020-06-10 04:21:54.004353', '2020-06-10 04:21:54.004385', '广东科学中心', '23:52前可订明日', '12', '100', '6', '1000000', '1000000', '1', '条件退', '1', '0', '', '1', '6', null);
INSERT INTO `sight_ticket` VALUES ('19', '1', '2020-06-10 04:23:15.450803', '2020-06-10 04:23:15.450837', '【通票】珠江夜游8码头1楼通用票', '23:52前可订明日21:00前可订今日,预订后20分钟可用', '11', '55', '10', '1000000', '1000000', '7', '条件退', '1', '0', '', '1', '8', null);
INSERT INTO `sight_ticket` VALUES ('20', '1', '2020-06-10 04:23:52.877356', '2020-06-10 04:23:52.877388', '【通票】珠江夜游8码头2楼通票', '23:52前可订明日21:00前可订今日,预订后20分钟可用', '11', '75', '10', '1000000', '1000000', '1', '条件退', '1', '0', '', '1', '8', null);
INSERT INTO `sight_ticket` VALUES ('21', '1', '2020-06-10 04:24:40.685149', '2020-06-10 04:24:40.685183', '岭南印象园成人票', '23:52前可订明日', '11', '55', '10', '1000000', '1000000', '8', '条件退', '1', '0', '', '1', '9', null);
INSERT INTO `sight_ticket` VALUES ('22', '1', '2020-06-10 04:25:00.392695', '2020-06-10 04:25:00.392727', '岭南印象园儿童/老人票', '23:52前可订明日', '12', '30', '10', '1000000', '1000000', '30', '条件退', '1', '0', '', '1', '9', null);

-- ----------------------------
-- Table structure for `system_image_related`
-- ----------------------------
DROP TABLE IF EXISTS `system_image_related`;
CREATE TABLE `system_image_related` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `summary` varchar(200) NOT NULL,
  `img` varchar(300) NOT NULL,
  `object_id` int(10) unsigned NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `system_image_related_content_type_id_3d7e6dcc_fk_django_co` (`content_type_id`) USING BTREE,
  KEY `system_image_related_user_id_eed277e9_fk_accounts_user_id` (`user_id`) USING BTREE,
  CONSTRAINT `system_image_related_ibfk_1` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of system_image_related
-- ----------------------------
INSERT INTO `system_image_related` VALUES ('1', '1', '2020-06-10 18:38:22.855568', '2020-06-10 18:38:22.855597', '评论1', '/static/sight/comment1.jpg', '4', '10', '2');
INSERT INTO `system_image_related` VALUES ('2', '1', '2020-06-10 18:38:37.158900', '2020-06-10 18:38:37.158929', '评论2', '/static/sight/comment2.jpg', '4', '10', '1');
INSERT INTO `system_image_related` VALUES ('3', '1', '2020-06-10 18:38:49.325084', '2020-06-10 18:38:49.325115', '评论3', '/static/sight/comment3.jpg', '4', '10', '1');
INSERT INTO `system_image_related` VALUES ('4', '1', '2020-06-10 18:39:07.914345', '2020-06-10 18:39:07.914382', '评论4', '/static/sight/comment4.jpg', '4', '10', '1');
INSERT INTO `system_image_related` VALUES ('5', '1', '2020-06-11 16:50:24.125258', '2020-06-11 16:50:24.125303', '景点门口', '/static/sight/a1.jpg', '1', '8', '1');
INSERT INTO `system_image_related` VALUES ('6', '1', '2020-06-11 16:50:37.455265', '2020-06-11 16:50:37.455308', '景点门口', '/static/sight/a2.jpg', '1', '8', '1');
INSERT INTO `system_image_related` VALUES ('7', '1', '2020-06-11 16:50:51.891303', '2020-06-11 16:50:51.891334', '景点门口', '/static/sight/a3.jpg', '1', '8', '1');
INSERT INTO `system_image_related` VALUES ('8', '1', '2020-06-11 16:51:06.630472', '2020-06-11 16:51:06.630506', '景点门口', '/static/sight/a4.jpg', '1', '8', '1');
INSERT INTO `system_image_related` VALUES ('9', '1', '2020-06-11 16:51:20.719109', '2020-06-11 16:51:20.719138', '景点门口', '/static/sight/a5.jpg', '1', '8', '1');
INSERT INTO `system_image_related` VALUES ('10', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '2', '8', '1');
INSERT INTO `system_image_related` VALUES ('11', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '2', '8', '1');
INSERT INTO `system_image_related` VALUES ('12', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '2', '8', '1');
INSERT INTO `system_image_related` VALUES ('13', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '2', '8', '1');
INSERT INTO `system_image_related` VALUES ('14', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '2', '8', '1');
INSERT INTO `system_image_related` VALUES ('15', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '3', '8', '1');
INSERT INTO `system_image_related` VALUES ('16', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '3', '8', '1');
INSERT INTO `system_image_related` VALUES ('17', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '3', '8', '1');
INSERT INTO `system_image_related` VALUES ('18', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '3', '8', '1');
INSERT INTO `system_image_related` VALUES ('19', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '3', '8', '1');
INSERT INTO `system_image_related` VALUES ('20', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '4', '8', '1');
INSERT INTO `system_image_related` VALUES ('21', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '4', '8', '1');
INSERT INTO `system_image_related` VALUES ('22', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '4', '8', '1');
INSERT INTO `system_image_related` VALUES ('23', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '4', '8', '1');
INSERT INTO `system_image_related` VALUES ('24', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '4', '8', '1');
INSERT INTO `system_image_related` VALUES ('25', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '5', '8', '1');
INSERT INTO `system_image_related` VALUES ('26', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '5', '8', '1');
INSERT INTO `system_image_related` VALUES ('27', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '5', '8', '1');
INSERT INTO `system_image_related` VALUES ('28', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '5', '8', '1');
INSERT INTO `system_image_related` VALUES ('29', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '5', '8', '1');
INSERT INTO `system_image_related` VALUES ('30', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '6', '8', '1');
INSERT INTO `system_image_related` VALUES ('31', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '6', '8', '1');
INSERT INTO `system_image_related` VALUES ('32', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '6', '8', '1');
INSERT INTO `system_image_related` VALUES ('33', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '6', '8', '1');
INSERT INTO `system_image_related` VALUES ('34', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '6', '8', '1');
INSERT INTO `system_image_related` VALUES ('35', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '7', '8', '1');
INSERT INTO `system_image_related` VALUES ('36', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '7', '8', '1');
INSERT INTO `system_image_related` VALUES ('37', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '7', '8', '1');
INSERT INTO `system_image_related` VALUES ('38', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '7', '8', '1');
INSERT INTO `system_image_related` VALUES ('39', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '7', '8', '1');
INSERT INTO `system_image_related` VALUES ('40', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '8', '8', '1');
INSERT INTO `system_image_related` VALUES ('41', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '8', '8', '1');
INSERT INTO `system_image_related` VALUES ('42', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '8', '8', '1');
INSERT INTO `system_image_related` VALUES ('43', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '8', '8', '1');
INSERT INTO `system_image_related` VALUES ('44', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '8', '8', '1');
INSERT INTO `system_image_related` VALUES ('45', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '9', '8', '1');
INSERT INTO `system_image_related` VALUES ('46', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '9', '8', '1');
INSERT INTO `system_image_related` VALUES ('47', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '9', '8', '1');
INSERT INTO `system_image_related` VALUES ('48', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '9', '8', '1');
INSERT INTO `system_image_related` VALUES ('49', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '9', '8', '1');
INSERT INTO `system_image_related` VALUES ('50', '1', '2020-06-11 16:50:24.000000', '2020-06-11 16:50:24.000000', '景点门口', '/static/sight/a1.jpg', '10', '8', '1');
INSERT INTO `system_image_related` VALUES ('51', '1', '2020-06-11 16:50:37.000000', '2020-06-11 16:50:37.000000', '景点门口', '/static/sight/a2.jpg', '10', '8', '1');
INSERT INTO `system_image_related` VALUES ('52', '1', '2020-06-11 16:50:51.000000', '2020-06-11 16:50:51.000000', '景点门口', '/static/sight/a3.jpg', '10', '8', '1');
INSERT INTO `system_image_related` VALUES ('53', '1', '2020-06-11 16:51:06.000000', '2020-06-11 16:51:06.000000', '景点门口', '/static/sight/a4.jpg', '10', '8', '1');
INSERT INTO `system_image_related` VALUES ('54', '1', '2020-06-11 16:51:20.000000', '2020-06-11 16:51:20.000000', '景点门口', '/static/sight/a5.jpg', '10', '8', '1');
INSERT INTO `system_image_related` VALUES ('55', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '5', '10', '2');
INSERT INTO `system_image_related` VALUES ('56', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '5', '10', '3');
INSERT INTO `system_image_related` VALUES ('57', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '5', '10', '3');
INSERT INTO `system_image_related` VALUES ('58', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '6', '10', '3');
INSERT INTO `system_image_related` VALUES ('59', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '8', '10', '2');
INSERT INTO `system_image_related` VALUES ('60', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '8', '10', '3');
INSERT INTO `system_image_related` VALUES ('61', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '8', '10', '3');
INSERT INTO `system_image_related` VALUES ('62', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '8', '10', '3');
INSERT INTO `system_image_related` VALUES ('63', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '10', '10', '2');
INSERT INTO `system_image_related` VALUES ('64', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '10', '10', '3');
INSERT INTO `system_image_related` VALUES ('65', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '10', '10', '3');
INSERT INTO `system_image_related` VALUES ('66', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '10', '10', '3');
INSERT INTO `system_image_related` VALUES ('67', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '12', '10', '2');
INSERT INTO `system_image_related` VALUES ('68', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '12', '10', '3');
INSERT INTO `system_image_related` VALUES ('69', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '12', '10', '3');
INSERT INTO `system_image_related` VALUES ('70', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '12', '10', '3');
INSERT INTO `system_image_related` VALUES ('71', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '14', '10', '2');
INSERT INTO `system_image_related` VALUES ('72', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '14', '10', '3');
INSERT INTO `system_image_related` VALUES ('73', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '14', '10', '3');
INSERT INTO `system_image_related` VALUES ('74', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '14', '10', '3');
INSERT INTO `system_image_related` VALUES ('75', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '16', '10', '2');
INSERT INTO `system_image_related` VALUES ('76', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '16', '10', '3');
INSERT INTO `system_image_related` VALUES ('77', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '16', '10', '3');
INSERT INTO `system_image_related` VALUES ('78', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '16', '10', '3');
INSERT INTO `system_image_related` VALUES ('79', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '18', '10', '2');
INSERT INTO `system_image_related` VALUES ('80', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '18', '10', '3');
INSERT INTO `system_image_related` VALUES ('81', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '18', '10', '3');
INSERT INTO `system_image_related` VALUES ('82', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '18', '10', '3');
INSERT INTO `system_image_related` VALUES ('83', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '20', '10', '2');
INSERT INTO `system_image_related` VALUES ('84', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '20', '10', '3');
INSERT INTO `system_image_related` VALUES ('85', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '20', '10', '3');
INSERT INTO `system_image_related` VALUES ('86', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '20', '10', '3');
INSERT INTO `system_image_related` VALUES ('87', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '22', '10', '2');
INSERT INTO `system_image_related` VALUES ('88', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '22', '10', '3');
INSERT INTO `system_image_related` VALUES ('89', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '22', '10', '3');
INSERT INTO `system_image_related` VALUES ('90', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '22', '10', '3');
INSERT INTO `system_image_related` VALUES ('91', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '24', '10', '2');
INSERT INTO `system_image_related` VALUES ('92', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '24', '10', '3');
INSERT INTO `system_image_related` VALUES ('93', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '24', '10', '3');
INSERT INTO `system_image_related` VALUES ('94', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '24', '10', '3');
INSERT INTO `system_image_related` VALUES ('95', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '26', '10', '2');
INSERT INTO `system_image_related` VALUES ('96', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '26', '10', '3');
INSERT INTO `system_image_related` VALUES ('97', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '26', '10', '3');
INSERT INTO `system_image_related` VALUES ('98', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '26', '10', '3');
INSERT INTO `system_image_related` VALUES ('99', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '28', '10', '2');
INSERT INTO `system_image_related` VALUES ('100', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '28', '10', '3');
INSERT INTO `system_image_related` VALUES ('101', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '28', '10', '3');
INSERT INTO `system_image_related` VALUES ('102', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '28', '10', '3');
INSERT INTO `system_image_related` VALUES ('103', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '30', '10', '2');
INSERT INTO `system_image_related` VALUES ('104', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '30', '10', '3');
INSERT INTO `system_image_related` VALUES ('105', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '30', '10', '3');
INSERT INTO `system_image_related` VALUES ('106', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '30', '10', '3');
INSERT INTO `system_image_related` VALUES ('107', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '32', '10', '2');
INSERT INTO `system_image_related` VALUES ('108', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '32', '10', '3');
INSERT INTO `system_image_related` VALUES ('109', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '32', '10', '3');
INSERT INTO `system_image_related` VALUES ('110', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '32', '10', '3');
INSERT INTO `system_image_related` VALUES ('111', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '34', '10', '2');
INSERT INTO `system_image_related` VALUES ('112', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '34', '10', '3');
INSERT INTO `system_image_related` VALUES ('113', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '34', '10', '3');
INSERT INTO `system_image_related` VALUES ('114', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '34', '10', '3');
INSERT INTO `system_image_related` VALUES ('115', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '36', '10', '2');
INSERT INTO `system_image_related` VALUES ('116', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '36', '10', '3');
INSERT INTO `system_image_related` VALUES ('117', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '36', '10', '3');
INSERT INTO `system_image_related` VALUES ('118', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '36', '10', '3');
INSERT INTO `system_image_related` VALUES ('119', '1', '2020-06-10 18:38:22.000000', '2020-06-10 18:38:22.000000', '评论1', '/static/sight/comment1.jpg', '38', '10', '2');
INSERT INTO `system_image_related` VALUES ('120', '1', '2020-06-10 18:38:37.000000', '2020-06-10 18:38:37.000000', '评论2', '/static/sight/comment2.jpg', '38', '10', '3');
INSERT INTO `system_image_related` VALUES ('121', '1', '2020-06-10 18:38:49.000000', '2020-06-10 18:38:49.000000', '评论3', '/static/sight/comment3.jpg', '38', '10', '3');
INSERT INTO `system_image_related` VALUES ('122', '1', '2020-06-10 18:39:07.000000', '2020-06-10 18:39:07.000000', '评论4', '/static/sight/comment4.jpg', '38', '10', '3');

-- ----------------------------
-- Table structure for `system_slider`
-- ----------------------------
DROP TABLE IF EXISTS `system_slider`;
CREATE TABLE `system_slider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `desc` varchar(100) DEFAULT NULL,
  `types` smallint(6) NOT NULL,
  `img` varchar(255) NOT NULL,
  `reorder` smallint(6) NOT NULL,
  `start_time` datetime(6) DEFAULT NULL,
  `end_time` datetime(6) DEFAULT NULL,
  `target_url` varchar(255) DEFAULT NULL,
  `is_valid` tinyint(1) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of system_slider
-- ----------------------------
INSERT INTO `system_slider` VALUES ('1', '标题', null, '10', '/static/home/banner/banner1.jpg', '1', null, null, null, '1', '2020-08-16 05:30:27.000000', '2020-08-16 05:30:30.000000');
INSERT INTO `system_slider` VALUES ('2', '标题2', null, '10', '/static/home/banner/banner2.jpg', '1', null, null, null, '1', '2020-08-16 05:31:04.000000', '2020-08-16 05:31:06.000000');
