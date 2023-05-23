package cn.gok.service.Impl;

import cn.gok.dao.HotelDao;
import cn.gok.entity.Hotel;
import cn.gok.entity.HotelPic;
import cn.gok.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class HotelServiceImpl implements HotelService {

    @Autowired
    private HotelDao hotelDao;

    @Override
    public List<Hotel> findByPage(Integer page, Integer rows) {
        //当前页=（起始页-1）*页面展示数据个数
        int start = (page-1)*rows;
        return hotelDao.findByPage(start,rows);
    }

    @Override
    public Hotel findHoteldetail(Integer hotel_id) {
        return hotelDao.findHoteldetail(hotel_id);
    }

    @Override
    public Integer findTotals() {
        return hotelDao.findTotals();
    }

    @Override
    public List<Hotel> findAll() {
        return hotelDao.findAll();
    }

    @Override
    public List<HotelPic> findAllPicurl() {
        List<HotelPic> list = hotelDao.findAllPicurl();
        System.out.println("服务层："+list);
        return hotelDao.findAllPicurl();
    }

    @Override
    public List<Hotel> findRecommendHotel() {
        return hotelDao.findRecommendHotel();
    }

    @Override
    public List<Hotel> findhotelbrandlist() {
        return hotelDao.findhotelbrandlist();
    }

    @Override
    public List<Hotel> hotelListBrand(String hotelbrand) {
        return hotelDao.hotelListBrand(hotelbrand);
    }

}
