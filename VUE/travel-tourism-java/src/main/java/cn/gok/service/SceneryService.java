package cn.gok.service;

import cn.gok.entity.Scenery;
import cn.gok.entity.SceneryPic;

import java.util.List;

public interface SceneryService {

    //参数一：当前页  参数二：每页显示记录
    List<Scenery> findByPage(Integer page, Integer rows);

    //查询总条数
    Integer findTotals();

    //查询所有方法
    List<Scenery> findAll();

    //查询所有图片的方法
    List<SceneryPic> findAllPicurl();
    Scenery findScenerydetail(Integer scenery_id);
}
