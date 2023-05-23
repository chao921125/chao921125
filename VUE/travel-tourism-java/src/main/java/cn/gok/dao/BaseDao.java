package cn.gok.dao;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BaseDao<T,K> {

    void save(T t);

    void update(T t);

    void delete(K k);

    List<T> findAll();

    //第一个参数：当前页； 第二个参数：每页展示的个数
    List<T> findByPage(@Param("start") Integer start,@Param("rows") Integer rows);

    Integer findTotals();
}
