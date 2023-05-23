package cn.gok.service;

import cn.gok.entity.Hotel;
import cn.gok.entity.HotelPic;

import java.util.List;

public interface HotelService {

    //参数一：当前页  参数二：每页显示记录
    List<Hotel> findByPage(Integer page,Integer rows);

    //查询酒店详情
    Hotel findHoteldetail(Integer hotel_id);

    //查询总条数
    Integer findTotals();

    //查询所有方法
    List<Hotel> findAll();

    //查询所有图片的方法
    List<HotelPic> findAllPicurl();

    //查询推荐酒店
    List<Hotel> findRecommendHotel();

    //查询品牌
    List<Hotel> findhotelbrandlist();

    //查询酒店列表里面的品牌
    List<Hotel> hotelListBrand(String hotelbrand);

}
