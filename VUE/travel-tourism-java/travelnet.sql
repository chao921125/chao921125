/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : travelnet

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 18/03/2022 15:54:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hotel
-- ----------------------------
DROP TABLE IF EXISTS `hotel`;
CREATE TABLE `hotel`  (
  `hotel_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '酒店编号',
  `hotel_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '酒店名',
  `hotel_picurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '酒店图片链接',
  `hotel_address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '酒店地址',
  `hotel_price` double(10, 2) NULL DEFAULT NULL COMMENT '酒店价格',
  `hotel_suggest` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '酒店介绍',
  `hotel_score` double(5, 1) NULL DEFAULT NULL COMMENT '酒店评分',
  PRIMARY KEY (`hotel_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hotel
-- ----------------------------
INSERT INTO `hotel` VALUES (1, '泉州华侨大厦', 'https://i.postimg.cc/WbnKSWbG/1.jpg', '金融商务街/美食商业街|百源路1号', 4999.00, '泉州华侨大厦位于古城最繁华的市中心百源清池畔，环境幽雅，风景宜人。房间设施齐全，多功能厅豪华大方。', 4.8);
INSERT INTO `hotel` VALUES (2, '江夏之梦公寓', 'https://i.postimg.cc/QdYzZF7V/2.jpg', '奇龙物流大厦', 3849.00, '梦幻色彩的公寓', 4.5);
INSERT INTO `hotel` VALUES (3, '情缘假日酒店', 'https://i.postimg.cc/5tHR4f5g/3.jpg', '半月湾度假村36号', 8556.00, '梦境之地，风景宜人，设施齐全，配套服务优质。服务质量更是堪称一绝，非常适合单身男女的寻欢作乐之处。', 4.9);
INSERT INTO `hotel` VALUES (4, '石狮天都酒店', 'https://i.postimg.cc/mDCp9V5F/4.jpg', '市中心南洋路924号(美食街附近)', 2300.00, '毗邻鸳鸯池公园、鸳鸯池辅料市场、金汇纺织面料市场、长途汽车站，交通便利。', 3.8);
INSERT INTO `hotel` VALUES (5, '泉州酒店', 'https://i.postimg.cc/C54vP5Yh/5.jpg', '宝山花园（东门）', 5600.00, '泉州酒店外观豪华大方，房间舒适典雅，配套设施齐备。宾客置身于顶层花园酒店，谈笑间尽揽古城胜景。', 4.3);
INSERT INTO `hotel` VALUES (6, '摩尔庄园', 'https://i.postimg.cc/G3PSh7DW/6.jpg', '摩尔社区摩尔村摩尔街道', 4300.00, '来放牛放羊，体验农家乐趣', 4.7);
INSERT INTO `hotel` VALUES (7, '任我行酒店', 'https://i.postimg.cc/cHSMpWFr/7.jpg', '水浒村水浒街道', 4999.00, '大碗喝酒，大口吃肉，岂不美哉', 4.7);
INSERT INTO `hotel` VALUES (8, '泉州航空酒店', 'https://i.postimg.cc/4xmG4Vxt/000gWsZ5.jpg', '泉州动车站/清源山风景区|丰泽街339号', 4177.00, '乘坐厦航航班早班机的客人，每天早上04：50可免费提供泉州→厦门机场穿梭巴士！', 4.8);
INSERT INTO `hotel` VALUES (9, '锦江之星(泉州温陵北路钟楼店)', 'https://i.postimg.cc/PxH0DwTS/000dAgzz.jpg', '金融商务街/美食商业街|温陵北路359号', 6000.00, '锦江之星（泉州温陵北路店）是一家锦江之星旅馆有限公司旗下的连锁酒店，位于泉州市东湖公园正门对面，交通便利。', 4.5);
INSERT INTO `hotel` VALUES (10, '泉州崇武西沙湾假日酒店', 'https://i.postimg.cc/3JkfdB2K/H60w74-Bqy-A.jpg', '|崇武镇西沙湾', 3560.00, '泉州崇武西沙湾假日酒店是大型的度假酒店，酒店位于著名的“中国魅力古镇”崇武海滨西沙湾。', 4.7);
INSERT INTO `hotel` VALUES (11, '城适旅休酒店(泉州美食街店)', 'https://i.postimg.cc/X7T3mYw4/ILOu-S1-AVXy.jpg', '泉州动车站/清源山风景区|美食街69号，临近丰泽街、温陵北路、机场', 1399.00, '无', 4.2);

-- ----------------------------
-- Table structure for hotel_user
-- ----------------------------
DROP TABLE IF EXISTS `hotel_user`;
CREATE TABLE `hotel_user`  (
  `userId` int(0) NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userPassword` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userSex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userAddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userTelephone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userRole` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hotel_user
-- ----------------------------
INSERT INTO `hotel_user` VALUES (1, '张三', '123456', '男', NULL, '110', 0);

-- ----------------------------
-- Table structure for scenery
-- ----------------------------
DROP TABLE IF EXISTS `scenery`;
CREATE TABLE `scenery`  (
  `scenery_id` int(0) NOT NULL COMMENT '景点id',
  `scenery_picurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '景点图片',
  `scenery_startcity` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '出发城市',
  `scenery_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '景点描述',
  `scenery_price` double NULL DEFAULT NULL COMMENT '景点价格',
  `scenery_type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '景点类型',
  `scenery_directory` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '行程介绍',
  PRIMARY KEY (`scenery_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of scenery
-- ----------------------------
INSERT INTO `scenery` VALUES (1, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到浙江温州雁荡山楠溪江江心屿动车三日旅游线路--X1', 980, '跟团游', '泉州西湖假期旅行社  Tel: 0595-22176648\n');
INSERT INTO `scenery` VALUES (2, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到厦门北辰山漳州长泰漂流烧篝火晚会一日旅游线路', 450, '跟团游', '泉州西湖假期旅行社  Tel: 0595-22176648');
INSERT INTO `scenery` VALUES (3, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到厦门金光湖漳州长泰漂流烧篝火晚会一日旅游线路', 460, '跟团游', '11');
INSERT INTO `scenery` VALUES (4, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 890, '跟团游', '11');
INSERT INTO `scenery` VALUES (5, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 2254, '跟团游', '11');
INSERT INTO `scenery` VALUES (6, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 1215, '跟团游', '11');
INSERT INTO `scenery` VALUES (7, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 4223, '跟团游', '11');
INSERT INTO `scenery` VALUES (8, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 1540, '跟团游', '11');
INSERT INTO `scenery` VALUES (9, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 892, '跟团游', '11');
INSERT INTO `scenery` VALUES (10, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 4234, '跟团游', '11');
INSERT INTO `scenery` VALUES (11, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 1838, '跟团游', '11');
INSERT INTO `scenery` VALUES (12, 'http://www.alltrip.cn/content/images/common/item-0.jpg', '泉州', '泉州到宁德白水洋鸳鸯溪太姥山汽车三日旅游线路--B4', 1651, '跟团游', '11');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `user_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `user_tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `user_email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `user_role` int(0) NULL DEFAULT 1 COMMENT '用户角色编号(默认是1：用户）',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_ibfk_1`(`user_role`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '张三', '123456', '110', '123@qq.com', 1);
INSERT INTO `user` VALUES (2, '李四', '123123', '120', '456@qq.com', 1);
INSERT INTO `user` VALUES (3, '张汉堡', '123456', '1120', '123@qq.com', 1);
INSERT INTO `user` VALUES (5, '铁憨憨', '12345', '120', '123@qq.com', 1);
INSERT INTO `user` VALUES (6, '杨永信', '12345', '120', '123@qq.com', 1);
INSERT INTO `user` VALUES (7, '镇店之堡', '123456', '120', '120', 1);
INSERT INTO `user` VALUES (8, '罗总牛逼', '123', '123', '123', 1);
INSERT INTO `user` VALUES (9, '花泽香菜', '123456', '15165151', '123@qq.com', 1);

SET FOREIGN_KEY_CHECKS = 1;
