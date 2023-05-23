package cn.gok.demo.test;

import cn.gok.DemoApplication;
import cn.gok.entity.Hotel;
import cn.gok.service.HotelService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
@SpringBootTest(classes = DemoApplication.class)

public class testHotelService {
    @Autowired
    private HotelService hotelService;
    @Test
    public void testFindByPage(){
        List<Hotel> list = hotelService.findByPage(1,2);
        System.out.println(list);
    }
}
