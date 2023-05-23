package cn.gok.service.Impl;


import cn.gok.dao.SceneryDao;
import cn.gok.entity.Scenery;
import cn.gok.entity.SceneryPic;
import cn.gok.service.SceneryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service()
@Transactional
public class SceneryServiceImpl implements SceneryService {
    @Autowired
    private SceneryDao  sceneryDao;


    @Override
    public List<Scenery> findByPage(Integer page, Integer rows) {
        int start = (page-1)*rows;
        return sceneryDao.findByPage(start,rows);
    }

    @Override
    public Integer findTotals() {
        return sceneryDao.findTotals();
    }

    @Override
    public List<Scenery> findAll() {
        return sceneryDao.findAll();
    }

    @Override
    public List<SceneryPic> findAllPicurl() {
        List<SceneryPic> list=sceneryDao.findAllPicurl();
        System.out.println("服务层"+list);
        return sceneryDao.findAllPicurl();
    }
    @Override
    public Scenery findScenerydetail(Integer scenery_id) {
        return sceneryDao.findScenerydetail(scenery_id);
    }
}
