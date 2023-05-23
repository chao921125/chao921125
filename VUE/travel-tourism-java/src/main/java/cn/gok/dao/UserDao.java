package cn.gok.dao;

import cn.gok.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Component
public interface UserDao {
    //增
    public void addUser(User user);
    //删
    public void deleteUser(int id);
    //改
    public void updateUser(@Param("user_id") int user_id,@Param("user_name") String user_name,
                           @Param("user_pwd") String user_pwd,@Param("user_tel") String user_tel,
                           @Param("user_email") String user_email);
    //查
    public List<User> selectUser();
}
