package cn.gok.controller;

import cn.gok.entity.Scenery;
import cn.gok.entity.SceneryPic;
import cn.gok.service.SceneryService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/scenery")
public class SceneryController {
    @Autowired
    private SceneryService  sceneryService;

    @RequestMapping("/sceneryFindPage")
    public Map<String,Object> findByPage(Integer page,Integer rows){
        //设置起始页和展示数据的默认值防止报错
        page = page==null?1:page;
        rows = rows==null?4:rows;

        //定义map集合存放数据内容
        HashMap<String,Object> map = new HashMap<>();
        //分页处理
        List<Scenery> sceneryList = sceneryService.findByPage(page,rows);
        //计算总页数
        Integer totals = sceneryService.findTotals();
        /*
            总页数=数据库查询到的总条数%每页展示数
            如果余数为0，代表可以整除，页数直接为结果值
            如果余数不为0，则表示不能整除，难么直接把结果集+1，额外新增一页
         */

        Integer totalPage = totals%rows==0?totals/rows:totals/rows+1;
        //把获取的数据存入map集合中
        map.put("sceneryList",sceneryList);
        map.put("totals",totals);
        map.put("totalPage",totalPage);
        map.put("page",page);

        return map;
    }

    @RequestMapping("/findAll")
    public List<Scenery> findAll(){
        //配置分页查询：pageNum：当前页数  pageSize：每页放几个数字
        int pageNum = 1;
        PageHelper.startPage(pageNum,5);
        return sceneryService.findAll();
    }

    @RequestMapping("/findAllPicurl")
    public List<SceneryPic> findAllPicurl(){
        List<SceneryPic> list = sceneryService.findAllPicurl();
        System.out.println("控制层："+list);
        return list;
    }
    @RequestMapping("/findScenerydetail")
    public Scenery findScenerydetail(Integer scenery_id){
        return sceneryService.findScenerydetail(scenery_id);
    }

}
