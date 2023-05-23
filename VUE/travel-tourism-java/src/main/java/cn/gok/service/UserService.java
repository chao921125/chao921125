package cn.gok.service;

import cn.gok.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {
    //增
    public void addUser(User user);
    //删
    public void deleteUser(int id);
    //改
    public void updateUser(@Param("user_id") int user_id,@Param("user_name") String user_name,@Param("user_pwd") String user_pwd,@Param("user_tel") String user_tel,@Param("user_email") String user_email );
    //查
    public List<User> selectUser();

    //登录方法
    public boolean login(@Param("user_name") String user_name, @Param("user_pwd") String user_pwd);

    //登录方法
    public boolean register(User user);
}
