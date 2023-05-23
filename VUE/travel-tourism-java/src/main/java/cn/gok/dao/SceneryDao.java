package cn.gok.dao;

import cn.gok.entity.Scenery;
import cn.gok.entity.SceneryPic;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
@Mapper
@Component
public interface SceneryDao extends BaseDao{
    //查询酒店表中所有图片的方法
    List<SceneryPic> findAllPicurl();

    Scenery findScenerydetail(Integer scenery_id);
}
