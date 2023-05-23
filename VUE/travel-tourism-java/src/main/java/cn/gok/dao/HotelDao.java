package cn.gok.dao;

import cn.gok.entity.Hotel;
import cn.gok.entity.HotelPic;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface HotelDao extends BaseDao {


    //查询酒店表中所有图片的方法
    List<HotelPic>findAllPicurl();
    //查询酒店详情
    Hotel findHoteldetail(Integer hotel_id);
    //查询推荐酒店
    List<Hotel> findRecommendHotel();
    //查询品牌
    List<Hotel> findhotelbrandlist();
    //查询酒店列表页的品牌
    List<Hotel>  hotelListBrand(String hotelbrand);
}
